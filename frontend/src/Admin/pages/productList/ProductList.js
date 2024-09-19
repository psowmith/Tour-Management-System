import './productList.css';
import { Link } from "react-router-dom";
import TourData from '../../adminApi/tourData';

const ProductList = () => {
  const tourD = TourData();

  const handleDelete = (id) => {
    // Logic to delete the item from data
  };

  const booleanToString = (value) => (value ? "Yes" : "No");

  return (
    <div className='productList'>
      <table className='productTable'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Reservation</th>
            <th>Guest(s)</th>
            <th>Cost</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {tourD.map((row) => (
            <tr key={row._id}>
              <td>
                <div className="productListItem">
                  <img className="productListImg" src={row.image} alt="" />
                  {row.name}
                </div>
              </td>
              <td>{booleanToString(row.reservation)}</td>
              <td>{row.guest}</td>
              <td>{row.cost}</td>
              <td>
                <Link to={`/admin/product/${row._id}`}>
                  <button className="productListEdit">Edit</button>
                </Link>
                {/* Add a button for delete */}
                <button className="productListDelete" onClick={() => handleDelete(row.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
