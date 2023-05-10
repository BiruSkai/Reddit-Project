import React from 'react';
import { Navbar } from '../navbar/Navbar';
import { LeftSideBar } from '../leftSideBar/LeftSideBar';
import { Posts } from '../posts/Posts';
import { Footer } from '../footer/Footer';

export const Main = () => {
  return (
    <>
      <Navbar/>
      <LeftSideBar/>
      <Posts/>
      <Footer/>
    </>
  )
}
