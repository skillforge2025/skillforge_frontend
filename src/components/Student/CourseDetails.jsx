import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const CourseDetails = () => {
  const { id } = useParams(); // get courseId from route
  const navigate = useNavigate();

  const [course, setCourse] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [studentId, setStudentId] = useState(null); // if using ID to buy

  useEffect(() => {
    // Fetch course details
    axios.get(`http://localhost:8080/course/${id}`)
      .then(res => {
        setCourse(res.data);
      })
      .catch(err => {
        console.error("Failed to fetch course details", err);
      });

    // Simulate login check (replace with actual session/localStorage check)
    const studentData = JSON.parse(localStorage.getItem("student")); // assuming you save student object
    if (studentData && studentData.id) {
      setIsLoggedIn(true);
      setStudentId(studentData.id);
    }
  }, [id]);

  const handleBuy = () => {
    if (!isLoggedIn) {
      alert("Please login to purchase the course.");
      navigate("/login"); // redirect to login page
      return;
    }

    // Prepare request payload
    const payload = {
      studentId: studentId,
      courseId: id
    };

    axios.post("http://localhost:8080/course/buy", payload)
      .then(res => {
        alert("Course purchased successfully!");
        navigate("/student/purchased"); // optional: redirect to purchased list
      })
      .catch(err => {
        console.error("Purchase failed", err);
        alert("Failed to purchase course.");
      });
  };

  if (!course) return <p>Loading course details...</p>;

  return (
    <div>
      <h2>{course.tittle}</h2>
      <p>{course.description}</p>
      <p>Duration: {course.duration}</p>
      <p>Category: {course.category}</p>
      <p>Amount: ₹{course.amount}</p>

      {/* Buy Now Button */}
      <button onClick={handleBuy} disabled={!isLoggedIn}>
        Buy Now
      </button>
    </div>
  );
};

export default CourseDetails;
