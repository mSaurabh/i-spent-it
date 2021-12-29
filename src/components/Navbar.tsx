import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import styles from "./Navbar.module.css";

interface INavBarProps {}

export const Navbar = (props: INavBarProps) => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className={`${styles.navbar}`}>
      <ul>
        <li className={styles.title}>
          <Link to="/">iSpentIt</Link>
        </li>
        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
        {user && (
          <>
            <li>Hello, {user.displayName}</li>
            <li>
              <button className="btn" onClick={logout}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
