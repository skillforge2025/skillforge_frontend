import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CourseContentList = () => {
  const { courseId } = useParams();
  const [contents, setContents] = useState([]);
  const [error, setError] = useState("");

  const fetchCourseContents = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `http://localhost:8080/instructor/course/${courseId}/contents`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setContents(response.data || []);
    } catch (err) {
      console.error(err);
      setError("Failed to load course contents.");
    }
  };

  useEffect(() => {
    fetchCourseContents();
  }, [courseId]);

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Course Contents</h2>
      <div className="mb-4">
  <a
    href={`/add-content/${courseId}`}
    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
  >
    + Add New Content
  </a>
</div>

      {error && <p className="text-red-500">{error}</p>}
      {contents.length === 0 ? (
        <p>No contents available for this course.</p>
      ) : (
        <ul className="space-y-4">
          {contents.map((content) => (
            <li key={content.id} className="border p-4 rounded shadow">
              <h3 className="text-lg font-bold">{content.title}</h3>
              <p>Type: {content.contentType}</p>
              <p>Description: {content.description}</p>
              {content.contentType === "VIDEO" && (
                <video width="100%" controls>
                  <source src={content.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              {content.contentType === "PDF" && (
                <a
                  href={content.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  View PDF
                </a>
              )}
              {content.contentType === "TEXT" && (
                <p className="mt-2">{content.url}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CourseContentList;
