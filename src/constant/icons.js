import { IoMdHome } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";

const icons = {
  home: (props) => <IoMdHome {...props} />,
  cart: (props) => <BsCart {...props} />,
  user: (props) => <FaRegUser {...props} />,
};
export { icons };
