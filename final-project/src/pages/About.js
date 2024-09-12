import React from 'react';

const About = () => {
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
      <div className="p-28 bg-gray-100">
      <h1 className="text-2xl text-gray-600 font-bold mb-2 text-center">Tentang Kami</h1>
      <p className="text-gray-600 text-center mb-6">
        Selamat datang di Job Finder! Kami adalah platform yang membantu Anda menemukan pekerjaan impian. 
        Dengan ribuan lowongan dari berbagai bidang, kami berkomitmen untuk menyediakan informasi terkini 
        dan relevan bagi pencari kerja.
      </p>
      <div className="text-center">
        <h2 className="text-xl text-gray-600 font-bold">Visi Kami</h2>
        <p className="text-gray-600 mt-2">
          Menjadi platform terbaik untuk pencarian pekerjaan di Indonesia dan membantu individu menemukan pekerjaan yang tepat sesuai minat dan keahlian.
        </p>
        <h2 className="text-xl text-gray-600 font-bold mt-6">Misi Kami</h2>
        <p className="text-gray-600 mt-2">
          Menyediakan akses ke ribuan lowongan kerja dari perusahaan-perusahaan terbaik, 
          memberikan layanan terbaik bagi para pencari kerja, serta mempermudah proses pencarian pekerjaan dengan teknologi terkini.
        </p>
      </div>
    </div>
    {/* Footer Section */}
    <footer className="bg-gray-300 text-gray-600 py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Job Finder. Semua Hak Dilindungi.</p>
        </div>
      </footer>
      </>
  );
}

export default About;
