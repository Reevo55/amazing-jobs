import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './index.css'
import Root from './routes/Root'
import Compare from './routes/Compare'
import Jobs from './routes/Jobs'
import Register from './routes/Register'
import Login from './routes/Login'
import OfferDetails from './routes/OfferDetails'
import NewOffer from './routes/NewOffer'

const BASE_PATH = '/'
const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={BASE_PATH} element={<Root />} />
      <Route path={'/jobs'} element={<Jobs />} />
      <Route path={'/compare'} element={<Compare />} />
      <Route path={'/register'} element={<Register />} />
      <Route path={'/login'} element={<Login />} />
      <Route path={'/new-offer'} element={<NewOffer />} />
      <Route path={'/offer-detail'} element={<OfferDetails />} />
    </Routes>
  )
}

export default AppRoutes
export { BASE_PATH }
