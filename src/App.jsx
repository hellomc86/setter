import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Line from "./components/line";
import SubHeader from "./components/subHeader";

import "./App.css";
import ArticlePre from "./components/ArticlePre";
import ImagePre from "./components/ArticleImage";
import imagesArray from "../public/imagesg/images2";
import IMAGES from './images/images'
import Gallery from "./components/Gallery";



function App() {
    
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
          
          <Gallery images={imagesArray}/>
          
        </div>
      </div>
    </>
  );
}

export default App;
