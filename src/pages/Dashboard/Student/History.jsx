import React from "react";
import useSelectClass from "../../../Hooks/useSelectClass";
import { Helmet } from "react-helmet-async";

const History = () => {
  const [cart] = useSelectClass();

  // Sort the cart by payment date in descending order
  const sortedCart = [...cart].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div>
      <Helmet>
        <title>Student | Payment History</title>
      </Helmet>
      <div className="mx-auto text-center md:w-4/12 mb-10">
        <h3 className="text-3xl uppercase border-b-4 font-bold py-4">
          Payment History
        </h3>
      </div>
      <table className="w-full bg-white m-4 border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-3 px-4">Date</th>
            <th className="py-3 px-4">Course</th>
            <th className="py-3 px-4">Price</th>
            <th className="py-3 px-4">Email</th>
            <th className="py-3 px-4">Transaction ID</th>
          </tr>
        </thead>
        <tbody>
          {sortedCart && sortedCart.length > 0 ? (
            sortedCart.map(
              (item) =>
                item.payment === true && (
                  <tr key={item._id} className="border-b border-gray-200">
                    <td className="py-3 px-4">{item.date}</td>
                    <td className="py-3 px-4">{item.courseName}</td>
                    <td className="py-3 px-4">{item.price}</td>
                    <td className="py-3 px-4">{item.email}</td>
                    <td className="py-3 px-4">{item.transactionId}</td>
                  </tr>
                )
            )
          ) : (
            <tr>
              <td colSpan="6" className="text-center py-3">
                No payment history found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default History;
