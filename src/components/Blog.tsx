import { useEffect } from "react";
import { setTtile } from "../Utils";
import './Blog.css';
import articles from '../blog-content/articles.json';
import { JSX } from "react/jsx-runtime";

const BREAK_AFTER = 4;


export const Blog = (): JSX.Element => {

    useEffect(() => {
        setTtile(document, "Blog - jozef.rocks!");
    });

    const renderArticle = (article: any, key: any) => {
        return (
            <article className="blogarticle" key={key} onClick={() => window.location.href =  `/blog/${article.slug}`}>
                <header>
                    <hgroup>
                        <h3>{article.title}</h3>
                        {article.subtitle}
                    </hgroup>
                </header>
                {article.summary}
                <footer>
                    <span>Published on: {article.date}</span>
                </footer>
            </article>
        );
    }

    const mapArticles = (): JSX.Element[][] => {
        const mainlist: JSX.Element[][] = [];
        let sublists: JSX.Element[] = [];
        let i = 0;
        articles.articles.forEach((article: any) => {
            sublists.push(renderArticle(article, i));
            i++;
            if (i % BREAK_AFTER === 0) {
                mainlist.push(sublists);
                sublists = [];
            }
        });
        if (sublists.length > 0) {
            while (sublists.length < BREAK_AFTER) {
                sublists.push(<article className="emptyblogarticle" key={i}></article>);
                i++;
            }
            mainlist.push(sublists);
        }
        return mainlist;
    }

    
    return (
        <main className='container'>
                {articles.articles.length === 0 && <h1>No articles found</h1>}
                {mapArticles().map((sublist: JSX.Element[], index: number) => {
                    return (
                        <div className="grid" key={index}>
                            {sublist.map((article: JSX.Element, _) => {
                                return (
                                    article
                                );
                            })}
                        </div>
                    );
                })}


                {/* {articles.articles.map((article, index: number) => {
                    let clsName = index%3===0 ? "grid" : "";
                    return(
                        <div className={clsName}> 
                        {renderArticle(article)}
                        </div>
                    );
                })} */}
                {/* <div className="grid">
                    <div>
            <article className="blogarticle" onClick={() => window.location.href = '/'}>
                <header>
                    <hgroup>
                        <h3>Lessons learned by creating my own portfolio site</h3>
                        How to use CSS to add glam to your Website?
                    </hgroup>
                </header>
                In this post I am going to demonstrate how to wirite a simple app.
            </article>
            </div>
            <article className="blogarticle">
                <header>AWS, Python, ML - a match made in heaven</header>
                <main>In this post I am going to demonstrate how to wirite a simple app.</main>
            </article>

            <article className="blogarticle">
                <header>Intro to Python 🐍</header>
                In this post I am going to demonstrate how to wirite a simple app.
            </article>
            <article className="blogarticle">
                <header>Apache Airflow - your best frient for large scale automation</header>
                In this post I am going to demonstrate how to wirite a simple app.
            </article>
</div> */}
        </main>
    );
}
