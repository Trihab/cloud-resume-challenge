import { useEffect, useState } from 'react'
import Header from 'components/Header'
import 'stylesheets/default.css'
import { Outlet, useLocation } from 'react-router'
import Footer from "components/Footer"

export default function Layout() {
  const location = useLocation();

  let pageName = ''
  useEffect(() => {
    if(location.pathname === "/"){
      pageName = 'home'
    }else if(location.pathname === "/resume"){
      pageName = "resume"
    }else if(location.pathname === "/projects"){
      pageName = "projects"
    }
    document.body.setAttribute("location", pageName);
    return () => {
      document.body.removeAttribute("location");
    };
  })


  return (
    <>
      <Header></Header>
      <Outlet />
      <Footer/>
    </>
  )
}