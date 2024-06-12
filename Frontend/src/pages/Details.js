import React from "react";
import styles from "../style/Detail.module.css";
import { useLocation } from "react-router-dom";
import Row_list from "../components/Row_list";
import { useQuery, gql } from "@apollo/client";
import QueryResult from "../components/QueryResult";
import ReactStars from "react-stars";



export default function Details() {
  const location = useLocation();
  const FindCast = gql`
    query FindCast($movieId: Int) {
      FindCast(MovieID: $movieId) {
        id
        profile_path
        cast_id
      }

      Details_Movie_Tv(MovieID: $movieId) {
        id
        original_title
        poster_path
        popularity
        overview
        vote_count
        vote_average
        runtime
        revenue
        release_date
        budget
        imdb_id
      }
      Video(MovieID: $movieId) {
        id
        key
        official
      }
    }
  `;

  var movieId = location.state.Tmdbid;
  const { loading, error, data } = useQuery(FindCast, {
    variables: { movieId },
  });

  function img(va) {
    return `https://image.tmdb.org/t/p/original/${va}`;
  }

  function video_link(va){
    return `https://www.youtube.com/embed/${va}`
  }
  function Rate_(val) {
    let ext = val + Math.floor(Math.random() * val);
    let per = (val / ext) * 5;
    return per;
  }

  return (
    <>
      <QueryResult error={error} loading={loading} data={data}>
     
            <iframe
              id={styles.Yt_video}
              width="95%"
              height={window.innerHeight / 1.1 + "px"}
              src={video_link(data?.Video[0].key||"LfrTzBcwjNk")}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
      </QueryResult>

      <QueryResult error={error} loading={loading} data={data}>
        <div className={styles.outter_box}>
          <img
            className={styles.Img}
            src={img(String(data?.Details_Movie_Tv[0].poster_path))}
            alt=""
          />
          <div className={styles.details}>
            <h1 className={styles.Movie_Name}>
              {data?.Details_Movie_Tv[0].original_title || "temp"}
            </h1>

            <p className={styles.Meta_details}>
              {String(data?.Details_Movie_Tv[0].release_date).substring(0, 4)} |{" "}
              {String(data?.Details_Movie_Tv[0].runtime / 60).substring(0, 3)}h
              | 16+
            </p>
            <p className={styles.rate}>
            <ReactStars
                count={5}
                size={30}
                color2={"red"}
                value={Rate_(data?.Details_Movie_Tv[0].vote_average)}
                edit={false}
              /> 
            </p>
            <h2 className={styles.overview}>Overview</h2>
            <p className={styles.overview_cont}>
              {data?.Details_Movie_Tv[0].overview}
            </p>
            <p className={styles.genre}>
              Release Date : {data?.Details_Movie_Tv[0].release_date}
            </p>
            <p className={styles.genre}>
              Runtime : {data?.Details_Movie_Tv[0].runtime}
            </p>
            <p className={styles.genre}>
              imdb Id : {data?.Details_Movie_Tv[0].imdb_id}
            </p>
           
          </div>
        </div>
      </QueryResult>

      <div className={styles.cast}>
        <h2 className={styles.casthead}>Cast</h2>
        <QueryResult error={error} loading={loading} data={data}>
          <Row_list data={data?.FindCast} />
        </QueryResult>
      </div>

      {/* <h2 className={style.movie_head}>Top Rated TV Shows</h2> */}
      {/* <Row_list data={rtv}/> */}
    </>
  );
}

//  [
//   {
//     "__typename": "Details_Movie",
//     "id": 1039690,
//     "original_title": "Desperation Road",
//     "poster_path": "/tPyj6Gii1HrnzCbJXEF7JdSFkQ8.jpg",
//     "popularity": 1033.351,
//     "overview": "After 11 years in a Mississippi state prison, Russell Gaines struggles to leave his past sins behind him as he returns home to his stoic father, Mitchell. One fateful night he meets Maben, a young mother with nothing but a stolen gun and a murdered police deputy to her name. Desperate and on the run, Russell and Maben must trust one another to escape their own circumstances, before the truths of their intertwined violent past threatens to destroy them.",
//     "vote_count": 19,
//     "vote_average": 7.632,
//     "runtime": 112,
//     "revenue": 0,
//     "release_date": "2023-10-19",
//     "budget": 0
// }
// ]
