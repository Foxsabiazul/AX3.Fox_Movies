import "./Header.css"
import logo from "./Simple Black Beige Men Style Typography Fashion Logo.png"
import lupa from "./lupa.svg"
    
function Header(){
    return(
    <div className='header'>
        <img src={logo} className='lg'/>
        <li className='list1'>
          <p className='hb1'>Home</p>
          <p className='hb1'>Books</p>
          <p className='hb1'>Movies</p>
        </li>
        <div className='ps1'>
            <input className='ps1i' type="text" placeholder='                           oque buscas aqui?' />
            <button className='ps1b'><img className='ps1f' src={lupa}/></button>
        </div>
    </div>
    )
}

export default Header