
import IMAGES from '../images/images'
import PaginatedItems from "../components/Gallery/Pagination";

import Image from "../components/CommonComponents/Image";
import ToHome from "../components/ButtonElements/ToHome";
import { useEffect, useState } from "react";


function Tech({ articles }) {

    const filterBy = "ТЕХНО"
    const [articlesByTech, setarticlesByTech] = useState([]);

    const handleFilter = () => {
        const tempArticles = articles.filter(article => article.category.toString() === filterBy.toString());
        setarticlesByTech(tempArticles);
    }

    useEffect(() => {
        handleFilter();
    }, [])

    console.log(articlesByTech);


    return (
        <div className="contentWrapper">
            <ToHome />
            <h2>{filterBy}</h2>

            <PaginatedItems itemsPerPage={12} items={articlesByTech} />
            <Image image={IMAGES.image3} />
        </div>
    );
}

export default Tech;