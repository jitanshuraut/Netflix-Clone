import React, { useEffect, useRef, useState } from "react";
import styles from "../style/Movies.module.css";
import Row_list from "../components/Row_list";
import { useQuery, gql } from "@apollo/client";
import QueryResult from "../components/QueryResult";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

function TopRated({pageRated, typeRated,Tag}) {
    const TopRated = gql`
    query TopRated($pageRated: Int, $typeRated: String) {
      TopRated(pageRated: $pageRated, TypeRated: $typeRated) {
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
  
    const [pageMovt, setpageMovt] = useState(1);
  
  
  
    const { loading, error, data } = useQuery(TopRated, {
      variables: { pageRated, typeRated },
    });


  
  
    function getup(fun, page) {
      fun(page + 1);
    }
  
    function getdown(fun, page) {
      fun(page - 1);
    }
  
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
            <h2 className={styles.movie_head}>Top Rated {Tag} </h2>
            <div
              className="inner_box"
              style={{ display: "flex", cursor: "pointer" }}
            >
              <h2
                className={styles.arrow}
                onClick={() => {
                  getdown(setpageMovt, pageMovt);
                }}
              >
                <FontAwesomeIcon icon={faChevronLeft} style={{ color: "red" }} />
              </h2>
  
              <h2
                className={styles.arrow}
                onClick={() => {
                  getup(setpageMovt, pageMovt);
                }}
              >
                <FontAwesomeIcon icon={faChevronRight} style={{ color: "red" }} />
              </h2>
            </div>
          </div>
  
          <QueryResult error={error} loading={loading} data={data}>
            <Row_list data={data?.TopRated} />
          </QueryResult>
        </div>
      </>
    );
}

export default TopRated