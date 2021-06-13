import React, { useEffect } from "react";
import Header from "./Header";

function Home() {

  useEffect(() => {
    document.getElementsByClassName("dropdown-toggle")[0].style.userSelect =
      "None";
  }, []);
  return (
    <>
      <Header />
      <h1 className="text-center mt-5">Welcome, User!</h1>
    </>
  );
}

export default Home;
