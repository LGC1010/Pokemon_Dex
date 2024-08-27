import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Dex from '../pages/Dex'
import Detail from '../component/Detail'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/Dex" element={<Dex/>}/>
            <Route path="/pokemon-detail" element={<Detail/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router
