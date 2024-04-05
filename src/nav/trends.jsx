
import IMAGES from '../images/images'
import PaginatedItems from "../components/Gallery/Pagination";

import Image from "../components/CommonComponents/Image";
import ToHome from "../components/ButtonElements/ToHome";
import { useEffect, useState } from "react";


function Trends({ articles }) {

    const filterBy = "ТРЕНДЫ"
    const [articlesByTrends, setarticlesByTrends] = useState([]);

    const handleFilter = () => {
        const tempArticles = articles.filter(article => article.category.toString() === filterBy.toString());
        setarticlesByTrends(tempArticles);
    }

    useEffect(() => {
        handleFilter();
    }, [])

    console.log(articlesByTrends);


    return (
        <div className="contentWrapper">
            <ToHome />
            <h2>{filterBy}</h2>

            <PaginatedItems itemsPerPage={12} items={articlesByTrends} />
            <Image image={IMAGES.image3} />
        </div>
    );
}

export default Trends;