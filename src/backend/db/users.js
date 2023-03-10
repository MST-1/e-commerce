import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Madhukar",
    lastName: "Tomar",
    email: "madhukarronaldo07@gmail.com",
    password: "Solar@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    address: [
      {
        _id: uuid(),
        name: "Madhukar Tomar",
        street: "5, Indira Nagar",
        city: "Noida",
        state: "Uttar Pradesh",
        zipcode: "201311",
        country: "India",
        mobile: "8285443123",
      },
      {
        _id: uuid(),
        name: "Vikrant Sharma",
        street: "M.G. Road",
        city: "Bangalore",
        state: "Karnataka",
        zipcode: "370082",
        country: "India",
        mobile: "9394052424",
      },
    ],
  },
];
