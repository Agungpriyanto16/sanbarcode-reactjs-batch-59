import React from 'react';

const Tugas9 = () => {
  return (
    <div className="p-1 max-w-4xl mx-auto">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-purple-600 text-white">
            <tr>
              <th scope="col" className="px-6 py-3">NO</th>
              <th scope="col" className="px-6 py-3">NAMA</th>
              <th scope="col" className="px-6 py-3">MATA KULIAH</th>
              <th scope="col" className="px-6 py-3">NILAI</th>
              <th scope="col" className="px-6 py-3">INDEX NILAI</th>
              <th scope="col" className="px-6 py-3">ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4 font-bold">1</td>
              <td className="px-6 py-4">John</td>
              <td className="px-6 py-4">Algoritma</td>
              <td className="px-6 py-4">80</td>
              <td className="px-6 py-4">A</td>
              <td className="px-6 py-4 flex">
                <button className="text-black bg-white border border-gray-300 hover:bg-gray-100 focus:outline-none font-medium rounded-md text-sm px-2.5 py-2.5 text-center mr-2 mb-2">Edit</button>
                <button className="text-white bg-red-600 hover:bg-red-700 focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete</button>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4 font-bold">2</td>
              <td className="px-6 py-4">Doe</td>
              <td className="px-6 py-4">Matematika</td>
              <td className="px-6 py-4">70</td>
              <td className="px-6 py-4">B</td>
              <td className="px-6 py-4 flex">
                <button className="text-black bg-white border border-gray-300 hover:bg-gray-100 focus:outline-none font-medium rounded-md text-sm px-2.5 py-2.5 text-center mr-2 mb-2">Edit</button>
                <button className="text-white bg-red-600 hover:bg-red-700 focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete</button>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4 font-bold">3</td>
              <td className="px-6 py-4">Frank</td>
              <td className="px-6 py-4">Kalkulus</td>
              <td className="px-6 py-4">60</td>
              <td className="px-6 py-4">C</td>
              <td className="px-6 py-4 flex">
                <button className="text-black bg-white border border-gray-300 hover:bg-gray-100 focus:outline-none font-medium rounded-md text-sm px-2.5 py-2.5 text-center mr-2 mb-2">Edit</button>
                <button className="text-white bg-red-600 hover:bg-red-700 focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete</button>
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <td className="px-6 py-4 font-bold">4</td>
              <td className="px-6 py-4">Jason</td>
              <td className="px-6 py-4">Basis Data</td>
              <td className="px-6 py-4">90</td>
              <td className="px-6 py-4">A</td>
              <td className="px-6 py-4 flex">
                <button className="text-black bg-white border border-gray-300 hover:bg-gray-100 focus:outline-none font-medium rounded-md text-sm px-2.5 py-2.5 text-center mr-2 mb-2">Edit</button>
                <button className="text-white bg-red-600 hover:bg-red-700 focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tugas9;
