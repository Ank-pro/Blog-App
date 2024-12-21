import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import  Home  from "./components/home/Home";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import SelectedBlog from "./components/post/SelectedBlog.jsx"
import  EditBlog  from "./components/edit/EditBlog.jsx";
import  NavBar  from "./components/nav-bar/NavBar.jsx";
import CreateBlog from "./components/create/CreateBlog.jsx";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/create" element = {<CreateBlog/>}/>
        <Route path="/post/:id" element={<SelectedBlog/>}/>
        <Route path="/editBlog/:id" element={<EditBlog/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
