import { useLoaderData } from "react-router-dom";

export const Article = () => {
    
    const article: any = useLoaderData();

    return (
        <div className="container">
            <h1>Article</h1>
            <h2>{article.title}</h2>
        </div>
    );
}
