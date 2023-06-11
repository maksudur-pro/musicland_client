import { FaCircle } from "react-icons/fa";
import useInstructorClass from "../../../Hooks/useInstructorClass";
import { MdPendingActions } from "react-icons/md";
import { Helmet } from "react-helmet-async";

const MyClass = () => {
  const [data] = useInstructorClass();

  return (
    <div>
      <Helmet>
        <title>Instructor | My Class</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.map((classObj) => (
              <div
                key={classObj._id}
                className="bg-white p-4 shadow-md rounded-lg">
                <img
                  src={classObj.classImg}
                  alt={classObj.courseName}
                  className="w-full rounded-xl object-cover mb-4"
                />
                <h2 className="text-xl font-bold mb-2">
                  {classObj.courseName}
                </h2>
                <p className="mb-2">Instructor: {classObj.instructor_name}</p>
                <p className="mb-2">Email: {classObj.email}</p>
                <p className="mb-2">Available seats: {classObj.seats}</p>
                <p className="mb-2">
                  Enrolled student: {classObj.totalEnrolled}
                </p>
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
                <p className="mb-2">Price: ${classObj.price}</p>
                <button className="btn btn-success btn-wide btn-sm">
                  Update
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-1">
          <h2 className="text-3xl text-center font-bold mb-2">
            Feedback Section
          </h2>
          <div>
            {data.map((classObj) => (
              <div
                key={classObj?._id}
                className="bg-white px-5 mb-10 text-center shadow-md rounded-lg">
                {classObj?.feedback && (
                  <div>
                    <p>
                      <span className="font-bold">Class Name:</span>{" "}
                      {classObj?.courseName}
                    </p>
                    <p>
                      <span className="font-bold">Feedback: </span>{" "}
                      {classObj?.feedback}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyClass;
