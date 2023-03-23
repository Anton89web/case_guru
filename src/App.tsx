import React, {FC} from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import {Header} from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import DetailProduct from "./pages/DetailPage";

const App: FC = ()=> {
  return (
    <>
      <Header/>
        <Routes>
            <Route path={''} element={<HomePage/>}/>
            <Route path={'book'} element={<DetailProduct/>}/>
        </Routes>
    </>
  );
}

export default App
