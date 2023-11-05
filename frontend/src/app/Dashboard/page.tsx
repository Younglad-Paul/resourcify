import React from 'react'
import Container from "./ui/Container";
import SideBar from './SideBar/page'
import Header from './Header/page'
import Body from './Body/page'
import Nav from './Nav/page'
import Footer from './Footer/page';

const Dashboard = () => {
  return (
    <div>
      <Container>
    <div className='flex'>
      <SideBar />
      <Header />
    </div>
    <Nav />
      <Body />
      <Footer />
      </Container>
    </div>
  )
}

export default Dashboard
