import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import styles from "../style/Movies.module.css";
import QueryResult from "./QueryResult";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import Row_list from "./Row_list";

function DiscoverMovies_Tv_G({ typehist, withGenres, Tag }) {
  const DISCOVER_MOVIES_TV_QUERY = gql`
    query DiscoverMovies_Tv($page: Int, $typehist: String, $withGenres: Int) {
      discoverMovies_Tv(
        pageMovt: $page
        TypeMovt: $typehist
        with_genres: $withGenres
      ) {
        Type
        backdrop_path
        id
        overview
        popularity
        poster_path
        title
      }
    }
  `;

  const [page, setpage] = useState(1);

  const { loading, error, data } = useQuery(DISCOVER_MOVIES_TV_QUERY, {
    variables: { page, typehist, withGenres },
  });

  function getup() {
    setpage(page + 1);
  }

  function getdown(fun, page) {
    setpage(page - 1);
  }
console.log(page)
  return (
    <>
      <div className={styles.main}>
        <div
          className="upper_box"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: "20px",
            paddingRight: "20px",
            marginLeft: "20px",
            marginTop: "20px",
            marginRight: "20px",
          }}
        >
          <h2 className={styles.movie_head}>{Tag} </h2>
          <div
            className="inner_box"
            style={{ display: "flex", cursor: "pointer" }}
          >
            <h2
              className={styles.arrow}
              onClick={() => {
                getdown();
              }}
            >
              <FontAwesomeIcon icon={faChevronLeft} style={{ color: "red" }} />
            </h2>

            <h2
              className={styles.arrow}
              onClick={() => {
                getup();
              }}
            >
              <FontAwesomeIcon icon={faChevronRight} style={{ color: "red" }} />
            </h2>
          </div>
        </div>

        <QueryResult error={error} loading={loading} data={data}>
          <Row_list data={data?.discoverMovies_Tv} />
        </QueryResult>
      </div>
    </>
  );
}

export default DiscoverMovies_Tv_G;
