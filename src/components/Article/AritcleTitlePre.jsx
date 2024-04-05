const ArticleTitle = ( { anArticle }  ) => {

  console.log(" ArticleTitle 3 ",  anArticle);


  return (
    
      <div className="articleTitle">
        <span className="articleTitletextItalic">
          {anArticle && anArticle.titleOne} </span> 
        <span className="articleTitletextBold">
        {anArticle && anArticle.titleTwo}
        </span>
      </div>
    
  );
};

export default ArticleTitle;
