import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Line from "./components/line";
import SubHeader from "./components/subHeader";

import "./App.css";
import ArticlePre from "./components/ArticlePre";
import ImagePre from "./components/ArticleImage";
//import imagesArray from "../public/imagesg/images2";
import IMAGES from './images/images'
import Gallery from "./components/Gallery";



function App() {
  
  const imagesArray = [
    '../public/imagesg/1.png',  
   '../public/imagesg/1.png',   
 ];
  return (
    <>
      <div className="App">
        <Header />
        <Nav />
        <Line />
        <div className="contentWrapper">
          <SubHeader />
          <ArticlePre />
          <ImagePre image = {IMAGES.image2}/>
          <h1>My Gallery App</h1>
          <Gallery images={imagesArray}/>
          <h1>My Gallery App</h1>
        </div>
      </div>
    </>
  );
}

export default App;
