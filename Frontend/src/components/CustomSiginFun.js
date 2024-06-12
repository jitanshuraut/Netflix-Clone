import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase-log";
import axios from "axios";
import Cookies from "js-cookie";
import { v4 as uuidv4, stringify } from "uuid";

const provider = new GoogleAuthProvider();



export const Sigin_Fun = async () => {
  var Name_;
  var Email_;
  await signInWithPopup(auth, provider)
    .then((result) => {
      Name_ = result.user.displayName;
      Email_ = result.user.email;
      sessionStorage.setItem("name", result.user.displayName);
      sessionStorage.setItem("email", result.user.email);
      sessionStorage.setItem("url", result.user.photoURL);
     
    })
    .catch((error) => {
      console.log(error);
    });
  // await axios
  //   .post("http://localhost:5001/doc/Add_user", {
  //     User_name: Name_,
  //     Email: Email_,
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //     const str = stringify(response.data.User_ID.data);
  //     // console.log(str);
  //     sessionStorage.setItem("Id", str);
  //     Cookies.set("Doc_Sec", str, { expires: 7 });
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
 

};
