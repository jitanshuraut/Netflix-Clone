import React, { useEffect, useState } from 'react'
import style from "../style/profile.module.css"
import Row_list from '../components/Row_list'
function Profile() {
  const [header, setheader] = useState([])


  
  useEffect(() => {

    let mov=JSON.parse(sessionStorage.getItem('movies'))
    let pp = mov.filter( (ele, ind) => ind === mov.findIndex( elem =>  elem.id === ele.id))
              
    setheader(pp)
  }, [])
console.log(header)
  return (
    <>
      <div className={style.contanier}>
        <div className={style.box1}>
          <div className={style.img}>
            <img src="data:image/png;base64,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" className={style.img} alt="" />
          </div>
          <div className={style.content}>
            <p className={style.Prof_Con}>
             Email : abs</p>
            <p className={style.Prof_Con}>Name : abs</p>
            <p className={style.Prof_Con}>Phone : abs</p>
            <p className={style.Prof_Con}>Substriction Status : abs</p>
           


          </div>
        </div>
      <h1 className={style.head}>Recently visted</h1>

      </div>

      <Row_list data={header}/>

    </>
  )
}

export default Profile

// {
//   "movies": "[
//  {"adult":false,"backdrop_path\":\"/4avmIRBBOs9b4DKoenf8SWWJJP7.jpg\",\"id\":726759,\"title\":\"Tetris\",\"original_language\":\"en\",\"original_title\":\"Tetris\",\"overview\":\"In 1988, American video game salesman Henk Rogers discovers the video game Tetris. When he sets out to bring the game to the world, he enters a dangerous web of lies and corruption behind the Iron Curtain.\",\"poster_path\":\"/4F2QwCOYHJJjecSvdOjStuVLkpu.jpg\",\"media_type\":\"movie\",\"genre_ids\":[53,36,18],\"popularity\":459.364,\"release_date\":\"2023-03-15\",\"video\":false,\"vote_average\":7.785,\"vote_count\":289},{\"adult\":false,\"backdrop_path\":\"/4avmIRBBOs9b4DKoenf8SWWJJP7.jpg\",\"id\":726759,\"title\":\"Tetris\",\"original_language\":\"en\",\"original_title\":\"Tetris\",\"overview\":\"In 1988, American video game salesman Henk Rogers discovers the video game Tetris. When he sets out to bring the game to the world, he enters a dangerous web of lies and corruption behind the Iron Curtain.\",\"poster_path\":\"/4F2QwCOYHJJjecSvdOjStuVLkpu.jpg\",\"media_type\":\"movie\",\"genre_ids\":[53,36,18],\"popularity\":459.364,\"release_date\":\"2023-03-15\",\"video\":false,\"vote_average\":7.785,\"vote_count\":289},{\"adult\":false,\"backdrop_path\":\"/6Lw54zxm6BAEKJeGlabyzzR5Juu.jpg\",\"id\":82856,\"name\":\"The Mandalorian\",\"original_language\":\"en\",\"original_name\":\"The Mandalorian\",\"overview\":\"After the fall of the Galactic Empire, lawlessness has spread throughout the galaxy. A lone gunfighter makes his way through the outer reaches, earning his keep as a bounty hunter.\",\"poster_path\":\"/eU1i6eHXlzMOlEq0ku1Rzq7Y4wA.jpg\",\"media_type\":\"tv\",\"genre_ids\":[10765,10759,18],\"popularity\":1191.378,\"first_air_date\":\"2019-11-12\",\"vote_average\":8.488,\"vote_count\":8749,\"origin_country\":[\"US\"]},{\"adult\":false,\"backdrop_path\":\"/6Lw54zxm6BAEKJeGlabyzzR5Juu.jpg\",\"id\":82856,\"name\":\"The Mandalorian\",\"original_language\":\"en\",\"original_name\":\"The Mandalorian\",\"overview\":\"After the fall of the Galactic Empire, lawlessness has spread throughout the galaxy. A lone gunfighter makes his way through the outer reaches, earning his keep as a bounty hunter.\",\"poster_path\":\"/eU1i6eHXlzMOlEq0ku1Rzq7Y4wA.jpg\",\"media_type\":\"tv\",\"genre_ids\":[10765,10759,18],\"popularity\":1191.378,\"first_air_date\":\"2019-11-12\",\"vote_average\":8.488,\"vote_count\":8749,\"origin_country\":[\"US\"]},{\"adult\":false,\"backdrop_path\":\"/eSVu1FvGPy86TDo4hQbpuHx55DJ.jpg\",\"id\":700391,\"title\":\"65\",\"original_language\":\"en\",\"original_title\":\"65\",\"overview\":\"After a catastrophic crash on an unknown planet, pilot Mills quickly discovers he's actually stranded on Earth…65 million years ago. Now, with only one chance at rescue, Mills and the only other survivor, Koa, must make their way across an unknown terrain riddled with dangerous prehistoric creatures in an epic fight to survive.\",\"poster_path\":\"/rzRb63TldOKdKydCvWJM8B6EkPM.jpg\",\"media_type\":\"movie\",\"genre_ids\":[53,878,28],\"popularity\":499.429,\"release_date\":\"2023-03-02\",\"video\":false,\"vote_average\":6.275,\"vote_count\":296},{\"adult\":false,\"backdrop_path\":\"/eSVu1FvGPy86TDo4hQbpuHx55DJ.jpg\",\"id\":700391,\"title\":\"65\",\"original_language\":\"en\",\"original_title\":\"65\",\"overview\":\"After a catastrophic crash on an unknown planet, pilot Mills quickly discovers he's actually stranded on Earth…65 million years ago. Now, with only one chance at rescue, Mills and the only other survivor, Koa, must make their way across an unknown terrain riddled with dangerous prehistoric creatures in an epic fight to survive.\",\"poster_path\":\"/rzRb63TldOKdKydCvWJM8B6EkPM.jpg\",\"media_type\":\"movie\",\"genre_ids\":[53,878,28],\"popularity\":499.429,\"release_date\":\"2023-03-02\",\"video\":false,\"vote_average\":6.275,\"vote_count\":296}]"
// }

// {localStorage.getItem("profilePic")}
// {localStorage.getItem("email")}