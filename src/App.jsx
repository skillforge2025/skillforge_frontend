import { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Coursecategory from "./components/Home/Coursecategory";
import StudentDashboard from "./components/Student/StudentDashboard";
import InstructorDashBoard from "./components/Instructor/InstructorDashBoard";
import NewCourseForm from "./components/Instructor/NewCourseForm";
import AddNewContent from "./components/Instructor/AddNewCourse";
import AddNewCourse from "./components/Instructor/AddNewCourse";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route
            path="/instructor/dashboard"
            element={<InstructorDashBoard />}
          />
          <Route path="/course/newcourse" element={<AddNewCourse />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
