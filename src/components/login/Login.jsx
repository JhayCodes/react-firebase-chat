import { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { userAuth } from "../lib/firebase";
import { doc, setDoc } from "firebase/firestore"; 



const Login = () => {
    const [avatar, setAvatar] = useState({
        file: null,
        url: ""
    });

    const handleAvatar = e => {
        if (e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }

    }

    const handleLogin = e => {
        e.preventDefault() //prevents refresh of page
        toast.success("hello")
    }

    //async because is a database request
    const handleRegister = async (e) => {
        e.preventDefault() //prevents refresh of page
        const formData = new FormData(e.target);

        //get parameters from formData
        const {username, email, password} = Object.fromEntries(formData);
           
        try{
            const res = await createUserWithEmailAndPassword(userAuth ,email, password)

            await setDoc(doc(db, "users", res.user.uid ), {
               username,
               email,
               id: res.user.uid,
               blocked: [],
              });

              await setDoc(doc(db, "userchats", res.user.uid ), {
               chats:[],
               });

               toast.success("Account created! You can now login!");
        }catch(err){

            console.log(err)
            toast.error(err.message)
        }
    };

    return <div className="login">
        <div className="item">
            <h2>Welcome back,</h2>
            <form onSubmit={handleLogin}>
                <input type="text" name="email" placeholder="Email" id="email" />
                <input type="password" name="password" placeholder="Password" id="password" />
                <button>Sign In</button>
            </form>
        </div>

        <div className="separator"></div>

        <div className="item">
            <h2>Create an Account</h2>
            <form onSubmit={handleRegister}>
                <label htmlFor="file">
                    <img src={avatar.url || "/avatar.png"} alt="" />Upload an image</label>
                <input type="file" id="file" style={{ display: "none" }} onChange={handleAvatar} />
                <input type="text" name="username" placeholder="Username"  />
                <input type="text" name="email" placeholder="Email"  />
                <input type="password" name="password" placeholder="Password" />
                <button>Sign Up</button>
            </form>
        </div>
    </div>
}

export default Login;