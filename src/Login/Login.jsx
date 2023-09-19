import "./Login.css";
import Logo from "../assets/Logo.png";
import { useState } from "react";
import warning from "../assets/warning.png";
import {auth} from "../Firebase";
import {FcGoogle} from "react-icons/fc";
import {BsGithub,
        BsFacebook
    } from "react-icons/bs";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { GoogleAuthProvider} from "firebase/auth";
import {signInWithPopup} from "firebase/auth";

import { GithubAuthProvider } from "firebase/auth";

import { FacebookAuthProvider } from "firebase/auth";

const Login = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [username, setusername] = useState("");
    const [NewUser, setNewUser] = useState(false);
    const [error, seterror] = useState(false);
    const [ErrorMsg, setErrorMsg] = useState(false);
    

    
    const google = async () => {
        signInWithPopup(auth, new GoogleAuthProvider())
        .then(() =>{
        })
        .catch((error) => {
            seterror(true)
            const errorMessage = error.message;
            setErrorMsg(errorMessage);
        })
    };
    const github = async () => {
        signInWithPopup(auth, new GithubAuthProvider())
        .then(() =>{
        })
        .catch((error) => {
            seterror(true)
            const errorMessage = error.message;
            setErrorMsg(errorMessage);
        })

    };
    const facebook = async () => {
        signInWithPopup(auth, new FacebookAuthProvider())
        .then(() =>{
        })
        .catch((error) => {
            seterror(true)
            const errorMessage = error.message;
            setErrorMsg(errorMessage);
        })
    }

    const submit = (e) => {
        e.preventDefault();
        seterror(false);

        if(NewUser){
            //Create New User
            createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                localStorage.setItem("username", username)
            })
            .catch((error) => {
                seterror(true)
                const errorMessage = error.message;
                setErrorMsg(errorMessage);
            });
        }else{

            // sign in User
            signInWithEmailAndPassword(auth, email, password)
            .then(() =>{
            })
            .catch((error) => {
                seterror(true)
                const errorMessage = error.message;
                setErrorMsg(errorMessage);
            })
        }
    };



  return (
    <div className="login-page">
        <header>
            <span>from <i>Pratul Makar</i>
            </span>
        </header>

        <img  className="logo" src={Logo} alt="" />

        <h2 className="title">
            React Admin <br />
            Dashboard
        </h2>

        <form onSubmit={submit}>
            {NewUser && (
                      <div className="username">
                      <input onChange={(e) => setusername(e.target.value)} type="username" 
                      id="username" 
                      required />
                      <label htmlFor="username">Username</label>
                  </div>      
            )}


            <div className="email">
                <input onChange={(e) => setemail(e.target.value)} type="email" 
                id="email" 
                required />
                <label htmlFor="email">E-mail</label>
            </div>

            <div className="password">
                <input onChange={(e) => setpassword(e.target.value)} type="password" id="password" 
                required />
                <label htmlFor="password">password</label>
            </div>

        {error && 
                <img src={warning} alt="" className="status" />
        }
        

        {error && <span className="error">Failed</span>
        }
        {error && <span className="error">{ErrorMsg}</span>
        }
        <button className="submit">{NewUser ? "Sign Up" : "Log In"}</button>
        <span className="user-start1">continue With <FcGoogle size={20} className="icons" onClick={google} />
        <BsGithub size={20} className="icons" onClick={github} />
        <BsFacebook size={20} className="icons-f"  onClick={facebook} />
         </span>

        {NewUser ? ( <span className="user-start">
            Already have an account? <b onClick={() => {
                setNewUser(false)
                seterror(false)
            }}>
            Log In</b>
        </span> ) :  ( <span className="user-start">
            Don't have an account? <b onClick={() => {
                setNewUser(true)
                seterror(false)
            }}>
            Sign Up</b>
        </span>
        )}



        </form>
    </div>
  );
};

export default Login;