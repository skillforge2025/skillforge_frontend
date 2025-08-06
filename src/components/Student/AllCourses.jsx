import React, { useEffect, useState } from "react";
import axios from "axios";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:8080/"); // matches our HomeController
      setCourses(response.data);
    } catch (error) {
      console.error("Failed to fetch courses:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Courses</h2>
      {courses.length === 0 ? (
        <p>No courses available.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {courses.map((course) => (
            <div
              key={course.courseId}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "16px",
                width: "300px",
              }}
            >
              <h3>{course.tittle}</h3>
              <p><strong>Description:</strong> {course.description}</p>
              <p><strong>Duration:</strong> {course.duration} hours</p>
              <p><strong>Price:</strong> ₹{course.amount}</p>
              <p><strong>Category:</strong> {course.category?.name}</p>
              <p><strong>Content:</strong> {course.contents?.length} items</p>
              {/* Add View button or Buy button later */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllCourses;
