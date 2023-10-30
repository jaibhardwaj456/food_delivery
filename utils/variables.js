const deployment = true;
export const mainLink = deployment
  ? "https://foodpointbackend.onrender.com"
  : "http://localhost:5000";

export const orderData = mainLink + "/api/orderData";
export const foodData = mainLink + "/api/foodData";
export const loginuser = mainLink + "/api/loginuser";
export const myOrderData = mainLink + "/api/myOrderData";
export const createuser = mainLink + "/api/createuser";
