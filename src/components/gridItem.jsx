const GridItem = ( {image} ) => {
    
    return (
        
      <div className="grid-item">
        <img src = {image}/>
        <div>
          <div className="textWrapper">ТРЕНДЫ</div>
          <div className="textWrapper">РАЗБОР</div>
        </div>
        <br/>
        <div className="grid-item-text">
          Инноватор и контрол-фрик. За что критикуют Джеффа Безоса и чем он все-таки хорош        
        </div>
      </div>
    );
  };
  
  export default GridItem;
  