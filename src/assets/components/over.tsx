import "./sobre.css"
import film from "./687837.jpg";

function Sobre(){
    return(
    <div className='sobre'>
        <div>
        <div className='stt1'>
            <h2 className='st1s'>Fox</h2>
            <h3 className='st1n'>Play</h3>
        </div>
        </div>
        <div>
            <img className='stf2' src={film}/>
            <p className='stc'>Um site desenvolvido para filmes de muitas recomdendações</p>
        </div>
    </div>
    )
}

export default Sobre