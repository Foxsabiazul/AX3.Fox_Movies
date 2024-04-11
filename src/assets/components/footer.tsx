import "./Footer.css"
import insta from "./insta.svg";
import face from "./face.svg";
import git from "./git.svg";


function Footer(){
    return(
        <div className='footer'>
            <div className="ftr1">
        <h3 className='ftr2'>Nossa redes Sociais</h3>
        <li className='vox'>
        <a className='cat' href="https://www.facebook.com/?locale=pt_BR"><img className='rad2' src={face}/> Facebook</a>
        <a className='cat' href="https://www.facebook.com/?locale=pt_BR"><img className='rad2' src={insta}/> instagram</a>
        <a className='cat' href="https://www.facebook.com/?locale=pt_BR"><img className='rad2' src={git}/> GitHub</a>
        </li>
        </div>
        <div className='CPF'>
        <p className='CHV'>COPYRIGHT © 2024 - ALL RIGHTS RESERVED BY </p><p className='EQR'>FOX PLAY</p>
        </div>
        </div>
    )
}

export default Footer