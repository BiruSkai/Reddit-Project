import React from 'react';
import { Navbar } from '../navbar/Navbar';
import { LeftSideBar } from '../leftSideBar/LeftSideBar';
import { Footer } from '../footer/Footer';
import { Posts } from '../features/posts/Posts';

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
