import React, { useState, useEffect } from "react";
import style from "../style/sigin.module.css";
import { FcGoogle } from "react-icons/fc";
import { signInWithGoogle } from "../firebase-log";
import { Sigin_Fun } from "../components/CustomSiginFun";
import { useMutation, gql } from "@apollo/client";

const CREATE_USER = gql`
  mutation create_user(
    $name: String!
    $email: String!
    $subscription: Boolean!
  ) {
    create_user(name: $name, email: $email, subscription: $subscription) {
      id
    }
  }
`;

function Sigin() {
  let t = window.innerHeight + "px";
  console.log(t);

  const [createUser] = useMutation(CREATE_USER);

  async function User() {
    await Sigin_Fun();

    const name = sessionStorage.getItem("name");
    const email = sessionStorage.getItem("email");
    const subscription = true;

    if (!name || !email) {
      console.error("Name or email not found in session storage");
      return;
    }

    try {
      const { data } = await createUser({
        variables: { name, email, subscription },
      });
      console.log("User created:", data.create_user.id);
      sessionStorage.setItem("User_Id", data.create_user.id);

      window.location = "http://localhost:3000/home";
    } catch (error) {
      console.error("Error creating user:", error);

      window.location = "http://localhost:3000/home";
    }
  }

  return (
    <>
      <div
        className={style.main}
        style={{ backgroundImage: `url(bg.jpg)`, height: `${t}` }}
      >
        <div className={style.login}>
          <div className={style.img_outer}>
            <img src="logo.jfif" className={style.img} alt="" />
          </div>
          <div className={style.main_login_cont}>
            <div className={style.sigin}>
              <h1 className={style.header_sl}>Sigin</h1>
              <div className={style.cont_with_google} onClick={User}>
                <p className={style.google_text}>Continue with Google </p>
                <img src="go.png" alt="" className={style.go_png} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sigin;
