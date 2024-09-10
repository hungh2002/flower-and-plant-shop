import { FormEvent } from "react";
import { axios } from "../customAxios";
import useJwtTokenStore from "../store/jwtTokenStore";
import { Link } from "react-router-dom";

const SignIn = () => {
  const updateJwtToken = useJwtTokenStore((state) => state.updateToken);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const response = await axios.post("/authentication/sign_in", formData);
    if (response.data.status == true) {
      axios.defaults.headers.common["Authorization"] =
        response.headers["authorization"];
      updateJwtToken(response.headers["authorization"]);
      window.location.reload();
    } else {
      alert("Invalid Credential");
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <h2>Sign In</h2>
        <div className="mb-3">
          <label className="form-label">
            User Name:
            <input name="username" type="text" className="form-control" />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Password:
            <input name="password" type="password" className="form-control" />
          </label>
        </div>
        <button type="submit" className="btn btn-secondary">
          Submit
        </button>
      </form>

      <Link to="/sign-up">Sign Up</Link>
    </>
  );
};

export default SignIn;
