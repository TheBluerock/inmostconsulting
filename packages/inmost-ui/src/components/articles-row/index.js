import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import ArticleCard from '../article-card';
import { useAppContext } from '@helpers/app-context';

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px; // Adjust as needed
`;


const ArticlesRow = ({ articles }) => {

    const [cardsPerRow, setCardsPerRow] = useState();

    const cards = {
      desktop: 3,
      tablet: 2,
      mobile: 1
    }
    
    const { isDevice } = useAppContext();
    const numRows = Math.ceil(articles.length / cardsPerRow);
    
    React.useEffect(() => {
      // Use the cards object directly based on the device
      console.log(cards[isDevice]);
    }, [isDevice]);
    
    // Initialize cardsPerRow based on the current device
    useEffect(() => {
      setCardsPerRow(cards[isDevice]);
    }, [isDevice]);


  return (
    <div>
      {Array.from({ length: numRows }).map((_, rowIdx) => (
        <Row key={rowIdx}>
          {articles.slice(rowIdx * cardsPerRow, (rowIdx + 1) * cardsPerRow).map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </Row>
      ))}
    </div>
  );
};

export default ArticlesRow;
