import React, { useState, useEffect } from "react";
import style from "../style/home.module.css";
import { fetchsearchJSON } from "../components/data";
import Row_list from "../components/Row_list";
import Colum_list from "../components/Colum_list";
import styles from "../style/Search.module.css";
import { MdKeyboardVoice } from "react-icons/md";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function Search() {
  const [mov, setmov] = useState([]);
  const [page, setpage] = useState(1);
  const [input, setinput] = useState("");
  const [check, setcheck] = useState(true);

  function getsearch() {
    setpage(page + 1);
    console.log(page);
    fetchsearchJSON(input, page).then((movies) => {
      setmov([...mov, ...movies.results]);
      console.log(mov);
    });
  }
  console.log(mov);

  const handleKeyDown = (event) => {
    if (event.key === "Backspace") {
      // setmov([]);
    }

    if (event.key === "Enter") {
      getsearch();
    }
  };

  // useEffect(() => {
  //   if(input==""){
  //     setmov([])
  //   }
  // },[mov]);

  return (
    <>
      {/* <div class="Card">
        <div class="CardInner">
         
          <div class="container">
            <div class="Icon" >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#657789" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            </div>
            <div class="InputContainer" style={{ "display": "flex" }}>
              <input placeholder="search" value={input} onChange={(e) => { setinput(e.target.value) }} />
              <button style={{ "width": "20%" }} class="button-9" onClick={() => { getsearch() }} >Search</button>
            </div>
          </div>
        </div>
      </div> */}

      <div className={styles.search_outter_box}>
        <div className={styles.inner_box}>
         
        
         <svg
            id={styles.icon}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="red"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-search"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            id={styles.input}
            type="text"
            value={input}
            onChange={(e) => {
              setinput(e.target.value);
              if(input==""){
                setmov([])
              }
            }}
            onKeyDown={handleKeyDown}
          />
          {/* <button style={{ "width": "20%" }} class="button-9" onClick={() => { getsearch() }} >Search</button> */}
         
        </div>
        <div className={styles.inner_box} style={{width:"5%"}}>
         <MdKeyboardVoice style={{fontSize:"30px", color:"red"}} />
         </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2 className={style.movie_head}>
          Search For <span id={styles.span}>{input}</span>{" "}
        </h2>
        <h2
        className={styles.More}
          onClick={() => {
            getsearch();
          }}
        >
          {page!=1?"More":""}
          
        </h2>
      </div>
      <Row_list data={mov} />
    </>
  );
}

export default Search;

/* CSS */
