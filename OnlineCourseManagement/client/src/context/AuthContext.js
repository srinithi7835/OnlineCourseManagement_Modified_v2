import React, { createContext, useContext, useState } from "react";

const AuthContext=createContext(null);
export const AuthProvider=({children})=>{
  const [user,setUser]=useState(()=>{try{return JSON.parse(localStorage.getItem("ocm_user"))||null}catch{return null}});
  const login=(email,password,role="student")=>{const name=email.split("@")[0]||"Learner"; const next={id:Date.now(),name:name.charAt(0).toUpperCase()+name.slice(1),email,role}; localStorage.setItem("ocm_user",JSON.stringify(next)); setUser(next); return next;};
  const logout=()=>{localStorage.removeItem("ocm_user");setUser(null)};
  const value={user,login,logout,isAuthenticated:!!user};
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export const useAuth=()=>useContext(AuthContext);
