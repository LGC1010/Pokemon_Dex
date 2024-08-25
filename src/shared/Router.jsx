import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Dex from '../pages/Dex'
import Detail from '../component/Detail'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/Dex/:id" element={<Detail/>}/>
            <Route path="/Dex" element={<Dex/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router
