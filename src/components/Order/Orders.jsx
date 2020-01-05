import React, { useEffect, useState } from "react";
import { getAllOrders } from "../services/EmployeeService";
import OrderTable from "./OrderTable";

//
//
//
//
//
//
//
const Orders = () => {
  const [orderList, setOrders] = useState([]);
  const [filteredorders, setFOrders] = useState([]);
  const [isFetched, setFetched] = useState(false);
  const headers = [
    "order id",
    "customer id",
    "Order Status",
    "Salesman Id",
    "Order Date"
  ];

  const order_state = ["Shipped", "Pending", "Canceled"];

  const orderStatusFilter = e => {
    const status = e.target.value;
    if (status !== "--option--") {
      const orders = orderList.filter(order => order.status === status);
      setFOrders(orders);
    }
  };

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      getAllOrders()
        .then(res => {
          setOrders(res.data.orders);
          setFOrders(res.data.orders);
          setFetched(true);
        })
        .catch(err => console.log(err));
    }

    return () => {
      mounted = false;
    };
  }, []);
  return (
    <div className="wrapper">
      <div className="wrapper filter">
        <h3>Filter By</h3>
        <div>
          <i>
            Order Status
            <select name="orders" onChange={orderStatusFilter}>
              <option>--option--</option>
              {order_state.map((status, i) => (
                <option key={i}>{status}</option>
              ))}
            </select>
          </i>
        </div>
      </div>
      <h1>Order List</h1>
      {isFetched && <OrderTable headers={headers} items={filteredorders} />}
    </div>
  );
};

export default Orders;
