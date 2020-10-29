import React, { useState } from "react";
import { useTodo } from "../hooks";
import Navbar from "./Navbar";
import Leftcolumn from "./Leftcolumn";
import Rightcolumn from "./Rightcolumn";
import Footer from "./Footer";
import Button from "@material-ui/core/Button";
export default function Notifications() {
  return (
    <div className='wholeHomepage'>
      <div className='row1'>
        <Navbar></Navbar>
      </div>
      <div className='row2'>
        <div className='col1'>
          <Leftcolumn></Leftcolumn>
        </div>
        <div className='col2'> Notifications </div>
        <div className='col3'>
          <Rightcolumn></Rightcolumn>
        </div>
      </div>
      <div className='row3'>
        <Footer></Footer>
      </div>
    </div>
  );
}
