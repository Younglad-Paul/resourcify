import { customFetch } from "@/lib/utils";
import { RootState } from "@/redux/store";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

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

const getUserFromLocalStore = (): User => {
  const user = localStorage.getItem("userInfo");
  return user ? JSON.parse(user) || null : null;
};

const initialState: UserState = {
  user: getUserFromLocalStore() || null,
  isLoggedIn: false,
  token: "",
  isLoading: false,
  isPopUp: false,
};

export const fetchUser = createAsyncThunk(
  "user/getUser",
  async (_, { rejectWithValue, getState }) => {
    const token = (getState() as RootState).userState.token;

    try {
      const resp = await customFetch("/employee/me", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      return resp.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const apiError = error.response?.data as ApiErrorResponse;
        return rejectWithValue(apiError);
      } else {
        return rejectWithValue({ message: "An error occurred" });
      }
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/getUser",
  async (user, { rejectWithValue, getState }) => {
    const token = (getState() as RootState).userState.token;

    try {
      const resp = await customFetch.put("/api/employee/me", user, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      return resp.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const apiError = error.response?.data as ApiErrorResponse;
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
        console.log(payload);
        localStorage.setItem("userInfo", JSON.stringify(payload));
      })
      .addCase(fetchUser.rejected, (state) => {
        state.isLoading = false;
      });

    // .addCase(updateUser.pending, () => {});

    // builder.addCase(updateUser.pending, (state) => {
    //   // state;
    // });

    // .addCase(updateUser.pending, (state) => {
    //   state.isLoading = false;
    // })
    // .addCase(updateUser.fulfilled, (state, { payload }) => {
    //   const user = payload;
    //   state.isLoading = false;
    //   state.user = user;
    //   // getUserFromLocalStore(user);
    // })
    // .addCase(updateUser.rejected, (state) => {
    //   state.isLoading = false;
    // });
  },
});

export const { getuserToken, closePopUp, openPopUp } = userSlice.actions;

export default userSlice.reducer;
