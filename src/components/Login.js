import {React, useState,useEffect} from 'react';
import {Link,useNavigate} from 'react-router-dom';

export default function Login() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const sendRequest = () => {
        fetch("api/v1/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
            .then((res) => res.json())
            .then((result) => {
                localStorage.setItem("tokenKey", result.token);
                localStorage.setItem("currentUser", result.userId);
                localStorage.setItem("userFirstName", result.firstName);
            }).catch((err) => console.log(err))
    }


    const handleRegister = () => {
        sendRequest()
        setEmail("")
        setPassword("")
        navigate("/")
    }

  return (
    <div className='login-container'>
        <div className='login-item'></div>
        <div className='login-item'></div>
    </div>
  )
}
