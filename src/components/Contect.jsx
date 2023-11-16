import React, { useState } from "react";

export const Contect = () => {
  const [fname, setfName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [message, setmessage] = useState("");
  const [all, setallvalue] = useState([]);

  const formSubmit = (e) => {
    e.preventDefault();
    const newValue = { fname, email, password, message };
    setEmail("");
    setpassword("");
    setmessage("");
    setallvalue([...all, newValue]);
  };
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <form className="w-50" onSubmit={formSubmit}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Name
            </label>
            <input
              onChange={(e) => setfName(e.target.value)}
              type="text"
              value={fname}
              name="fname"
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
              name="email"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              onChange={(e) => setpassword(e.target.value)}
              value={password}
              name="password"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Message
            </label>
            <textarea
              onChange={(e) => setmessage(e.target.value)}
              value={message}
              name="message"
              type="text"
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
        <section className="">
          {all.map((ele) => {
            const { fname, email, password, message } = ele;
            return (
              <div className="d-flex flex-column">
                <h1 className="text-success">Send Successfully</h1>
                <h3>
                  FirstName: <p>{fname}</p>
                </h3>
                <h3>
                  Email: <p>{email}</p>
                </h3>
                <h3>
                  Password: <p>{password}</p>
                </h3>
                <h3>
                  Message: <p>{message}</p>
                </h3>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
};
