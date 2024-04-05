
import IMAGES from '../images/images'
import PaginatedItems from "../components/Gallery/Pagination";

import Image from "../components/CommonComponents/Image";
import ToHome from "../components/ButtonElements/ToHome";
import { useEffect, useState } from "react";


function Discuss({ articles }) {

    
    const filterBy = "РАЗБОР"
    const [articlesByDiscuss, setarticlesByDiscuss] = useState([]);

    const handleFilter = () => {
        const tempArticles = articles.filter(article => article.category.toString() === filterBy.toString());
        setarticlesByDiscuss(tempArticles);
    }
    useEffect(() => {
        handleFilter();
    }, [])

    


    return (
        <div className="contentWrapper">
            <ToHome />
            <h2>{filterBy}</h2>

            <PaginatedItems itemsPerPage={12} items={articlesByDiscuss} />
            <Image image={IMAGES.image3} />
        </div>
    );
}

export default Discuss;