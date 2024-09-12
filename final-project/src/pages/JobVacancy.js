import React, { useEffect, useState } from "react";

const JobVacancy = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://job-vacancy-api.vercel.app/api/jobs");
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        setError("Gagal mengambil data. Silakan coba lagi.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <nav className="bg-gray-300 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo Placeholder */}
          <div className="text-gray-600 font-bold hover:text-gray-900 px-3 py-4 rounded-md transition duration-300 ease-in-out">
            Job Finder
          </div>

          {/* Links */}
          <div className="flex space-x-6">
            <a
              href="/"
              className="text-gray-600 text-center hover:text-gray-900 px-3 py-4 rounded-md transition duration-300 ease-in-out"
            >
              Beranda
            </a>
            <a
              href="/job-vacancy"
              className="text-gray-600 text-center hover:text-gray-900 px-3 py-4 rounded-md transition duration-300 ease-in-out"
            >
              Lowongan
            </a>
            <a
              href="/about"
              className="text-gray-600 text-center hover:text-gray-900 px-3 py-4 rounded-md transition duration-300 ease-in-out"
            >
              About
            </a>
          </div>

          {/* Login Button */}
          <div>
            <a
              href="/login"
              className="bg-gray-200 text-gray-600 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-300 transition duration-300 ease-in-out"
            >
              Login
            </a>
          </div>
        </div>
      </nav>

      <div className="p-10 bg-gray-100">
        <h1 className="text-2xl text-gray-600 font-bold mb-6 text-center">Lowongan Pekerjaan</h1>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : jobs.length === 0 ? (
          <p className="text-center">No jobs available</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {jobs.map((job) => (
              <div key={job._id} className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-lg text-center font-bold mb-2">{job.title}</h2>
                <p className="mb-2">
                  <strong>Company:</strong> {job.company_name}
                </p>
                <p className="mb-2">
                  <strong>Description:</strong> {job.job_description}
                </p>
                <p className="mb-2">
                  <strong>Qualification:</strong> {job.job_qualification}
                </p>
                <p className="mb-2">
                  <strong>City:</strong> {job.company_city}
                </p>
                {job.salary_min && job.salary_max && (
                  <p className="mb-4">
                    <strong>Salary:</strong> {job.salary_min} - {job.salary_max}
                  </p>
                )}
                <img
                  src={job.company_image_url}
                  alt={`Logo of ${job.company_name}`}
                  className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-300 text-gray-600 py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Job Finder. Semua Hak Dilindungi.</p>
        </div>
      </footer>
    </>
  );
};

export default JobVacancy;
