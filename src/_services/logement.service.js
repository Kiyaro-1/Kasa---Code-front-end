import Axios from "./caller.service";

let getAllProperties = () => {
  return Axios.get("/properties");
};

let getProperty = (id) => {
  return Axios.get("/properties/" + id);
};

export const propertyService = {
  getAllProperties,
  getProperty,
};
