import React, { useEffect, useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebaseConfig";
import "./AuthGoogle.css"; 

const AuthGoogle = () => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });

  return (
    <button className="button-google" onClick={handleClick}>
      <img src="/logogoogle.png" alt="Google Logo" />Login com conta google 
    </button>
  );
};

export default AuthGoogle;
