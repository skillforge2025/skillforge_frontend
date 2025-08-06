import React from "react";
import { BsPlusCircleDotted } from "react-icons/bs";
import { redirect, useNavigate } from "react-router-dom";

const InstructorDashBoard = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/course/newcourse");
  };
  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      students: 456,
      revenue: 18240,
      rating: 4.8,
      status: "active",
      lastUpdated: "2024-01-15",
    },
    {
      id: 2,
      title: "React - The Complete Guide",
      students: 234,
      revenue: 9360,
      rating: 4.7,
      status: "active",
      lastUpdated: "2024-01-10",
    },
    {
      id: 3,
      title: "Python for Data Science",
      students: 189,
      revenue: 7560,
      rating: 4.5,
      status: "draft",
      lastUpdated: "2024-01-08",
    },
    {
      id: 3,
      title: "Python for Data Science",
      students: 189,
      revenue: 7560,
      rating: 4.5,
      status: "draft",
      lastUpdated: "2024-01-08",
    },
    {
      id: 3,
      title: "Python for Data Science",
      students: 189,
      revenue: 7560,
      rating: 4.5,
      status: "draft",
      lastUpdated: "2024-01-08",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Instructor Dashboard
          </h1>
          <p className="mt-2 text-gray-600">
            Welcome back,
            {/* {user?.name || "Instructor"}! */}
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">
                  Total Courses
                </p>
                <p className="text-2xl font-semibold text-gray-900">
                  {/* {stats.totalCourses} */}6
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">
                  Total Students
                </p>
                <p className="text-2xl font-semibold text-gray-900">
                  {/* {stats.totalStudents.toLocaleString()} */}
                  10
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">
                  Total Revenue
                </p>
                <p className="text-2xl font-semibold text-gray-900">
                  {/* ${stats.totalRevenue.toLocaleString()} */}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <svg
                  className="w-6 h-6 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Avg Rating</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {/* {stats.averageRating} */}
                  3.2
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Courses List */}
        <div className="bg-white rounded-lg shadow h-full p-2">
          <div className="px-6 py-4 border-b border-gray-200 mt-2 shadow-sm flex justify-between mr-2">
            <h2 className="text-xl font-semibold text-gray-900">
              Your Courses
            </h2>
            <div className="h-full flex-col cursor-default justify-center  ">
              <button onClick={handleNavigate} className="ml-3">
                <BsPlusCircleDotted className="size-8" />
              </button>
              <p className="font-medium ">Add New</p>
            </div>

            <button
      onClick={() => navigate("/instructor/courses")}
      className="mt-2 text-sm text-blue-600 underline"
    >
      View My Courses
    </button>
            <div className="flex flex-col gap-2 mt-4">
    <button
    className="bg-blue-600 text-white px-4 py-2 rounded"
    onClick={() => navigate("/instructor/profile")}
  >
    View Profile
  </button>
  <button
    className="bg-green-600 text-white px-4 py-2 rounded"
    onClick={() => navigate("/instructor/add-content")}
  >
    Add New Content
  </button>
  <button
    className="bg-purple-600 text-white px-4 py-2 rounded"
    onClick={() => navigate("/instructor/courses")}
  >
    View All Courses
  </button>
</div>


          </div>

          <div className="divide-y h-full divide-gray-200 grid grid-cols-2 gap-3 mt-2">
            {courses.map((course) => (
              <div key={course.id} className="p-6 border-1 rounded-sm">
                <div className="md:flex lg:flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900">
                      {course.title}
                    </h3>
                    <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                      <span>{course.students} students</span>
                      <span>${course.revenue.toLocaleString()} revenue</span>
                      {/* <span>⭐ {course.rating}</span> */}
                      <span>⭐ 3.2</span>
                    </div>
                    <div className="mt-2 flex items-center space-x-2">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full`}
                      >
                        {course.status}
                      </span>
                      <span className="text-xs text-gray-500">
                        Updated
                        {/* {course.lastUpdated} */}
                      </span>
                    </div>
                  </div>

                  <div className="ml-6">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Students */}
        </div>
      </div>
    </div>
  );
};

export default InstructorDashBoard;
