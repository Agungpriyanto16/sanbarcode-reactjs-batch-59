import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gray-100 text-gray-600 py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold">Temukan Pekerjaan Impian Anda</h1>
        <p className="mt-4">Jelajahi ribuan lowongan pekerjaan sesuai bidang dan minat Anda.</p>
        <button className="mt-6 ml-2 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-300 ease-in-out">Mulai Sekarang</button>
      </div>
    </div>
  );
}

export default Hero;
