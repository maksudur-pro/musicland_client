import Swal from "sweetalert2";
import useSelectClass from "../../../Hooks/useSelectClass";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const SelectedClass = () => {
  const [classes, refetch] = useSelectClass();

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://music-land-server.vercel.app/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Student | Select Class</title>
      </Helmet>
      <div className="mx-auto text-center md:w-4/12 mb-10">
        <h3 className="text-3xl uppercase border-b-4 font-bold py-4">
          Select Class
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-4 gap-6">
        {classes.map((classObj) =>
          classObj.payment === false ? (
            <div key={classObj._id} className="card shadow-lg">
              <img
                src={classObj.classImg}
                alt=""
                className="w-full rounded object-cover"
              />
              <div className="card-body">
                <h3 className="text-xl font-bold">{classObj.courseName}</h3>

                <p className="text-gray-500">Price: {classObj.price}</p>
                <p className="text-gray-500">Seats: {classObj.seats}</p>
                <div className="flex justify-between mt-4">
                  <Link to={`/dashboard/payment/${classObj._id}`}>
                    <button className="btn btn-sm bg-yellow-500 hover:bg-yellow-600">
                      Pay
                    </button>
                  </Link>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(classObj)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default SelectedClass;
