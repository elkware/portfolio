import './Home.css'

const Home = (): JSX.Element => {
    return (
        <main className='container' >
            <article>
                <h1 className='pacifico'>Hey there! 🌟</h1>
                <p>You landed on my personal space on the internet.</p>
                <p>My name is <span className='pacifico'><strong>József Márton Jung</strong></span> and I'm a software engineer with over a decade of crafting code and solving puzzles in the tech world.
                    My toolbox is packed with languages like Python, Java, Go, and a sprinkle of cloud technologies via AWS and Azure. I've got a knack for Agile and database wizardry, all while keeping things running smoothly from the drawing board to live deployment.
                </p>
                <p>
                    With a Master's in Electrical and Computer Engineering and an AWS certification, I'm always on the prowl for new tech to tame and challenges to conquer. I'm as comfortable chatting in English, Hungarian, and Serbian as I am in deciphering code, making team collaboration one of my favorite parts of the day.
                </p>
                <p>
                    I thrive in dynamic environments, leading sprints, streamlining processes, and sharing what I know through workshops or a casual coffee chat. Always ready to dive into the next project or puzzle, I'm looking to keep building, learning, and growing.
                </p>
                <p>Check out my full profile <a href='/profile'>here</a>.</p>
                <p>Want to contact? Drop a message at <a href='mailto:hello@jozef.rocks'>here</a>, or check out my <a href='https://www.linkedin.com/in/jungjm/' target='_blank'>LinkedIn</a> profile.</p>
                <p>Let's make something cool together! 🚀</p>

            </article>
        </main>
    );
}

export default Home;