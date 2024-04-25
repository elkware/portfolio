import React from 'react';
import './Header.css';


export const Header = (): JSX.Element => {

    const resolveTheme = () => {
        const theme = localStorage.getItem('theme');
        if (theme !== null) {
            return theme;
        }
        if (window.matchMedia) {
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return 'dark';
    }

    const [theme, setTheme] = React.useState(resolveTheme());

    React.useEffect(() => {
        document.getElementsByTagName("html")[0].setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme])


    return (
        <header className='fixed-above'>
            <div className='container' >
            <nav>
                <ul>
                    {/* <li><a href='/'><img src='/logo2.png' width={64} height={64} alt='Home'></img></a></li> */}
                    <li><a href='/'><span className="symbolfont">home</span></a></li>

                </ul>
                <ul>
                    <li><a href='/profile'>Profile</a></li>
                    <li><a href='/blog'>Blog</a></li>
                    <li>
                        <a href = '/theme' onClick={(e: React.MouseEvent) => {
                            setTheme(theme === 'light' ? 'dark' : 'light');
                            e.preventDefault();
                        }}>
                        {(theme === 'light') && <span className="symbolfont">dark_mode</span>}
                        {(theme === 'dark') && <span className="symbolfont">light_mode</span>}
                        </a>
                    </li>
                </ul>
            </nav>
            </div>
        </header>
    );
};
