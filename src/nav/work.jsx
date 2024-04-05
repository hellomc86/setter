
import IMAGES from '../images/images'
import PaginatedItems from "../components/Gallery/Pagination";

import Image from "../components/CommonComponents/Image";
import ToHome from "../components/ButtonElements/ToHome";
import { useEffect, useState } from "react";


function Work({ articles }) {

    const filterBy = "ДЕЛО"
    
    const [articlesByWork, setarticlesByWork] = useState([]);

    const handleFilter = () => {
        const tempArticles = articles.filter(article => article.category.toString() === filterBy.toString());
        setarticlesByWork(tempArticles);
    }


    useEffect(() => {
        handleFilter();
    }, [])

    console.log(articlesByWork);


    return (
        <div className="contentWrapper">
            <ToHome />
            <h2>{filterBy}</h2>

            <PaginatedItems itemsPerPage={12} items={articlesByWork} />
            <Image image={IMAGES.image3} />
        </div>
    );
}

export default Work;