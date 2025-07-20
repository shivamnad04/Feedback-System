import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/feedback")
      .then((res) => setFeedbacks(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/feedback", {
      name,
      message,
    });
    setFeedbacks([res.data, ...feedbacks]);
    setName("");
    setMessage("");
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/feedback/${id}`);
    setFeedbacks(feedbacks.filter((fb) => fb._id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-extrabold text-blue-700 mb-6 text-center">
          Feedback Collection System
        </h1>
        <form
          onSubmit={handleSubmit}
          className="mb-8 bg-blue-50 rounded-lg p-6 shadow space-y-4"
        >
          <input
            type="text"
            value={name}
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
          />
          <textarea
            value={message}
            placeholder="Your Feedback"
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-4 py-2 rounded shadow hover:from-blue-600 hover:to-purple-600 transition"
          >
            Submit
          </button>
        </form>

        <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">
          Submitted Feedback
        </h2>
        <div className="space-y-4">
          {feedbacks.length === 0 && (
            <div className="text-center text-gray-400">No feedback yet.</div>
          )}
          {feedbacks.map((fb) => (
            <div
              key={fb._id}
              className="relative bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-blue-700">{fb.name}</p>
                  <p className="text-gray-700 mt-1">{fb.message}</p>
                  <small className="text-gray-400 block mt-2">
                    {new Date(fb.date).toLocaleString()}
                  </small>
                </div>
                <button
                  onClick={() => handleDelete(fb._id)}
                  className="ml-4 bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200 transition font-medium"
                  title="Delete feedback"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
