import React, { useState } from "react";
import axios from "axios";

const InstructorProfileForm = () => {
  const [bio, setBio] = useState("");
  const [expertise, setExpertise] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token"); // assumed you store token here
      const instructorId = localStorage.getItem("userId"); // get from login

      const payload = {
        instructorId: Number(instructorId),
        bio,
        expertise,
      };

      const res = await axios.post("http://localhost:8080/instructor", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      setMessage("Profile created successfully!");
    } catch (err) {
      console.error(err);
      setMessage("Failed to create profile.");
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Create Instructor Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-medium mb-1">Bio</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Expertise</label>
          <input
            type="text"
            value={expertise}
            onChange={(e) => setExpertise(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default InstructorProfileForm;
