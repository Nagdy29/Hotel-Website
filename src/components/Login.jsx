import React, { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [all, setallvalue] = useState([]);
  const sendData = (e) => {
    e.preventDefault();
    const newValue = { email, password };
    setEmail("");
    setpassword("");
    setallvalue([...all, newValue]);
  };
  return (
    <>
      <div className="container-fluid row">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <form className="w-75" onSubmit={sendData}>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                onChange={(e) => setpassword(e.target.value)}
                value={password}
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        {all.map((ele) => {
          const { email, password } = ele;
          return (
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <div>
                <h2 className="my-2 text-success fw-bold fs-1">Send Data</h2>
                <p>
                  Email: <span>{email}</span>
                </p>
                <p>
                  Password: <span>{password}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
