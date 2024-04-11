import "./mainPage.css";
import Footer from '../components/footer';
import Header from '../components/header';
import Recomends from '../components/recomends';
import Sobre from '../components/over';


function MainPage(){
  return(
    <div className='container'>
    <Header/>
    <Recomends/>
    <Sobre/>
    <Footer/>
    </div>
  )
}

export default MainPage