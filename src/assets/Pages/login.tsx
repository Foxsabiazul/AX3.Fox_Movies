import "./loogin.css"
import myButton from "../components/myButton";
import myInput from "../components/myButton.css";
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Loogin() {

    const [user, setUser]= useState("");
    const [password, setPassword]= useState("");
    const [loginFail, setLoginFail]= useState(false);

    const navigate= useNavigate();

    const handleUserOnChange= (e: ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value)
    }

    const handlePasswordOnChange= (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const handleOnClick= () =>{
        if(user === "admin" && password === "1234"){
            navigate("/home");
        }else{
            setLoginFail(true);
            setUser('');
            alert("Usuário ou senha incorreto!");
            setPassword('');
            setLoginFail(false);
        }
    }


    return(
    <div className="acces">
        <div className='lil code'>
        <h2 className="still">Faça seu Login para Acessar ao Site</h2>
        <myInput type='text' placeholder='Faça seu Login' bgcolor='white' onChange={handleUserOnChange} value={loginFail? "..." : user}/>

        <myInput type='password' placeholder='Coloque sua senha' bgcolor='white' onChange={handlePasswordOnChange} value={loginFail? "..." : password}/>
        </div>
        <MyButton onClick={handleOnClick}>OK</MyButton>

    </div>
    )
}

export default Loogin