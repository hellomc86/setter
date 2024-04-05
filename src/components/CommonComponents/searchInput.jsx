import { useState, useEffect, useRef } from "react";
import { MdOutlineClose } from "react-icons/md";


const SearchInput = ({ isExpanded, setIsExpanded, isClicked, setIsClicked }) => {

    const [search, setSearch] = useState("");

    const ref = useRef();

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (isClicked) { setIsClicked(false) }
            else if (isExpanded && ref.current && !ref.current.contains(e.target)) {
                setIsExpanded(false);
            }
        };
        document.addEventListener("click", checkIfClickedOutside);
        return () => {
            document.removeEventListener("click", checkIfClickedOutside);
        };
    }, [isExpanded, isClicked]);

    const handleChange = (event) => {
        setSearch(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle search logic here
        console.log(`Searching for ${search}...`);
    }

    //  type="search"
    return (
        <>
            {isExpanded && <div className="search-block" ref={ref} /* style={{ display: `${isExpanded ? "block" : "none"}`, opacity: 1 }} */>
                <form onSubmit={handleSubmit}>
                    <input type="text" className="search-input" autoFocus={true} onChange={handleChange} maxLength="256" name="query" placeholder="Поиск" id="search" required="" />
                    <button type="submit" onSubmit={(e) => setSearch(e.target.value)} className="search-btn w-button" value="Search" />
                    <MdOutlineClose className="search-close-icon" onClick={() => { setIsExpanded(false) }} />
                </form>
            </div>}
        </>
    );
};

export default SearchInput;



