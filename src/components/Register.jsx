import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setPhone] = useState("");
  const [data, setData] = useState("");
  const [passwordc, setPasswordC] = useState("");
  const [all, setallvalue] = useState([]);
  let navigate = useNavigate();
  const RegisterData = (e) => {
    e.preventDefault();
    const newValue = { email, password, phone, data, passwordc, name };
    setName("");
    setEmail("");
    setPhone("");
    setpassword("");
    setData("");
    setPasswordC("");
    setallvalue([...all, newValue]);
  };
  return (
    <>
      <div className="container-fluid row">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <form className="w-75" onSubmit={RegisterData}>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                First Name
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                class="form-control"
                id="exampleInputText"
                aria-describedby="emailHelp"
              />
            </div>
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
                Phone
              </label>
              <input
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                type="number"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Data
              </label>
              <input
                onChange={(e) => setData(e.target.value)}
                value={data}
                type="date"
                class="form-control"
                id="exampleInputPassword1"
              />
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
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                PasswordC
              </label>
              <input
                onChange={(e) => setPasswordC(e.target.value)}
                value={passwordc}
                type="passwordC"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button type="submit" class="btn btn-outline-success w-100 my-3">
              Submit
            </button>
          </form>
        </div>
        {all.map((ele) => {
          const { name, phone, email, data, password, passwordc } = ele;
          return (
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <div>
                <h2 className="my-2 text-success fw-bold fs-1">Send Data</h2>
                <p>
                  FirstName: <span>{name}</span>
                </p>
                <p>
                  Email: <span>{email}</span>
                </p>
                <p>
                  Phone: <span>{phone}</span>
                </p>
                <p>
                  Data: <span>{data}</span>
                </p>
                <p>
                  Password: <span>{password}</span>
                </p>
                <p>
                  PasswordC: <span>{passwordc}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
