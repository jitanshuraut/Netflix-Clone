import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import TopRated from "../components/TopRated";
import Trending_ from "../components/Trending_";
import { useQuery, gql } from "@apollo/client";
import QueryResult from "../components/QueryResult";
import { Show, NotShow } from "./../States/Toggle_Bar"
import { useSelector, useDispatch } from 'react-redux'

function Home() {
  const count = useSelector((state) => state.Toggel.value);
  const dispatch = useDispatch()
  dispatch(Show())
  const DiscoverMovies_Tv = gql`
    query DiscoverMovies_Tv($pageMovt: Int, $typeMovt: String) {
      discoverMovies_Tv(pageMovt: $pageMovt, TypeMovt: $typeMovt) {
        Type
        backdrop_path
        id
        overview
        popularity
        poster_path
        title
        vote_average
      }
    }
  `;
  var pageMovt = 1;
  var typeMovt = "movie";


  const { loading, error, data } = useQuery(DiscoverMovies_Tv, {
    variables: { pageMovt, typeMovt },
  });
  
  return (
    <>
      <QueryResult error={error} loading={loading} data={data}>
        <Header data={data?.discoverMovies_Tv} />
      </QueryResult>

      <Trending_ typeMovt="movie" Tag="Movie" />
      <Trending_ typeMovt="tv" Tag="Tv shows" />
      <TopRated pageRated={1} typeRated="movie" Tag="Movies" />

      <TopRated pageRated={1} typeRated="tv" Tag="Tv" />
    </>
  );
}

export default Home;
