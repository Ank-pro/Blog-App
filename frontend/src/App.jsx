import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import  Home  from "./components/home/Home";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import CreateBlog  from "./components/create/createBlog";
import SelectedBlog from "./components/post/SelectedBlog"
import  EditBlog  from "./components/edit/EditBlog";
import  NavBar  from "./components/nav-bar/NavBar";

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
