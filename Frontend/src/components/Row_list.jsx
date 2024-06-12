import React, { useState } from "react";
import style from "../style/row.module.css";
import List from "../components/List";
import { ImCross } from "react-icons/im";
let array = [];
function Row_list({ data }) {
  const [display, setdisplay] = useState(1);
  const [show, setshow] = useState([]);
  const [hide, sethide] = useState("0");

  let a = `https://image.tmdb.org/t/p/original//${
    show.backdrop_path 
  }`;
  return (
    <>
      <div className={style.list}>
        {data.map((ele) => {
          console.log(ele);
          let t = `https://image.tmdb.org/t/p/original//${
            ele.poster_path || ele.profile_path
          }`;

          return (
            <img
              src={t}
              className={style.list_box}
              alt=""
              onClick={() => {
                setshow(ele);
                setdisplay(display + 1);
                array.push(ele);
                sessionStorage.setItem("movies", JSON.stringify(array));
              }}
            />
          );
        })}
      </div>
      <ImCross
        style={{
          color: `${display % 2 == 0 ? "white" : "black"}`,
          cursor: "pointer",
        }}
        onClick={() => {
          setdisplay(display + 1);
        }}
      />
      <List movie={show} hide={hide} lin={a}  display={display} />
    </>
  );
}

export default Row_list;
