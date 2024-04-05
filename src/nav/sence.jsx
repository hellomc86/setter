
import IMAGES from '../images/images'
import PaginatedItems from "../components/Gallery/Pagination";

import Image from "../components/CommonComponents/Image";
import ToHome from "../components/ButtonElements/ToHome";
import { useEffect, useState } from "react";


function Sence({ articles }) {

    const filterBy = "СМЫСЛЫ"
    const [articlesBySence, setarticlesBySence] = useState([]);

    const handleFilter = () => {
        const tempArticles = articles.filter(article => article.category.toString() === filterBy.toString());
        setarticlesBySence(tempArticles);
    }
    useEffect(() => {
        handleFilter();
    }, [])

    console.log(articlesBySence);


    return (
        <div className="contentWrapper">
            <ToHome />
            <h2>{filterBy}</h2>

            <PaginatedItems itemsPerPage={12} items={articlesBySence} />
            <Image image={IMAGES.image3} />
        </div>
    );
}

export default Sence;