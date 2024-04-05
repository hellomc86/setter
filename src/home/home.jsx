
import SubHeader from "../components/Article/subHeader";

import "./../App.css";
import ArticlePre from "../components/Article/ArticlePre";

import imagesArray from "./../../public/imagesg/images2";
import IMAGES from './../images/images'
import PaginatedItems from "../components/Gallery/Pagination";

import Image from "../components/CommonComponents/Image";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";



function Home ( { articles } ) {

  const randomArticle = Math.floor(Math.random()*articles.length); 
  
    return (
        <div className="contentWrapper">
          <SubHeader category = {articles[randomArticle].category} format = {articles[randomArticle].format} />
          <Link to = {`/article/${articles[randomArticle]._id}`} style={{ textDecoration: 'none', color: 'black' }}><ArticlePre anArticle = {articles[randomArticle]} />
          <Image image = {articles[randomArticle].image}/>          
          </Link>
          <PaginatedItems itemsPerPage= {12} items={articles}/>
          <Image image = {IMAGES.image3}/>
        </div>
    );
}

export default Home;