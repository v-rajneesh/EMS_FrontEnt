import React from "react";
import axios from "axios";
//
//
//
//
//
//
export const getEmployees = () =>
  axios.get("http://localhost:8080/v1/getAllEmployees");

export const getAllOrders = () =>
  axios.get("http://localhost:8080/v1/getAllOrders");

export const getOrderInfoById = id =>
  axios.get("http://localhost:8080/v1/getOrderInfoById/" + id);

export const getOrderById = id =>
  axios.get("http://localhost:8080/v1/getOrderById/" + id);

export const getProductDetail = p_id =>
  axios.get("http://localhost:8080/v1/getProductDetails/" + p_id);
