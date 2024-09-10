import { useEffect } from "react";
import { Link } from "react-router-dom";
import useJwtTokenStore from "../store/jwtTokenStore";
import { axios } from "../customAxios";
import useUserStore from "../store/userStore";

const Header = () => {
  const jwtToken = useJwtTokenStore((state) => state.jwtToken);
  const username = useUserStore((state) => state.username);
  const updateUser = useUserStore((state) => state.update);
  const signedIn = useUserStore((state) => state.signedIn);

  const authorization = async () => {
    if (jwtToken != null) {
      axios.defaults.headers.common["Authorization"] = jwtToken;
      const response = await axios.post("/get-user");
      if (
        response.data.username !== undefined &&
        response.data.username !== null
      ) {
        updateUser({
          userId: response.data.userId,
          username: response.data.username,
          signedIn: true,
        });
      } else {
        updateUser({
          userId: response.data.userId,
          username: "Profile",
          signedIn: false,
        });
      }
    }
  };

  useEffect(() => {
    authorization();
  }, []);

  const signOut = () => {
    updateUser({ userId: 0, username: "Profile", signedIn: false });
    axios.defaults.headers.common["Authorization"] = null;
    localStorage.removeItem("jwtToken");
  };

  const authenticationButton = () => {
    return signedIn ? (
      <Link className="dropdown-item" to="/" onClick={signOut}>
        Sign Out
      </Link>
    ) : (
      <Link className="dropdown-item" to="/sign-in">
        Sign In or Sign Up
      </Link>
    );
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {username}
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/profile">
                    Profile
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>{authenticationButton()}</li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
