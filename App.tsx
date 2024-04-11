import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import MainPage from './src/assets/Pages/mainPage';
import Loogin from './src/assets/Pages/login';


function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Loogin/>}/>
      <Route path='/home' element={<MainPage/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
