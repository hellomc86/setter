const GridItem = ( {image, imageTitle} ) => {
    
    return (
        
      <div className="grid-item">
        <img src = {image}/>
        <h3>{imageTitle}
        
        </h3>
      </div>
    );
  };
  
  export default GridItem;
  