import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchCourses = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:8080/instructor", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = response.data;
      setCourses(data.courses || []);
    } catch (err) {
      console.error(err);
      setError("Failed to load courses.");
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Your Uploaded Courses</h2>
      {error && <p className="text-red-500">{error}</p>}
      {courses.length === 0 ? (
        <p>No courses found.</p>
      ) : (
        <ul className="space-y-4">
          {courses.map((course) => (
            <li key={course.courseId} className="border p-4 rounded shadow">
              <h3 className="text-lg font-bold">{course.courseTitle}</h3>
              <p>{course.courseDescription}</p>

              <button
                onClick={() =>
                  navigate(`/instructor/add-content/${course.courseId}`)
                }
                className="mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
              >
                Manage Content
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CourseList;
