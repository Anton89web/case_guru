import React, {FC} from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import {Header} from "../Header/Header";
import HomePage from "../../pages/HomePage";
import DetailProduct from "../../pages/DetailPage";

function Page404() {
    return null;
}

const App: FC = (): JSX.Element => {
  return (
    <>
      <Header/>
        <Routes>
            <Route path={''} element={<HomePage/>}/>
            <Route path={'book'} element={<DetailProduct/>}/>
            <Route path={'404'} element={<Page404/>}/>
        </Routes>
    </>
  );
}

export default App
