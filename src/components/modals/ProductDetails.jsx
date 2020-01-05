import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { getProductDetail } from "../services/EmployeeService";
//
//
//
//
//
//
//
const ProductDetail = ({ productID }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [productDetail, setproduct] = useState();

  useEffect(() => {
    let mounted = true;
    if (mounted && show) {
      getProductDetail(productID).then(res => {
        if (res.data.statusCode == 200) {
          setproduct(res.data.product);
        }
      });
    }
    return () => {
      mounted = false;
    };
  }, [show]);

  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleShow}>
        Product Detail
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Product: {productDetail && productDetail.productName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Description:{productDetail && productDetail.description}
          <br />
          Standard Cost:{productDetail && productDetail.sCost}
          <br />
          Product Category:{productDetail && productDetail.category}
          <br />
          List Price:{productDetail && productDetail.lprice}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default ProductDetail;
