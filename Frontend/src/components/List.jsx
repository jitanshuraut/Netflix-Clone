import React, { useState, useEffect } from "react";
import style from "../style/home.module.css";
import { ImCross } from "react-icons/im";
import { BsArrowUpRight } from "react-icons/bs";
import { fetchpersonJSON } from "./data";
import { useNavigate } from "react-router-dom";
import ReactStars from "react-stars";
import { FaPlayCircle } from "react-icons/fa";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { useMutation, gql, useQuery } from "@apollo/client";
import { FaRegHeart } from "react-icons/fa";

function List({ movie, hide, lin, display }) {
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

  const GET_MOV_LIST_USER = gql`
    query GetMovListUser($id_user: ID!) {
      Get_MovList_user(id_user: $id_user) {
        id
        name
        id_user
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_MOV_LIST_USER, {
    variables: { id_user: sessionStorage.getItem("User_Id") },
  });

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const [per_det, setper_det] = useState([]);
  const navigate = useNavigate();

  function img_src(path) {
    return `https://www.youtube.com/results?search_query=${path}`;
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
      idContent: movie.id.toString(),
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
      idContent: movie.id.toString(),
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
      {display % 2 == 0 ? (
        <div className={style.ext_img}>
          <div className={style.container}>
            <div className={style.content}>
              <h1 className={style.head}>{movie.title || movie.name}</h1>

              <div className={style.outterRate}>
                {/* <p className={style.rate}>{data[ran].vote_average}</p> */}
                <ReactStars
                  count={5}
                  size={30}
                  color2={"red"}
                  value={Rate_(movie.vote_average || movie.popularity)}
                  edit={false}
                />
              </div>
              <p style={{ textAlign: "start", padding: "10px" }}>
                {movie.overview}
              </p>

              <div className={style.outterRate}>
                <div className={style.outter_play}>
               
                  <div
                    className={style.watch}
                    onClick={() => {
                      navigate("/details", {
                        state: { id: 1, Tmdbid: movie.id },
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
                <div
                  className={style.outer_cirlce}
                  onClick={handleDislikeClick}
                >
                  <AiFillDislike
                    className={style.like_d}
                    style={{ color: dislikeActive ? "red" : "black" }}
                  />
                </div>
              </div>
            </div>

            <img src={lin} className={style.img} alt="" />
          </div>
          <div className={style.fade}></div>
        </div>
      ) : (
        console.log("yes")
      )}
    </>
  );
}

export default List;
