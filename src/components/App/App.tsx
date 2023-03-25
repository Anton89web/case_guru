import React, {FC} from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import {Header} from "../Header/Header";
import HomePage from "../../pages/HomePage";
import DetailProduct from "../../pages/DetailPage";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const App: FC = (): JSX.Element => {
  return (
    <>
      <Header/>
            <Routes>
                <Route path={''} element={
                   <ErrorBoundary children={<HomePage/>}/>
                }/>
                <Route path={'book/:id'} element={
                    <ErrorBoundary children={<DetailProduct/>}/>
                }/>
            </Routes>
    </>
  );
}

export default App
