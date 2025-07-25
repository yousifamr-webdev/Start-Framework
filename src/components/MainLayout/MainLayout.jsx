import React from 'react'
import { Outlet, NavLink, Link } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function MainLayout() {
  return (
    <>
      <Navbar/>
      <Outlet />
      <Footer/>
    </>
  );
}
