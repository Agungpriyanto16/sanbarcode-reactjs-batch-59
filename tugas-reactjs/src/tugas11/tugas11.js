import React, { useEffect, useState } from "react";
import axios from "axios";

const Tugas11 = () => {
  const [data, setData] = useState(null);
  const [input, setInput] = useState({ name: '', course: '', score: 0 });

  useEffect(() => {
    axios.get("https://6678f9f40bd45250562081d9.mockapi.io/api/student-score")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://6678f9f40bd45250562081d9.mockapi.io/api/student-score/${id}`)
      .then(() => {
        setData(data.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.log('Error deleting data: ', error);
      });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      name: input.name,
      course: input.course,
      score: parseInt(input.score)
    };

    axios.post('https://6678f9f40bd45250562081d9.mockapi.io/api/student-score', newStudent)
      .then((res) => {
        setData([...data, res.data]);
        setInput({ name: '', course: '', score: 0 });
      })
      .catch((error) => {
        console.log('Error posting data: ', error);
      });
  };

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
                        <th className="py-4 px-6">INDEX NILAI</th>
                        <th className="py-4 px-6 rounded-tr-lg">ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data.map((student, index) => (
                        <tr key={student.id} className="border-t border-r border-l text-gray-500 dark:text-gray-400">
                            <td className="py-4 px-6 font-bold">{index + 1}</td>
                            <td className="py-4 px-6">{student.name}</td>
                            <td className="py-4 px-6">{student.course}</td>
                            <td className="py-4 px-6">{student.score}</td>
                            <td className="py-4 px-6">{handleIndexScore(student.score)}</td>
                            <td className="py-4 px-6">
                                <button 
                                    onClick={() => handleDelete(student.id)} 
                                    className="bg-red-500 text-white px-5 py-2.5 rounded">Delete</button>
                            </td>
                        </tr>
                        ))}
                </tbody>
            </table>
        </div>

        <form onSubmit={handleSubmit} className="p-6 mt-6 mx-auto relative overflow-x-auto shadow-md sm:rounded-lg w-full text-sm text-left border-t border-r border-l text-gray-500 dark:text-gray-400">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Nama :</label>
                <input
                type="text"
                value={input.name}
                onChange={(e) => setInput({ ...input, name: e.target.value })}
                className="border p-2 rounded w-full bg-gray-100"
                required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Mata Kuliah :</label>
                <input
                type="text"
                value={input.course}
                onChange={(e) => setInput({ ...input, course: e.target.value })}
                className="border p-2 rounded w-full bg-gray-100"
                required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Nilai :</label>
                <input
                type="number"
                value={input.score}
                onChange={(e) => setInput({ ...input, score: e.target.value })}
                className="border p-2 rounded w-full bg-gray-100"
                required
                />
            </div>

            <button type="submit" className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">Submit</button>
        </form>
    </div>
  );
};

export default Tugas11;
