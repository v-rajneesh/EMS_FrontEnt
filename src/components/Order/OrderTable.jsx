import React from "react";
import { useHistory } from "react-router-dom";
//
//
//
//
//
//
//
const OrderTable = props => {
  console.log("--", props);
  const history = useHistory();
  const headers = props.headers;
  const items = props.items;
  const getOrderDetails = (e, item) => {
    history.push("/Order/" + e, { state: item });
  };
  return (
    <div className="table-wrapper">
      <table className="table table-borderless table-dark">
        <thead>
          <tr>
            {headers.map((head, i) => (
              <th scope="col" key={head + i}>
                {head}
              </th>
            ))}
            <th></th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, i) => (
            <tr key={item.order_id}>
              <td>{item.order_id}</td>
              <td>{item.customer_id}</td>
              <td>{item.status}</td>
              <td>{item.salesman_id}</td>
              <td>{item.order_date}</td>
              <td
                onClick={() => {
                  getOrderDetails(item.order_id, item);
                }}
              >
                <a>GetDetails</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
