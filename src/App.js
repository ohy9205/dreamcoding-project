import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { auth } from "./api/firebase";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
