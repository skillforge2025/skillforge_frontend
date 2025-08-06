
import React, { useEffect, useState } from "react";
import axios from "axios";

const PurchasedCourses = () => {
  const [courses, setCourses] = useState([]);
  const [studentId, setStudentId] = useState(null);

  useEffect(() => {
    // Get student info from localStorage
    const studentData = JSON.parse(localStorage.getItem("student"));
    if (studentData && studentData.id) {
      setStudentId(studentData.id);

      // Fetch purchased courses
      axios
        .get(`http://localhost:8080/student/purchased?studentId=${studentData.id}`)
        .then((res) => {
          setCourses(res.data);
        })
        .catch((err) => {
          console.error("Failed to fetch purchased courses:", err);
        });
    } else {
      alert("Please login as student to view your courses.");
    }
  }, []);

  return (
    <div>
      <h2>Purchased Courses</h2>

      {courses.length === 0 ? (
        <p>You haven't purchased any courses yet.</p>
      ) : (
        <ul>
          {courses.map((course) => (
            <li key={course.courseId} style={{ marginBottom: "10px" }}>
              <h3>{course.tittle}</h3>
              <p>{course.description}</p>
              <p>Category: {course.category}</p>
              <p>Duration: {course.duration}</p>
              <p>Amount: ₹{course.amount}</p>

              {/* Optional: Add watch content link here if needed */}
              {/* <button onClick={() => navigate(`/watch/${course.courseId}`)}>Watch</button> */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PurchasedCourses;
