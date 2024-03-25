import { useEffect } from "react";
import { setTtile } from "../Utils";

const Blog = (): JSX.Element => {

    useEffect(() => {
        setTtile(document, "Blog - jozef.rocks!");
    });

    return (
        <main className='container'>
            <div className="grid">
            <article>
                <header>
                    <hgroup>
                        <h3>Lessons learned by creating my own portfolio site</h3>
                        <p>How to use CSS to add glam to your Website?</p>
                    </hgroup>
                </header>
                In this post I am going to demonstrate how to wirite a simple app.
                <footer style={{ textAlign: 'right',  }}><span >read more...</span></footer>
            </article>
            <article>
                <header>AWS, Python, ML - a match made in heaven</header>
                In this post I am going to demonstrate how to wirite a simple app.
                <footer style={{ textAlign: 'right', position: 'absolute'}}><span >read more...</span></footer>
            </article>

            <article>
                <header>Intro to Python 🐍</header>
                In this post I am going to demonstrate how to wirite a simple app.
                <footer style={{ textAlign: 'right' }}><span >read more...</span></footer>
            </article>
            <article>
                <header>Apache Airflow - your best frient for large scale automation</header>
                In this post I am going to demonstrate how to wirite a simple app.
                <footer style={{ textAlign: 'right' }}><span >read more...</span></footer>
            </article>
            </div>
        </main>
    );
}

export default Blog;