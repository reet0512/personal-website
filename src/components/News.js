import { useState, useEffect } from "react";
import axios from "axios";
import "./styles/news.css"

export default function Experience() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
          try {
            const apiKey = "d22255551cb6f4666895e448fc6851e2";
            const url = `https://gnews.io/api/v4/top-headlines?category=technology&country=us&max=6&apikey=${apiKey}`;
            const response = await axios.get(url);
            setArticles(response.data.articles.slice(0, 6));
          } catch (error) {
            console.error('Error:', error);
          }
        };
        fetchArticles();
      }, []);
    return (
        <section id="news-section">
            <h2>Interesting Tech News</h2>
            <div id="news">
                {articles.map((article, index) => (
                    <div key={index} className="news-block">
                        {article.image ? <img src={article.image} alt="Article Image"/> : <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png" alt="No Image available"/>}
                        <h3><a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a></h3>
                    </div>
                ))}
            </div>
        </section>
    )
}