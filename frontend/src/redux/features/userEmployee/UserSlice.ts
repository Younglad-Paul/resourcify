// UserSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../store";
import { customFetch } from "@/lib/utils";

// Types
type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  accounts: string[];
  walletBalance: number;
};

type UserState = {
  user: User | null;
  isLoggedIn: boolean;
  token: string;
  isLoading: boolean;
  isPopUp: boolean;
};

const getUserFromLocalStore = (): User | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  const user = localStorage.getItem("userInfo");
  return user ? JSON.parse(user) : null;
};

const initialState: UserState = {
  user: getUserFromLocalStore(),
  isLoggedIn: false,
  token: "",
  isLoading: false,
  isPopUp: false,
};

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (_, { rejectWithValue, getState }) => {
    const token = (getState() as { user: UserState }).user.token;

    try {
      const response = await customFetch("/employee/me", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const apiError = error.response?.data;
        return rejectWithValue(apiError);
      } else {
        return rejectWithValue({ message: "An error occurred" });
      }
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (user, { rejectWithValue, getState }) => {
    const token = (getState() as { user: UserState }).user.token;

    try {
      const response = await customFetch.put("/api/employee/me", user, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const apiError = error.response?.data;
        return rejectWithValue(apiError);
      } else {
        return rejectWithValue({ message: "An error occurred" });
      }
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getuserToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    openPopUp: (state) => {
      state.isPopUp = true;
    },
    closePopUp: (state) => {
      state.isPopUp = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        localStorage.setItem("userInfo", JSON.stringify(payload));
        state.isLoading = false;
        state.isLoggedIn = true;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(updateUser.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { getuserToken, closePopUp, openPopUp } = userSlice.actions;

export default userSlice.reducer;
