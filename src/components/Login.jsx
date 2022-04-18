import React, {useState} from "react";
import axios from "axios";
import { setUserSession } from "../Common";
import { useFormInput } from 'use-form-input';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import PasswordRoundedIcon from '@mui/icons-material/PasswordRounded';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import "../Login.css";

function Login(props){

    const [userInfo, {onChange, onSubmit}] = useFormInput({
        username: "",
        password: ""
    })
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleLogin = () =>{
        setError(null);
        setLoading(true)
        axios.post("http://localhost:3000/login", {user: userInfo.username, pass: userInfo.password}).then(response => {
            setLoading(false);
            setUserSession(response.data.token, response.data.user);
            props.history.push("/");
        }).catch(error => {
            setLoading(false);
            if(error.response.status === 401){
                setError(error.response.data.message);
            }
            else{
                setError("Something went wrong.")
            }
        })
    }

    const validateForm = () => {
        return userInfo.username.length > 0 && userInfo.password.length > 0;
    }

    return(
        <div className="Main">
                <form className="form-info" onSubmit={(e) => onSubmit(e.preventDefault())}>
                    <h1>Login</h1>
                    <div>
                    <TextField type="text" name = "username" onChange={onChange} value = {userInfo.username} placeholder="Username" InputProps = {{startAdornment:(
                        <InputAdornment position = "start">
                            <AccountBoxOutlinedIcon></AccountBoxOutlinedIcon>
                        </InputAdornment>
                    )}}></TextField>
                    </div>
                    <div>
                    <TextField type="password" name = "password" onChange={onChange} value = {userInfo.password} placeholder="Password" InputProps = {{startAdornment: (
                        <InputAdornment position = "start">
                            <PasswordRoundedIcon></PasswordRoundedIcon>
                        </InputAdornment>
                    )}}></TextField>
                    </div>
                    <div>
                        <button type="submit" disabled = {!validateForm} onClick={handleLogin} value = {loading ? "...Loading" : "login"}>Sign In</button> 
                    </div>
                </form>
        </div>
    )
}

export default Login;

