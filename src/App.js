import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { auth } from "./api/firebase";

function App() {
  const [userInfo, setUserInfo] = useState(null);
  const [isLogin, setIsLogin] = useState(null);

  // console.log(auth.currentUser);
  return (
    <>
      <Header userInfo={userInfo} />
      <Outlet />
    </>
  );
}

export default App;
