import './Footer.css';

const Footer = (): JSX.Element => {
    return (
        <>
        <footer className='footer'>
            <div style={{textAlign: "center"}}>
                <p style={{color: "var(--pico-primary)", fontSize: "0.6em"}}>2024</p>
            </div>
        </footer>
        </>
    );
}

export default Footer;