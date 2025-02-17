import { useState } from "react";
import { FaCheck, FaTimes, FaComments, FaCircle } from "react-icons/fa";
import UseClass from "../../../Hooks/UseClass";
import axios from "axios";
import { MdPendingActions } from "react-icons/md";
import { Helmet } from "react-helmet-async";
import { useNavigation } from "react-router-dom";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";

const ManageClasses = () => {
  const [data, refetch] = UseClass();

  const handleApprove = async (classId) => {
    try {
      await axios.patch(
        `https://music-land-server.vercel.app/classes/approve/${classId}`
      );
      refetch(); // Refetch the updated data
    } catch (error) {
      console.error("Error approving class:", error);
    }
  };

  const handleDeny = async (classId) => {
    try {
      await axios.patch(
        `https://music-land-server.vercel.app/classes/deny/${classId}`
      );
      refetch(); // Refetch the updated data
    } catch (error) {
      console.error("Error denying class:", error);
    }
  };

  const handleFeedback = async (classId, feedback) => {
    if (!feedback) {
      alert("Feedback cannot be empty");
      return;
    }
    try {
      await axios.post(
        `https://music-land-server.vercel.app/classes/feedback/${classId}`,
        {
          feedback,
        }
      );
      refetch(); // Refetch the updated data
    } catch (error) {
      console.error("Error sending feedback:", error);
    }
  };

  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const [feedbackText, setFeedbackText] = useState("");

  const openFeedbackModal = (classObj) => {
    setSelectedClass(classObj);
    setFeedbackModalOpen(true);
  };

  const closeFeedbackModal = () => {
    setSelectedClass(null);
    setFeedbackText("");
    setFeedbackModalOpen(false);
  };

  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <>
      <Helmet>
        <title>Admin | Manage Classes</title>
      </Helmet>
      <div className="mx-auto text-center md:w-4/12 mb-6">
        <h3 className="text-3xl uppercase border-b-4 font-bold py-4">
          Manage Classes
        </h3>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((classObj) => (
            <div
              key={classObj._id}
              className="bg-white p-4 shadow-md rounded-lg">
              <img
                src={classObj.classImg}
                className="w-full rounded object-cover mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{classObj.courseName}</h2>
              <p className="mb-2"> Instructor: {classObj.instructor_name}</p>
              <p className="mb-2">Email: {classObj.email}</p>
              <p className="mb-2">Available seats: {classObj.seats}</p>
              <p className="mb-2">Price: ${classObj.price}</p>

              <p className="mb-2 flex items-center">
                Status:
                {classObj.status === "denied" && (
                  <>
                    <FaCircle className="text-red-500 ml-2 mr-1" />
                    Denied
                  </>
                )}
                {classObj.status === "approved" && (
                  <>
                    <FaCircle className="text-green-500 ml-2 mr-1" />
                    Approved
                  </>
                )}
                {classObj.status === "pending" && (
                  <>
                    <MdPendingActions className="text-yellow-500 ml-2 mr-1 text-xl" />
                    Pending
                  </>
                )}
              </p>
              <div className="flex">
                {/* approve and deny buttons */}
                <button
                  title="Approve"
                  className="btn btn-sm btn-outline mr-2"
                  disabled={classObj.status === "approved"}
                  onClick={() => handleApprove(classObj._id)}>
                  <FaCheck className="text-green-500" />
                </button>
                <button
                  title="Deny"
                  className="btn btn-sm btn-outline mr-2"
                  disabled={classObj.status === "denied"}
                  onClick={() => handleDeny(classObj._id)}>
                  <FaTimes className="text-red-500" />
                </button>
                {/* feedback modal popup trigger button */}
                <button
                  title="Feedback"
                  className={`btn btn-sm ${
                    classObj.status === "approved"
                      ? "btn-disabled"
                      : "btn-primary"
                  }`}
                  onClick={() => openFeedbackModal(classObj)}
                  disabled={classObj.status === "approved"}>
                  <FaComments />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal */}
      {feedbackModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-bold mb-2">Send Feedback</h2>
            <p className="mb-2">Class: {selectedClass?.name}</p>
            <textarea
              required
              className="w-full h-32 border border-gray-300 rounded-md p-2 mb-2"
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}></textarea>
            <button
              className="btn btn-sm btn-primary"
              onClick={() =>
                handleFeedback(selectedClass?._id, feedbackText) &&
                closeFeedbackModal()
              }>
              Send
            </button>
            <button
              className="btn btn-sm btn-outline ml-2"
              onClick={closeFeedbackModal}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ManageClasses;
