import { useState } from "react";
import { Routes } from "react-router-dom";
import Maptest from "./Maptest";
import UserProfile from "./components/UserProfile";

export default function App() {
  return (
    <div>
      <Maptest />
      <h1>Priyanka, Sam, Curt's Capstone</h1>
      <UserProfile />
    </div>
  );
}
