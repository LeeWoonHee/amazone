import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import './Login.css';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';



function Login() {
    const [email, setEmail] =useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();

    const signIn=e=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(auth =>{
            navigate('/')
        })
        .catch(error =>alert(error.message()))
    }
    const register=e=>{
        e.preventDefault();

        createUserWithEmailAndPassword(auth,email,password)
        .then((auth)=>{
            if(auth){
                navigate('/')
            }
        })
        .catch(error =>alert(error.message()))
    }
    return (
        <div className="login">
            <Link to="/">
            <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2880px-Amazon_logo.svg.png" alt=""/>
            </Link>
            <div className="login_container">
                <form>
                    <h5>이메일</h5>
                    <input value={email} onChange={e=> setEmail(e.target.value)} type="text"/>
                    <h5>비밀번호</h5>
                    <input value={password} onChange={e=> setPassword(e.target.value)} type="password"/>

                    <button onClick={signIn} className="login_signInButton">로그인 하기</button>
                </form>
                <div class="formCheck">
                <p>이용 약관 동의 하십니까?</p><input type="checkbox"/>
                </div>
                <button onClick={register} className="login_registerButton">회원가입</button>
            </div>
        </div>
    );
}

export default Login;