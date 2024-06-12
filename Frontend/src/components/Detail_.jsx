import React from 'react'
import styles from "../style/Detail.module.css";

function Detail_() {
  return (
    <>
    
    <div className={styles.outter_box}>
          <img
            className={styles.Img}
            src="https://image.tmdb.org/t/p/original///uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg"
            alt=""
          />
          <div className={styles.details}>
            <h1 className={styles.Movie_Name}>temp</h1>
            <p className={styles.Meta_details}>2018 | 2h 26 m | 16+</p>

            <h2 className={styles.overview}>Overview</h2>
            <p className={styles.overview_cont}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
              fugit modi ea sequi doloremque in numquam, ipsum dolore sint est
              similique hic eveniet officiis adipisci recusandae eaque repellat
              culpa vel.
            </p>
            <p className={styles.genre}>Genre :</p>
            <p className={styles.genre}>Release Date :</p>
            <p className={styles.genre}>Runtime :</p>
            <p className={styles.genre}>imdb Id :</p>
            <p className={styles.rate}>RATEING : vote_average</p>
          </div>
        </div>
    </>
  )
}

export default Detail_