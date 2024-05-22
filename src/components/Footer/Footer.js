import './footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className='project-footer'>
            <div>
                <h4><a href="https://portfolio-guido-zoppo.netlify.app/" target="_blank" rel="noreferrer">© {currentYear} - Guido Zoppo</a></h4>

            </div>
        </footer>
    )
}

export default Footer