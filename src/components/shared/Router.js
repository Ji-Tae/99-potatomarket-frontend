import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../../pages/Main';
import GoodsDetail from '../../pages/GoodsDetail';
import LoginSignup from '../../pages/LoginSignup';
import UsedGoods from '../../pages/UsedGoods';
import UserMyPage from '../../pages/UserMyPage';
import Upload from '../../pages/Upload';
import BestUsedGoods from '../../pages/BestUsedGoods';
import Header from '../layout/header/Header';
import Footer from '../layout/Footer';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/loginsignups' element={<LoginSignup />} />
        <Route path='/usedgoods' element={<UsedGoods />} />
        <Route path='/bestusedgoods' element={<BestUsedGoods />} />
        <Route path='/usermypages' element={<UserMyPage />} />
        <Route path='/uploads' element={<Upload />} />
        <Route path='/card/:post_id' element={<GoodsDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
