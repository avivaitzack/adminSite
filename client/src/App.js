import React from "react";
import {  Routes, Route } from "react-router-dom";
import CreateDepartment from './Admin/CreateDepartment';
import Departments from './Admin/Departments';
import Stores from './Admin/Stores';
import AdminMain from './Admin/Main'
import CreateStore from "./Admin/CreateStore";
import EditDepartment from "./Admin/EditDepartment";
import MainPage from "./MainPage";
import EditStore from "./Admin/EditStore";


export default function App() {
  return (
    <div>
      <MainPage/>
      <Routes>
          <Route path="/" element={<AdminMain/>} />
          <Route path="/Admin/Department/new" element={< CreateDepartment/>} />
          <Route path="/Admin/Department/edit/:depId" element={< EditDepartment/>} />
          <Route path="/Admin/Store/edit/:storeId" element={< EditStore/>} />
          <Route path="/Admin/stores" element={< Stores/>} />
          <Route path="/Admin/departments" element={< Departments/>} />
          <Route path="/Admin/Store/new" element={< CreateStore/>} />
        </Routes>
    </div>
  )
}
