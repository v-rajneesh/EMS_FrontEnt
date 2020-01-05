import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getOrderInfoById, getOrderById } from "../services/EmployeeService";
import { Button } from "react-bootstrap";
import ProductDetail from "../modals/ProductDetails";
//
//
//
//
//
//
//

const OrderDetails = props => {
  const item = props.history.location.state;
  const { id } = useParams();
  const [ordered_item, setOrderedItem] = useState();
  const [order_details, setOrderDetails] = useState();

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (item && item.state) {
        setOrderedItem(item.state);
      } else {
        getOrderInfoById(id)
          .then(res => {
            if (res.data.statusCode == 200) {
              setOrderedItem(res.data.order);
            }
          })
          .catch(err => console.log(err));
      }
      getOrderById(id)
        .then(res => {
          if (res.data.statusCode == 200) {
            setOrderDetails(res.data.orders);
          }
        })
        .catch(err => console.log(err));
    }
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div>
      <h3>Order Details (Order Num :{id})</h3>
      {order_details && order_details.length > 0 ? (
        order_details.map((order, i) => <OrderTiles key={i} order={order} />)
      ) : (
        <div className="order-error">No Data Found</div>
      )}
    </div>
  );
};

const OrderTiles = ({ order }) => {
  return (
    <div className="order-tile">
      <h4>
        <span>Item Id:{order.item_id}</span>
      </h4>
      <span>Product name:{order.productName}</span>
      <br />
      <span>Quantity:{order.quantity}</span>
      <br />
      <span>Unit Price:{order.unitPrice}</span> <br />
      <span>Total Price:{order.unitPrice * order.quantity}</span>
      <br />
      <ProductDetail productID={order.productID} />
    </div>
  );
};

export default OrderDetails;
