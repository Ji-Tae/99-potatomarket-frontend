import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../../pages/main';
import GoodsDetail from '../../pages/GoodsDetail';
import LoginSignup from '../../pages/LoginSignup';
import UsedGoods from '../../pages/UsedGoods';
import UserMyPage from '../../pages/UserMyPage';
import Upload from '../../pages/Upload';
import BestUsedGoods from '../../pages/BestUsedGoods';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/loginsignops' element={<LoginSignup />} />
        <Route path='/usedgoods' element={<UsedGoods />} />
        <Route path='/bestusedgoods' element={<BestUsedGoods />} />
        <Route path='/usermypages' element={<UserMyPage />} />
        <Route path='/uploads' element={<Upload />} />
        <Route path='/goodsdetails' element={<GoodsDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
