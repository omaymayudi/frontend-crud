import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProdduct();
  }, []);
  // console.log("ini data product: ", products);
  const getProdduct = async () => {
    const response = await axios.get("http://localhost:5000/api/v1/product");
    setProducts(response.data.data);
  };

  const deleteProduct = async (productId) => {
    await axios
      .delete(`http://localhost:5000/api/v1/product/${productId}`)
      .then(() => {
        getProdduct();
      });
  };

  return (
    <div className="relative overflow-x-auto px-4 py-8">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              No.
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Create By
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr
              key={product.uuid}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="px-6 py-4">{index + 1}</td>
              <td className="px-6 py-4">{product.name}</td>
              <td className="px-6 py-4">{product.price}</td>
              <td className="px-6 py-4">{product.user.name}</td>
              <td className="px-6 py-4 space-x-2">
                <Link to={`/product/edit/${product.uuid}`} className="">
                  <button className="font-medium bg-green-600 text-white rounded-lg px-4 py-2 shadow-lg hover:underline">
                    Edit
                  </button>
                </Link>

                <button
                  onClick={() => deleteProduct(product.uuid)}
                  className="font-medium bg-red-600 text-white rounded-lg px-4 py-2 shadow-lg hover:underline"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
