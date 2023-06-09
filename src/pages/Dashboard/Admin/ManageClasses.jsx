import React, { useState } from "react";
import useClass from "../../../Hooks/useClass";
import { FaCheck, FaComments, FaTimes } from "react-icons/fa";
import axios from "axios";

const ManageClasses = () => {
  const [data, refetch] = useClass();
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const [feedback, setFeedback] = useState("");

  // approved status
  const approveClass = async (id) => {
    try {
      await axios.patch(`http://localhost:5000/classes/approve/${id}`);
      refetch();
    } catch (error) {
      console.error("Error approving class:", error);
    }
  };

  // denied class
  const denyClass = async (id) => {
    try {
      await axios.patch(`http://localhost:5000/classes/deny/${id}`);
      refetch();
    } catch (error) {
      console.error("Error denying class:", error);
    }
  };

  const openFeedbackModal = (classObj) => {
    setSelectedClass(classObj);
    setFeedbackModalOpen(true);
  };

  const sendFeedback = async () => {
    if (!selectedClass || !feedback) return;

    try {
      await axios.post(
        `http://localhost:5000/classes/feedback/${selectedClass._id}`,
        {
          feedback: feedback,
        }
      );
      setFeedbackModalOpen(false);
      setFeedback("");
      setSelectedClass(null);
      refetch();
    } catch (error) {
      console.error("Error sending feedback:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((classObj) => (
        <div key={classObj._id} className="bg-white p-4 shadow-md rounded-lg">
          <img
            src={classObj.classImg}
            alt={classObj.courseName}
            className="w-full rounded-xl object-cover mb-4"
          />
          <h2 className="text-xl font-bold mb-2">{classObj.courseName}</h2>
          <p className="mb-2">Instructor: {classObj.instructor_name}</p>
          <p className="mb-2">Email: {classObj.email}</p>
          <p className="mb-2">Available seats: {classObj.seats}</p>
          <p className="mb-2">Price: ${classObj.price}</p>
          <p className="mb-2">Status: {classObj.status}</p>
          <div className="flex">
            {classObj.status === "pending" && (
              <>
                <button
                  onClick={() => approveClass(classObj._id)}
                  disabled={classObj.status !== "pending"}
                  className="btn btn-sm btn-outline mr-2">
                  <FaCheck className="text-green-500" />
                </button>
                <button
                  disabled={classObj.status !== "pending"}
                  onClick={() => denyClass(classObj._id)}
                  className="btn btn-sm  btn-outline mr-2">
                  <FaTimes className="text-red-500" />
                </button>
              </>
            )}
            <button
              onClick={() => openFeedbackModal(classObj)}
              className="btn btn-sm btn-primary">
              <FaComments />
            </button>
          </div>
        </div>
      ))}
      {/* Modal */}
      {feedbackModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-bold mb-2">Send Feedback</h2>
            <p className="mb-2">
              Class: {selectedClass ? selectedClass.name : ""}
            </p>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full h-32 border border-gray-300 rounded-md p-2 mb-2"></textarea>
            <button onClick={sendFeedback} className="btn btn-sm btn-primary">
              Send
            </button>
            <button
              onClick={() => setFeedbackModalOpen(false)}
              className="btn btn-sm btn-outline ml-2">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageClasses;
