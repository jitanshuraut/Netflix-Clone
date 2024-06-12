import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sigin from "./pages/Sigin";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Trending from "./pages/Trending";
import Movie from "./pages/Movie";
import TV from "./pages/TV";
import CheckoutForm from "./pages/CheckoutForm";
import Tempchek from "./pages/Tempchek";
import Details from "./pages/Details";
import Spinner from "./pages/Spinner";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { High_light } from "./States/Toggle_Bar";

// const stripPromise = loadStripe("pk_test_51MQQhrSH9sr4A0xt9JwnABL7xEx9hqzR0tL3XVc9kzD47gE0cIbS2bKW149gQ1A486yX2cyV4bGa9ACLBiluBbTa00qtBb167t");

function App() {
  let h = window.innerHeight;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(High_light());
  });
  return (
    <>
      <BrowserRouter>
        <div style={{ display: "flex", backgroundColor: "black" }}>
          <Navbar />

          <div
            className="content"
            style={{
              height: `${h}px`,
              overflow: "scroll",
              backgroundColor: "black",
            }}
          >
            
            <Routes>
              <Route path="/" element={<Spinner />} />
              <Route path="/Sigin" element={<Sigin />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/home" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/movies" element={<Movie />} />
              <Route path="/tv" element={<TV />} />
              {/* <Route path="/check" element={<Tempchek />} /> */}
              <Route path="/details" element={<Details />} />
              <Route path="/trending" element={<Trending />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
