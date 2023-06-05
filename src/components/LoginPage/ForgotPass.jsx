
import { onAuthStateChanged } from "firebase/auth";
import React, { useLayoutEffect, useEffect, useRef, useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import Styles from "./LoginForm.module.css";
import sty from'./ForgotPass.module.css';
import { getAuth, signInWithRedirect } from "firebase/auth";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook"
// const auth = getAuth();
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FullScreenDialog from "../FullScreenDialog/FullScreenDialog";
// import { GoogleAuthProvider } from "firebase/auth";


export default function ForgotPass() {









    const [userid, setuserid] = useState("");

    const google_login = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                console.log(token);
                // The signed-in user info.
                const user = result.user;
                // userid=result.user;
                setuserid(result.user)
                localStorage.setItem("uid", result.user)
                // IdP data available using getAdditionalUserInfo(result)
                console.log(user);
                // ...
                // window.location.href = '/dashboard';
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                console.log(errorCode);
                const errorMessage = error.message;
                console.log(errorMessage);
                // The email of the user's account used.
                const email = error.customData.email;
                console.log(email);
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(credential);
                //
            });
        //  signInWithRedirect(auth, provider);
        setTimeout(() => { }, 3000);
    };
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");



    const submitform = async (e) => {
        e.preventDefault();
        if (
            submitStudentName === false ||
            submitStudentEmail === false ||
            submitStudentPass === false
        ) {
            console.log("sent");
        } else {
            var form = new FormData(e.target);

            let arr = [];
            var i = 0;
            console.log(form.entries());
            for (var pair of form.entries()) {
                console.log(pair);
                arr[i] = pair[1];
                i++;
                // console.log(form.values())
            }

            const auth = getAuth();
            createUserWithEmailAndPassword(auth, arr[1], arr[2])
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    // ...
                    console.log(user + "user created");
                    const close = document.getElementById("container");
                    const a = document.getElementById("autoclick2")
                    //    const b= document.getElementById("disable_mj")
                    //    b.style.display="none"

                    a.click();
                    setInterval(() => {
                        close.style.display = "none";
                    }, 150);

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                });
        }
    };

    const loginner = async (e) => {
        e.preventDefault();
        if (false) {
        } else {
            var form2 = new FormData(e.target);
            console.log(e.target);
            console.log(form2.entries());
            let arr = [];
            var i = 0;

            console.log({ loginEmail, loginPassword });

            // for (var pair of form2.entries()) {
            //   console.log(pair);
            //   arr[i] = pair[1];
            //   // console.log(arr[i])
            //   i++;
            //   console.log(i);
            // }

            form2.forEach((file) => {
                console.log(file);
            });
            // console.log(arr)
            const auth = getAuth();
            signInWithEmailAndPassword(auth, loginEmail, loginPassword)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log(user + ".then method of signInWithEmailAndPassword");
                    const close = document.getElementById("container");
                    console.log(userCredential.uid)
                    onAuthStateChanged(auth, (user) => {
                        if (user) {
                            // User is signed in, see docs for a list of available properties
                            // https://firebase.google.com/docs/reference/js/firebase.User
                            const uid = user.uid;
                            // userid=user.uid;
                            setuserid(user.uid)
                            localStorage.setItem("uid", user.uid)

                            console.log(uid + " onauthataechanged is working");
                            // ...
                        } else {
                            // User is signed out
                            // ...
                            console.log("USER signed out onauthstatechanged");
                        }
                    });
                    setInterval(() => {
                        close.style.display = "none";
                    }, 1000);
                    document.getElementById("autoclick").click();
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    console.log(errorCode + "of signInWithEmailAndPassword");
                    const errorMessage = error.message;
                    console.log(
                        errorMessage + "of signInWithEmailAndPassword errormessage"
                    );
                });
        }
        // onAuthStateChanged(auth, (user) => {
        //   if (user) {
        //     // User is signed in, see docs for a list of available properties
        //     // https://firebase.google.com/docs/reference/js/firebase.User
        //     const uid = user.uid;
        //     console.log(uid + "onauthataechanged is working");
        //     // ...
        //   } else {
        //     // User is signed out
        //     // ...
        //     console.log("USER signed out onauthstatechanged");
        //   }
        // });
    };

    // useEffect(()=>{
    //alert this may be harmful ,i added custom login but for now its a failure

    //  const newPostKey = push(child(ref(database), 'users')).key;
    //  // console.log(user)
    //  const updates = {};
    // updates['/users/' + newPostKey] = user
    //  update(ref(database), updates).then(()=>{
    //    const a=document.getElementById('container')
    //    setTimeout(() => {
    //      a.style.display="none";
    //      console.log("done")
    //    }, 4000);
    //  })
    //  })

    //! Handles the sliding of blue div
    const signUpButton = () => {
        const container = document.getElementById("container");
        container.classList.add(Styles["right-panel-active"]);
        console.log("sign up button clicked");
        console.log(sLogin);
    };
    const signInButton = () => {
        const container = document.getElementById("container");
        container.classList.remove(Styles["right-panel-active"]);
    };

    const divStyle = {
        color: "red",
        fontSize: "14px",
        textAlign: "left",
    };

    //! Handles the checks applied on create new account section

    const [studentMessage, setstudentMessage] = useState("");
    const [submitStudentName, setsubmitStudentName] = useState(false);
    const [submitStudentEmail, setsubmitStudentEmail] = useState(false);
    const [submitStudentPass, setsubmitStudentPass] = useState(false);

    const valueOfStudentName = (event) => {
        const val = event.target.value;
        setsubmitStudentName(val);
        const regex = /[^a-zA-Z\s]/;
        console.log(val);
        if (val.length > 0 && regex.test(val)) {
            setstudentMessage("* Only alphabets allowed");
            setsubmitStudentName(false);
        } else {
            setstudentMessage("");
            setsubmitStudentName(true);
        }
    };

    const valueOfStudentEmail = (event) => {
        const val = event.target.value;
        setsubmitStudentEmail(val);
        // const regex=/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
        const regex = /^[a-zA-Z]{3}20\d{2}\d{3}@iiitl\.ac\.in$/;
        console.log(val);
        if (val.length > 0 && !regex.test(val)) {
            setstudentMessage("* Please Enter throughyour College Mail Id");
            setsubmitStudentEmail(false);
        } else {
            setstudentMessage("");
            setsubmitStudentEmail(true);
        }
    };

    const valueOfStudentPassword = (event) => {
        const val = event.target.value;
        setsubmitStudentPass(val);
        const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{8,}$/;
        // console.log(val);
        if (val.length < 8) {
            setstudentMessage("* Password must be of at least 8 characters");
            setsubmitStudentPass(false);
        } else if (val.length > 20) {
            setstudentMessage("* Password must be of at most 20 characters");
            setsubmitStudentPass(false);
        } else {
            if (!regex.test(val)) {
                setstudentMessage("* Password must have 1 Capital & 1 special chars");
                setsubmitStudentPass(false);
            } else {
                setstudentMessage("");
                setsubmitStudentPass(true);
            }
        }
    };

    const [width, setWidth] = useState(window.innerWidth);

    //! Handles the display of which div is to be displayed at what time
    const [sLogin, setsLogin] = useState("true");
    const [Login, setLogin] = useState("true");

    //// JADOO CODE ( COPYRIGHT MJ )
    setInterval(() => {
        setWidth(window.innerWidth);
    }, 900);

    //! Handles the closing of login form
    const closeForm = () => {
        const close = document.getElementById("container");
        // setInterval(() => {
        //     close.style.display = "none";
        // }, 150);
        // window.close();
    };














  return (
      <motion.div
          initial={{ opacity: 0, x: "-1000px", y: "-1000px" }}
          animate={{ opacity: 1, x: "0", y: "-1000px" }}
          exit={{ opacity: 0, x: "1000px", y: "1000px" }}
          transition={{ duration: 0.5 }}
      >
    <div className={sty.bigDiv}>
          <div
              className={`${Styles['form-container']} ${sty['form-container']} ${Styles['sign-in-container']}`}
              style={
                  width < 850
                      ? { display: Login ? "block" : "none" }
                      : { display: Login ? "block" : "block" }
              }
          >
              <div className={`${Styles.Login_cross} ${sty.crossSign}`} onClick={closeForm}>
                  <Link to={'/login_signup'}>&times;</Link>
              </div>

              <form
                  className={`${Styles.Login_form_tag} ${Styles.Login_login} ${sty.form_log}`}
                  id="signinform"
                  onSubmit={(e) => {
                      loginner(e);
                  }}
              >
                  <h1 className={`${Styles.Login_h1} ${sty.Resetpass}`}>Reset Password</h1>
                  {/* <div className={Styles["social-container"]}>
                      <FacebookIcon
                          className={Styles.coloradd}
                          onClick={google_login}
                      />
                      <GoogleIcon
                          className={Styles.coloradd}
                          onClick={google_login}
                      />
                      <GitHubIcon
                          className={Styles.coloradd}
                          onClick={google_login}
                      />
                  </div> */}
                  {/* <span className={Styles.Login_span_tag}>or use your account</span> */}
                  <input
                      className={Styles.Login_input_tag}
                      type="text"
                      placeholder="User Name"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                  />
                  <input
                      className={Styles.Login_input_tag}
                      type="text"
                      placeholder="Favourite Animal"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                  />

                  <input
                      className={Styles.Login_input_tag}
                      type="password"
                      placeholder="Password"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                  />
                  <input
                      className={Styles.Login_input_tag}
                      type="password"
                      placeholder="Retype Password"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                  />
                
                  <button className={`${Styles.Login_btn_tag} ${Styles.MainButtons} ${sty.ResetBtn}`} type="submit" form="signinform">
                      Reset Password
                  </button>
                  <button
                      className={`${Styles.reverseGhost} ${Styles.Login_btn_tag} `}
                      id="signUpOnLogin"
                      onClick={(e) => {
                          setsLogin(!sLogin);
                          setLogin(!Login);
                          e.preventDefault();
                      }}
                  >
                      Sign Up
                  </button>
              </form>
              <Link to="/dashboard" id="autoclick" style={{ display: 'none' }}>click me</Link>
          </div>
    </div>
    </motion.div>
  )
}
