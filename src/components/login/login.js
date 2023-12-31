import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import 'font-awesome/css/font-awesome.min.css';
import {Link} from "react-router-dom";
import {toast, ToastContainer} from'react-toastify';
async function handleSignup(user){
    try{
        const response = await axios.post('https://movie-booking-system-gamma.vercel.app/api/login',user);
        console.log("Signup success",response.data)
        // router.push('/login')
        // NextResponse.redirect(new URL('https://creative-sorbet-96d1b6.netlify.app/'))
    }catch(error){
        console.log(error)
    }
}
async function handleLogin(user){
    try {
        toast.info('Authenticating...',{
            position: "top-center",
            autoClose: 500,
            pauseOnFocusLoss: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
        })
        const response = await axios.post('https://movie-booking-system-gamma.vercel.app/api/login', user);
        console.log(response)
        toast.success(`Welcome back ${user.username}!`,{
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            pauseOnFocusLoss: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
        })
        // router.push(`/profile`)
        // NextResponse.redirect(new URL('https://creative-sorbet-96d1b6.netlify.app/'))
    } catch (error) {
        console.log("login authentication error: " + error)
    }
}
function Login(user) {
    const [mode, toggleMode] = useState(true);    
    return (
        <Container>
            <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    limit={2}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
            <Content>
                <header>
                    <h1>{mode ? 'Welcome back!' : 'Hey There!'}</h1>
                    <Switch>
                        <span>{mode ? 'Don\'t' : 'Already'} have an account?</span>
                        <input type="checkbox" id="checkbox1" onClick={() => toggleMode(!mode)} />
                        <label for="checkbox1"></label>
                    </Switch>
                </header>
                <LoginForm mode={mode} />
            </Content>
        </Container>
    )      
}

export default Login

function LoginForm({mode}) {
    const [user,setUser] = useState({
        username: "",
        password: "",
        email: "",
    })
    const handleLoginCallback = (callback)=>{
        handleLogin(user)
    } 
    const handleSignupCallback = (callback)=>{
        handleSignup(user)
    }
    return (
        <Form>
            <div>
                <div>
                    <InputIcon style={{display: !mode ? "none": ""}}>
                        <i className="fa fa-user" />
                        <Input type="email" id="email" label="email" placeholder="Email Address" disabled={!mode} value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })} />
                    </InputIcon>
                    <InputIcon style={{display: !mode ? "none": ""}}>
                        <i className="fa fa-key" />
                        <Input type="password" id="password" label="password" placeholder="Password" disabled={!mode} value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })} />
                    </InputIcon>
                </div>
                <div>
                    <InputIcon style={{display: mode ? "none": ""}}>
                        <i className="fa fa-user" />
                        <Input type="text" id="fullname" label="full name" placeholder="Your Name" disabled={mode} />
                    </InputIcon>
                    <InputIcon style={{display: mode ? "none": ""}}>
                        <i className="fa fa-at" />
                        <Input type="email" id="email" label="email" placeholder="Email Address" disabled={mode} value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}/>
                    </InputIcon>
                    <InputIcon style={{display: mode ? "none": ""}}>
                        <i className="fa fa-key" />
                        <Input type="password" id="createpassword" label="password" placeholder="Password" disabled={mode} value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}/>
                    </InputIcon>
                </div>
            </div>
            <Link to="/">
                <Button onClick={mode? handleLoginCallback : handleSignupCallback}>{mode ? 'Log In' : 'Sign Up'}</Button>
            </Link>
        </Form>
    )

}

const Container = styled.div`
    position: relative;
    height: calc(100vh - 140px);
    display:flex;
    align-items: center;
    justify-content: center;

    &:before {
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("/images/login-bg.jpg");
        position: absolute;
        content: "";
        top:0;
        bottom:0;
        left:0;
        right:0;
        z-index:-1;
    }
`

const Content = styled.div`
    max-width: 650px;
    padding: 50px 40px;
    width: 80%;
    display: flex;
    flex-direction: column;
    background: rgba(0,0,0,0.8);
    border-radius: 10px;
    overflow: hidden;

    @media (max-width: 900px) {
        width: 90%;
    }
`

const InputIcon = styled.div`
    i {
        position:absolute;
        padding: 15px 10px;
        text-align: center;
        color: rgb(249,249,249,0.8);
    }
`

const Input = styled.input`
    width: 100%;
    color: white;
    margin-bottom: 15px;
    font-size: 16px;
    padding: 15px 0;
    padding-right: 15px;
    padding-left: 45px;
    background: #333;
    border: 1px solid rgba(255,255,255,.1);
    border-radius: $borderRadius;
    &:focus {
        color: white;
        outline: white;
        border: 1px solid #fff;
    }
`

const Button = styled.button`
    width: 100%;
    color: #f9f9f9;
    background-color: #1f80e0;
    font-weight: bold;
    padding: 17px 0;
    border: none;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    // letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover {
        background: #0483ee;
    }
`

const Switch = styled.div`
    position: relative;

    label {
        cursor: pointer;
        position: absolute;
        background-color: white;
        border-radius: 50px;
        width :55px;
        height: 23px;
        top: 0;
        right: 0;
    }

    label:after {
        content : '';
        width : 21px;
        height: 21px;
        border-radius: 50px;
        position: absolute;
        background-color: #1f80e0;
        transition: all 0.2s;
        top :1px;
        left: 1px;
    }	

    input[type="checkbox"] {
        visibility: hidden;
    }

    input[type="checkbox"]:checked + label {
        background-color: white;
    }

    input[type="checkbox"]:checked + label:after {
        left: 33px;
    }
`

const Form  = styled.form`
    margin-top: 30px;
`