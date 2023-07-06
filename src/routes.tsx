import { Routes, Route, Navigate } from 'react-router-dom';
import { RegisterUser } from './pages/register-user';
import  Listing  from './pages/listing-products';
import { UserAccess } from './pages/user-access';
import  AdRegistration  from './pages/ad-registration';
import  Adview  from './pages/adview';
import  Home  from './pages/home';

export default function AppRoutes() {
  return (
    <Routes>
      
      <Route path='/cadastro/registeruser' element={<RegisterUser />} />
      <Route path='/lista/listing-products' element={<Listing/>} />
      <Route path='/usuario/user-access' element={<UserAccess/>} />
      <Route path='/anuncio-registro/ad-registration' element={<AdRegistration/>} />
      <Route path='/anuncio/adview' element={<Adview/>} />
      <Route path='/home' element={<Home/>} />
      {/* <Route path='/detalhes/:id' element={<Details />} /> */}
      <Route path='*' element={<Navigate to='/home' />} />
      
    </Routes>
  );
}