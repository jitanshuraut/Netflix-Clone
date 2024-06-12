import React, { useState, useEffect } from "react";
import style from "../style/home.module.css";
import { BsArrowUpRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import ReactStars from "react-stars";
import { FaPlayCircle } from "react-icons/fa";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { useMutation, gql } from "@apollo/client";
import { FaRegHeart } from "react-icons/fa";

function Header({ data }) {
  const UPDATE_LIKE_CONTENT = gql`
    mutation Mutation($idUser: String, $idContent: String) {
      update_Like_Content(id_user: $idUser, id_content: $idContent) {
        id_content
        id_user
      }
    }
  `;

  const UPDATE_DISLIKE_CONTENT = gql`
    mutation UpdateDislikeContent($idUser: String!, $idContent: String!) {
      update_Dislike_Content(id_user: $idUser, id_content: $idContent) {
        id_user
        id_content
      }
    }
  `;

  console.log(data);
  const navigate = useNavigate();

  console.log(data[0].backdrop_path);
  const [ran, setran] = useState(Math.floor(Math.random() * 20));

  let sr = `https://image.tmdb.org/t/p/original//${data[ran].backdrop_path}`;

  function right() {
    setran((ran + 1) % 20);
  }

  function left() {
    if (ran > 1) {
      setran((ran - 1) % 20);
    }
  }

  function Rate_(val) {
    let ext = val + Math.floor(Math.random() * val);
    let per = (val / ext) * 5;
    return per;
  }
  const [likeActive, setLikeActive] = useState(false);
  const [dislikeActive, setDislikeActive] = useState(false);

  const [updateDislikeContent] = useMutation(UPDATE_DISLIKE_CONTENT);

  const handleDislikeClick = async () => {
    setDislikeActive(!dislikeActive);
    if (likeActive) {
      setLikeActive(false);
    }

    const variables = {
      idUser: sessionStorage.getItem("User_Id"),
      idContent: data[ran].id.toString(),
    };
    console.log(variables);

    try {
      const { data } = await updateDislikeContent({
        variables,
      });
      console.log(data.update_Dislike_Content);
    } catch (error) {
      console.error("Error updating dislike content:", error);
    }
  };

  const [updateLikeContent] = useMutation(UPDATE_LIKE_CONTENT);

  const handleLikeClick = async () => {
    setLikeActive(!likeActive);
    if (dislikeActive) {
      setDislikeActive(false);
    }
    const variables = {
      idUser: sessionStorage.getItem("User_Id"),
      idContent: data[ran].id.toString(),
    };
    console.log(variables);

    try {
      const { data } = await updateLikeContent({ variables });
      console.log("Like updated:", data.update_Like_Content);
    } catch (error) {
      console.error("Error updating like:", error);
    }
  };

  return (
    <>
      <div className={style.ext_img}>
        <div className={style.container}>
          <div className={style.content}>
            <h1 className={style.head}>{data[ran].title || data[ran].name}</h1>

            <div className={style.outterRate}>
              {/* <p className={style.rate}>{data[ran].vote_average}</p> */}
              <ReactStars
                count={5}
                size={30}
                color2={"red"}
                value={Rate_(data[ran].vote_average)}
                edit={false}
              />
            </div>
            <p style={{ textAlign: "start", padding: "10px" }}>
              {data[ran].overview}
            </p>

            <div className={style.outterRate}>
              <div className={style.outter_play}>
                <div
                  className={style.watch}
                  onClick={() => {
                    navigate("/details", {
                      state: { id: 1, Tmdbid: data[ran].id },
                    });
                  }}
                >
                  <p className={style.Play}>Play</p>
                  <FaPlayCircle
                      style={{ fontSize: "20px", marginLeft: "10px" }}
                    />
                </div>
               
              </div>
            </div>
            <div className={style.outterRate_like_dislike}>
              <div className={style.outer_cirlce} onClick={handleLikeClick}>
                <AiFillLike
                  className={style.like_d}
                  style={{ color: likeActive ? "red" : "black" }}
                />
              </div>
              <div className={style.outer_cirlce} onClick={handleDislikeClick}>
                <AiFillDislike
                  className={style.like_d}
                  style={{ color: dislikeActive ? "red" : "black" }}
                />
              </div>
            </div>
          </div>

          <img src={sr} className={style.img} alt="" />
        </div>
        <div className={style.fade}></div>
      </div>
    </>
  );
}

export default Header;
