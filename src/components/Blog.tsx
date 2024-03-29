import { useEffect } from "react";
import { setTtile } from "../Utils";
import './Blog.css';

const Blog = (): JSX.Element => {

    useEffect(() => {
        setTtile(document, "Blog - jozef.rocks!");
    });

    return (
        <main className='container'>
            <div className="grid">
            <article className="blogarticle" onClick={() => window.location.href = '/'}>
                <header>
                    <hgroup>
                        <h3>Lessons learned by creating my own portfolio site</h3>
                        How to use CSS to add glam to your Website?
                    </hgroup>
                </header>
                In this post I am going to demonstrate how to wirite a simple app.
            </article>
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
            </div>
        </main>
    );
}

export default Blog;