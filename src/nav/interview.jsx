
import IMAGES from '../images/images'
import PaginatedItems from "../components/Gallery/Pagination";

import Image from "../components/CommonComponents/Image";
import ToHome from "../components/ButtonElements/ToHome";
import { useEffect, useState } from "react";


function Interview({ articles }) {

   
    const filterBy = "ИНТЕРВЬЮ"
    const [articlesByInterview, setarticlesByInterview] = useState([]);

    const handleFilter = () => {
        const tempArticles = articles.filter(article => article.category.toString() === filterBy.toString());
        setarticlesByInterview(tempArticles);
    }
    useEffect(() => {
        handleFilter();
    }, [])

    


    return (
        <div className="contentWrapper">
            <ToHome />
            <h2>{filterBy}</h2>

            <PaginatedItems itemsPerPage={12} items={articlesByInterview} />
            <Image image={IMAGES.image3} />
        </div>
    );
}

export default Interview;