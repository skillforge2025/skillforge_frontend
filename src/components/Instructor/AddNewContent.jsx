import React, { useState } from "react";
import axios from "axios";

const AddNewContent = () => {
  const [courseId, setCourseId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [contentType, setContentType] = useState("VIDEO"); // Default to VIDEO
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!courseId || !title || !description || !url || !contentType) {
      alert("All fields are required");
      return;
    }

    const token = localStorage.getItem("token");

    try {
      await axios.post(
        `http://localhost:8080/instructor/course/${courseId}/add-content`,
        {
          title,
          description,
          contentType,
          url,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage("Content added successfully ✅");
      // Reset form
      setTitle("");
      setDescription("");
      setUrl("");
    } catch (err) {
      console.error("Error uploading content:", err);
      setMessage("Failed to add content ❌");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Add New Course Content</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Course ID"
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded"
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded"
        />

        <select
          value={contentType}
          onChange={(e) => setContentType(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="VIDEO">Video</option>
          <option value="PDF">PDF</option>
          <option value="TEXT">Text</option>
        </select>

        <input
          type="text"
          placeholder="URL (YouTube/PDF link)"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Add Content
        </button>
      </form>

      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default AddNewContent;
