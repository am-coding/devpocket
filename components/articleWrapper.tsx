import ArticleContext from '../contexts/articleContext';
import { useState, useEffect } from 'react';
import firebase from '../firebase';

export const ArticleProvider = ({children}) => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const fetchData =  () => {
          const db = firebase.firestore()
          const data = db.collection("headlines").doc('coding')
          data.get().then(doc => {
           console.log(doc.data().articles);
           setArticles(doc.data().articles);
          })
        }
        fetchData();
    }, [])
    return (
        <ArticleContext.Provider value={[articles, setArticles]}>
            {children} 
        </ArticleContext.Provider>
    )
}
