"use client";
import Link from "next/link";
// import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import {useState ,useEffect} from 'react';
import axios from "axios";
// import { toast } from "react-hot-toast";




 function SignupPage() {
    const router = useRouter();
    const [user, setUser] = useState({
        username: "",
        password: "",
       
    })
    const [buttonDisabled, setButtonDisabled] = useState(false);
    

    const onSignup = async () => {
        try {
           
            const response = await axios.post("/api/SignUp", user);
            console.log("Signup success", response.data);
            router.push("/Login");
            
        } catch (error) {
            console.log("Signup failed", error.message);
            
        }
    }

    useEffect(() => {
        if( user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);


    return (
    <div >
       
        <hr />
        <label htmlFor="username">username</label>
        <input 
       
            id="username"
            type="text"
            value={user.username}
            onChange={(e) => setUser({...user, username: e.target.value})}
            placeholder="username"
            />
       
        <label htmlFor="password">password</label>
        <input 
       
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"
            />
            <button
            onClick={onSignup}
           >SignUp</button>
            <Link href="/Login">Visit login page</Link>
        </div>
    )

}
export default SignupPage;