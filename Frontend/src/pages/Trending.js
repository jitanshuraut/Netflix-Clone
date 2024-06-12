import React, { useEffect, useRef, useState } from "react";
import Trending_ from "../components/Trending_";
import { useQuery, gql } from "@apollo/client";
import styles from "../style/Movies.module.css";
import QueryResult from "../components/QueryResult";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import Row_list from "../components/Row_list";



function Trending() {

  const Popular_cast = gql`
  query PopularCast($page: Int) {
    PopularCast(page: $page) {
  
      id
      name
      original_name
      media_type
      popularity
      gender
      known_for_department
      profile_path
    }
  }
`;
// const [page, setpage] = useState(1)
var page=1

const { loading, error, data } = useQuery(Popular_cast, {
  variables: { page }
});

console.log(data);
function getup() {
  // setpage(page + 1);
}

function getdown() {
  // setpage(page - 1);
}
  return (
    <>
     <Trending_ typeMovt="movie" Tag="Movie"/>
      <Trending_ typeMovt="tv" Tag="Tv shows"/>

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
          <h2 className={styles.movie_head}>Trending Cast </h2>
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
          <Row_list data={data?.PopularCast} />
        </QueryResult>
      </div>
    </>
  );
}

export default Trending