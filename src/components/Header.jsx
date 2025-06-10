import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/authActions";

const Header = () => {
  const { isLogin, isAdmin, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <header style={{ padding: "10px", backgroundColor: "#eee" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/cart">Cart</Link> |{" "}
      <Link to="/contact">Contact</Link>{" "}
      {isAdmin && <>| <Link to="/admin">Admin</Link></>}
      {!isLogin ? (
        <>| <Link to="/login">Login</Link></>
      ) : (
        <>
          {" "} | Xin chào, {user.username}
          {" "} | <button onClick={() => dispatch(logout())}>Đăng xuất</button>
        </>
      )}
    </header>
  );
};

export default Header;
