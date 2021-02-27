import React from "react";
import Header from '../../Components/Header/Header';
import {Link } from 'react-router-dom';
export default function HomePage() {
  return (
    <>
      <Header
        mainText="Home"
        backonClick={() => console.log("back clicked @ Home")}
        showBack = {false}
      />
      <div>This is Home Page</div>
      <Link to="/events">Go tp Events</Link>
    </>
  );
}
