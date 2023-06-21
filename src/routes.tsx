import { Routes, Route, Navigate } from 'react-router-dom';
import { RegisterUser } from './pages/register-user';
import { List } from './pages/list-products';

export default function AppRoutes() {
  return (
    <Routes>
      
      <Route path='/cadastro/registeruser' element={<RegisterUser />} />
      <Route path='/home' element={<List/>} />
      {/* <Route path='/detalhes/:id' element={<Details />} /> */}
      <Route path='*' element={<Navigate to='/home' />} />
      
    </Routes>
  );
}