import React, { useEffect, useState } from "react";
import axios from "axios";

const Managedata = () => {
  const [data, setData] = useState(null);
  const [editId, setEditId] = useState(null); 
  const [input, setInput] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    rating: "",
    release_year: 2009,
    size: "",
    is_android_app: 0,
    is_ios_app: 0,
    image_url: "",
  });

  useEffect(() => {
    axios
      .get("https://6678f9f40bd45250562081d9.mockapi.io/api/mobile-apps")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://6678f9f40bd45250562081d9.mockapi.io/api/mobile-apps/${id}`)
      .then(() => {
        setData(data.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.log("Error deleting data: ", error);
      });
  };

  const handleEdit = (game) => {
    setInput({
      name: game.name,
      category: game.category,
      description: game.description,
      price: game.price,
      rating: game.rating,
      release_year: game.release_year,
      size: game.size,
      is_android_app: game.is_android_app,
      is_ios_app: game.is_ios_app,
      image_url: game.image_url,
    });
    setEditId(game.id); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGame = {
      name: input.name,
      category: input.category,
      description: input.description,
      price: input.price,
      rating: input.rating,
      release_year: input.release_year,
      size: input.size,
      is_android_app: input.is_android_app,
      is_ios_app: input.is_ios_app,
      image_url: input.image_url,
    };

    if (editId) {
      axios
        .put(`https://6678f9f40bd45250562081d9.mockapi.io/api/mobile-apps/${editId}`, newGame)
        .then((res) => {
          setData(data.map((item) => (item.id === editId ? res.data : item)));
          setEditId(null);
          setInput({
            name: "",
            category: "",
            description: "",
            price: "",
            rating: "",
            release_year: 2009,
            size: "",
            is_android_app: 0,
            is_ios_app: 0,
            image_url: "",
          });
        })
        .catch((error) => {
          console.log("Error updating data: ", error);
        });
    } else {
      // Jika tidak, lakukan create data baru
      axios
        .post("https://6678f9f40bd45250562081d9.mockapi.io/api/mobile-apps", newGame)
        .then((res) => {
          setData([...data, res.data]);
          setInput({
            name: "",
            category: "",
            description: "",
            price: "",
            rating: "",
            release_year: 2009,
            size: "",
            is_android_app: 0,
            is_ios_app: 0,
            image_url: "",
          });
        })
        .catch((error) => {
          console.log("Error posting data: ", error);
        });
    }
  };

  return (
    <div className="p-6 mx-auto">
      {/* Adding Manage Data Title */}
      <h1 className="text-2xl font-bold mb-4">Manage Data</h1>

      {/* Table Section */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left border-t border-r border-l text-gray-500 dark:text-gray-400">
          <thead>
            <tr className="bg-purple-500 text-white">
              <th className="py-4 px-6 rounded-tl-lg">NO</th>
              <th className="py-4 px-6">NAMA</th>
              <th className="py-4 px-6">KATEGORI</th>
              <th className="py-4 px-6">DESCRIPTION</th>
              <th className="py-4 px-6">PRICE</th>
              <th className="py-4 px-6">RATING</th>
              <th className="py-4 px-6">RELEASE YEAR</th>
              <th className="py-4 px-6">SIZE</th>
              <th className="py-4 px-6">IS_ANDROID_APP</th>
              <th className="py-4 px-6">IS_IOS_APP</th>
              <th className="py-4 px-6 rounded-tr-lg">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((game, index) => (
                <tr key={game.id} className="border-t border-r border-l text-gray-500 dark:text-gray-400">
                  <td className="py-4 px-6 font-bold">{index + 1}</td>
                  <td className="py-4 px-6">{game.name}</td>
                  <td className="py-4 px-6">{game.category}</td>
                  <td className="py-4 px-6">
                    {game.description && game.description.length > 50
                      ? `${game.description.slice(0, 50)}...`
                      : game.description || "No description available"}
                  </td>
                  <td className="py-4 px-6">{game.price}</td>
                  <td className="py-4 px-6">{game.rating}</td>
                  <td className="py-4 px-6">{game.release_year}</td>
                  <td className="py-4 px-6">{game.size}</td>
                  <td className="py-4 px-6">{game.is_android_app ? "Yes" : "No"}</td>
                  <td className="py-4 px-6">{game.is_ios_app ? "Yes" : "No"}</td>
                  <td className="py-4 px-6">
                    <button
                      onClick={() => handleEdit(game)}
                      className="bg-yellow-500 text-white px-5 py-2.5 rounded mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(game.id)}
                      className="bg-red-500 text-white px-5 py-2.5 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        className="p-6 mt-6 mx-auto relative overflow-x-auto shadow-md sm:rounded-lg w-full text-sm text-left border-t border-r border-l"
      >
        <div className="mb-4">
          <h1 className="text-2xl font-bold mb-4">{editId ? "Update Data" : "Create Data"}</h1>

          {/* Section for Image URL */}
          <div className="mb-4">
            <h3 className="text-1xl mb-4 border-b-2 pb-2">Gambar Data Game</h3>
            <label className="block text-gray-700 text-sm font-bold mb-2">Image URL :</label>
            <input
              type="text"
              value={input.image_url}
              onChange={(e) => setInput({ ...input, image_url: e.target.value })}
              className="border p-2 rounded w-full bg-gray-100"
              required
            />
          </div>

          <h3 className="text-1xl mb-4 border-b-2 pb-2">Data Game</h3>
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
            <label className="block text-gray-700 text-sm font-bold mb-2">Kategori :</label>
            <input
              type="text"
              value={input.category}
              onChange={(e) => setInput({ ...input, category: e.target.value })}
              className="border p-2 rounded w-full bg-gray-100"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Description :</label>
            <textarea
              value={input.description}
              onChange={(e) => setInput({ ...input, description: e.target.value })}
              className="border p-2 rounded w-full bg-gray-100"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Price :</label>
            <input
              type="number"
              value={input.price}
              onChange={(e) => setInput({ ...input, price: e.target.value })}
              className="border p-2 rounded w-full bg-gray-100"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Rating :</label>
            <input
              type="number"
              min="0"
              max="5"
              step="0.1"
              value={input.rating}
              onChange={(e) => setInput({ ...input, rating: e.target.value })}
              className="border p-2 rounded w-full bg-gray-100"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Release Year :</label>
            <input
              type="number"
              min="2009"
              max="2024"
              value={input.release_year}
              onChange={(e) => setInput({ ...input, release_year: e.target.value })}
              className="border p-2 rounded w-full bg-gray-100"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Size (MB) :</label>
            <input
              type="number"
              value={input.size}
              onChange={(e) => setInput({ ...input, size: e.target.value })}
              className="border p-2 rounded w-full bg-gray-100"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Is Android App :</label>
            <input
              type="number"
              min="0"
              max="1"
              value={input.is_android_app}
              onChange={(e) => setInput({ ...input, is_android_app: e.target.value })}
              className="border p-2 rounded w-full bg-gray-100"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Is iOS App :</label>
            <input
              type="number"
              min="0"
              max="1"
              value={input.is_ios_app}
              onChange={(e) => setInput({ ...input, is_ios_app: e.target.value })}
              className="border p-2 rounded w-full bg-gray-100"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
          >
            {editId ? "Update" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Managedata;
