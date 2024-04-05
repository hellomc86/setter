
import IMAGES from '../images/images'
import PaginatedItems from "../components/Gallery/Pagination";

import Image from "../components/CommonComponents/Image";
import ToHome from "../components/ButtonElements/ToHome";
import { useEffect, useState } from "react";


function ArticlesByCategory({ articles, filterBy }) {

    //const [articlesByCat, setarticlesByCat] = useState([]);

    var articlesByCat = [];

    const handleFilter = () => {
        articlesByCat = articles.filter(article => article.category.toString() === filterBy.toString());
        //setarticlesByCat(tempArticles);
    }

    useEffect(() => {
        handleFilter();
    }, [])

    console.log(articlesByCat);


    return (
        <div className="contentWrapper">
            <ToHome />
            <h2>{filterBy}</h2>

            <PaginatedItems itemsPerPage={12} items={articlesByCat} />
            <Image image={IMAGES.image3} />
        </div>
    );
}

export default ArticlesByCategory;