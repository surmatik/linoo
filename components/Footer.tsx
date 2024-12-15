// components/Footer.tsx
export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>Lino Bertschinger | <a href="/legal">Legal information</a></p>
                <div className="social-icons-footer">
                    <a href="https://instagram.com/surmatik" target="_blank"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.youtube.com/@surmatik" target="_blank"><i className="fab fa-youtube"></i></a>
                    <a href="https://www.linkedin.com/in/lino-bertschinger/" target="_blank"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/surmatik" target="_blank"><i className="fab fa-github"></i></a>
                </div>
            </div>
        </footer>
    );
}
