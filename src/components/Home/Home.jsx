import React from "react";
import Header from "./Navbar";
import Navbar from "./Navbar";
import ProfileDropdown from "./ProfileDropdown";
import Coursecategory from "./Coursecategory";
import Carousel from "./Carousel";
import Courselist from "./Courselist";
import Footer from "./Footer";

function Home() {
  return (
    <section className="h-screen ">
      <Navbar></Navbar>
      <Coursecategory></Coursecategory>
      <Carousel></Carousel>
      <h1 className="m-1 mt-2 font-medium text-2xl">Best Courses for you</h1>
      <Courselist></Courselist>
      {/* <ProfileDropdown></ProfileDropdown> */}
      <Footer></Footer>
    </section>
  );
}

export default Home;
