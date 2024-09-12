import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetch(`https://job-vacancy-api.vercel.app/api/jobs/${id}`)
      .then(response => response.json())
      .then(data => setJob(data));
  }, [id]);

  if (!job) {
    return <p className="text-center my-10">Sedang memuat detail pekerjaan...</p>;
  }

  return (
    <div className="container mx-auto my-10">
        
      <h1 className="text-4xl font-bold text-center mb-6">{job.title}</h1>
      <div className="text-center">
        <img 
          src={job.company_image_url} 
          alt={`${job.company_name} logo`} 
          className="mx-auto mb-4 w-40 h-40 object-contain"
        />
        <h2 className="text-2xl font-bold">{job.company_name}</h2>
        <p className="text-gray-700 mt-2">Lokasi: {job.company_city}</p>
        <p className="text-gray-700 mt-2">Tipe Pekerjaan: {job.job_type}</p>
        <p className="text-gray-700 mt-2">Durasi: {job.job_tenure}</p>
        <p className="text-gray-700 mt-2">Status: {job.job_status === 1 ? 'Dibuka' : 'Ditutup'}</p>
        <p className="text-gray-700 mt-2">Gaji: Rp {job.salary_min} - Rp {job.salary_max}</p>
      </div>
      <div className="my-10">
        <h3 className="text-xl font-bold">Deskripsi Pekerjaan</h3>
        <p className="text-gray-700 mt-2">{job.job_description}</p>

        <h3 className="text-xl font-bold mt-6">Kualifikasi</h3>
        <p className="text-gray-700 mt-2">{job.job_qualification}</p>
      </div>
    </div>
  );
}

export default JobDetail;
