import React, { useEffect, useState } from "react";
import axios from "axios";

const Tugas10 = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("https://6678f9f40bd45250562081d9.mockapi.io/api/student-score")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleIndexScore = (score) => {
    if (score >= 80) return "A";
    else if (score >= 70 && score < 80) return "B";
    else if (score >= 60 && score < 70) return "C";
    else if (score >= 50 && score < 60) return "D";
    else return "E";
  };

  return (
    <div className="p-6 mx-auto">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left border-t border-r border-l text-gray-500 dark:text-gray-400">
                <thead>
                    <tr className="bg-purple-500 text-white">
                        <th className="py-4 px-6 rounded-tl-lg">NO</th>
                        <th className="py-4 px-6">NAMA</th>
                        <th className="py-4 px-6">MATA KULIAH</th>
                        <th className="py-4 px-6">NILAI</th>
                        <th className="py-4 px-6 rounded-tr-lg">INDEX NILAI</th>
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data.map((student, index) => (
                        <tr key={student.id} className="border-t border-r border-l text-gray-500 dark:text-gray-400">
                            <td className="py-4 px-6 font-bold ">{index + 1}</td>
                            <td className="py-4 px-6">{student.name}</td>
                            <td className="py-4 px-6">{student.course}</td>
                            <td className="py-4 px-6">{student.score}</td>
                            <td className="py-4 px-6">{handleIndexScore(student.score)}</td>
                        </tr>
                        ))}
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default Tugas10;
