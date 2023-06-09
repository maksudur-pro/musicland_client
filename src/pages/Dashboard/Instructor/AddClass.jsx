import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";

const AddClass = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const handleAddClass = async (data) => {
    const { courseName, classImg, seats, price } = data;
    const newData = {
      instructor_name: user?.displayName,
      email: user?.email,
      courseName,
      classImg,
      seats: parseFloat(seats),
      price: parseFloat(price),
      status: "pending",
    };
    console.log(newData);
    try {
      const response = await axios.post("http://localhost:5000/addClass", {
        ...newData,
      });

      if (response.status === 200) {
        reset();
        Swal.fire({
          title: "Added a class Successfully",
          showClass: {
            popup: "animate_animated animate_fadeInDOwn ",
          },
          hideClass: {
            popup: "animate_animated animate_fadeOutUp",
          },
        });
      } else {
        console.error("Error adding class:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding class:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl w-full mx-4 rounded-md shadow-lg">
        <div className="bg-blue-400 px-6 py-4 rounded-t-md">
          <h2 className="text-xl font-bold text-white text-center">
            Add Class
          </h2>
        </div>
        <form
          onSubmit={handleSubmit(handleAddClass)}
          className="p-6 bg-blue-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label
                htmlFor="instructorName"
                className="text-gray-700 font-bold mb-2">
                Instructor Name:
              </label>
              <input
                defaultValue={user?.displayName}
                disabled
                type="text"
                className="form-input italic rounded-md shadow-sm border border-navy-500 focus:ring-navy-500 focus:border-navy-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-700 font-bold mb-2">
                Email:
              </label>
              <input
                defaultValue={user?.email}
                disabled
                type="email"
                className="form-input italic rounded-md shadow-sm border border-navy-500 focus:ring-navy-500 focus:border-navy-500"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="courseName"
                className="text-gray-700 font-bold mb-2">
                Course Name:
              </label>
              <input
                name="courseName"
                type="text"
                className="form-input rounded-md shadow-sm border border-navy-500 focus:ring-navy-500 focus:border-navy-500"
                {...register("courseName")}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="classImg"
                className="text-gray-700 font-bold mb-2">
                Class Image URL:
              </label>
              <input
                name="classImg"
                type="text"
                className="form-input rounded-md shadow-sm border border-navy-500 focus:ring-navy-500 focus:border-navy-500"
                {...register("classImg")}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="seats" className="text-gray-700 font-bold mb-2">
                Seats:
              </label>
              <input
                name="seats"
                type="number"
                className="form-input rounded-md shadow-sm border border-navy-500 focus:ring-navy-500 focus:border-navy-500"
                {...register("seats")}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="price" className="text-gray-700 font-bold mb-2">
                Price:
              </label>
              <input
                name="price"
                type="number"
                step="0.01"
                className="form-input rounded-md shadow-sm border border-navy-500 focus:ring-navy-500 focus:border-navy-500"
                {...register("price")}
              />
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
