import React, { useContext } from 'react';
import ArticlesContext from '../contexts/articleContext';

const Articles = () => {
    const [articles, setArticles] = useContext(ArticlesContext);    
    return (
        <div>
            {articles.map((data: any) => {
                return (
                    <div>
                        {data.content}
                    </div>
                )
            })}
        </div>
    )
}
export default Articles;
