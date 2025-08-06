import { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
//import Coursecategory from "./components/Home/Coursecategory";

import StudentDashboard from "./components/Student/StudentDashboard";
import AllCourses from "./components/Student/AllCourses";
import CourseDetails from "./components/Student/CourseDetails";
import PurchasedCourses from "./components/Student/PurchasedCourses";


//import NewCourseForm from "./components/Instructor/NewCourseForm";
//import AddNewContent from "./components/Instructor/AddNewCourse";
import InstructorDashBoard from "./components/Instructor/InstructorDashBoard";
import AddNewCourse from "./components/Instructor/AddNewCourse";
import AddNewContent from "./components/Instructor/AddNewContent";
import InstructorProfileForm from "./components/Instructor/InstructorProfileForm";
import CourseList from "./components/Instructor/CourseList";
import CourseContentList from "./components/Instructor/CourseContentList";



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
<Route path="/instructor/profile" element={<InstructorProfileForm />} />
<Route path="/instructor/courses" element={<CourseList />} />
<Route path="/course-content/:courseId" element={<CourseContentList />} />
<Route path="/instructor/add-content/:courseId" element={<AddNewContent />} />
<Route path="/instructor/add-content" element={<AddNewContent />} />
<Route path="/instructor/all-courses" element={<CourseList />} />

<Route path="/student/dashboard" element={<StudentDashboard />} />
<Route path="/all-courses" element={<AllCourses />} />
<Route path="/course/:id" element={<CourseDetails />} />

        {/*  Homepage – All Courses */}
        <Route path="/" element={<AllCourses />} />

        {/* Course Details */}
        <Route path="/course/:id" element={<CourseDetails />} />

        {/* Purchased Courses */}
        <Route path="/student/purchased" element={<PurchasedCourses />} />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
