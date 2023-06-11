import useSelectClass from "../../../Hooks/useSelectClass";

const SelectedClass = () => {
  const [cart] = useSelectClass();
  console.log(cart);

  const handlePay = (classId) => {
    // Handle payment logic here
    console.log(`Paying for class with ID: ${classId}`);
  };

  const handleDelete = (classId) => {
    // Handle deletion logic here
    console.log(`Deleting class with ID: ${classId}`);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">
        My Selected Classes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cart.map((classObj) => (
          <div key={classObj._id} className="card shadow-lg">
            <img
              src={classObj.classImg}
              alt=""
              className="w-full h-40 object-cover"
            />
            <div className="card-body">
              <h3 className="text-xl font-bold">{classObj.name}</h3>

              <p className="text-gray-500">Price: {classObj.price}</p>
              <p className="text-gray-500">Seats: {classObj.seats}</p>
              <div className="flex justify-between mt-4">
                <button
                  className="btn btn-sm bg-yellow-500 hover:bg-yellow-600"
                  onClick={() => handlePay(classObj.classId)}>
                  Pay
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(classObj.classId)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedClass;
