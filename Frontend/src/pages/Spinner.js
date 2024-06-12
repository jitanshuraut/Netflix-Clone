import React from "react";
import { MoonLoader } from "react-spinners";
import styles from "../style/Spinner.module.css"
import { useNavigate } from "react-router-dom";


function Spinner() {
    let navigate = useNavigate();
    setTimeout(() => {
        navigate("/Sigin")
    }, 10000);
    
  return (
    <>
      <div className={styles.center_box}>

        <div className={styles.inner_box}>
          <img id={styles.Logo} src="logo.jfif" alt="" />
          <div className={styles.spin_inner}>
          <MoonLoader id={styles.Spin} color="red" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Spinner;
