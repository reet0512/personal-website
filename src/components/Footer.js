import "./styles/footer.css"

export default function Footer() {
    return(
        <footer className="footer-content">
            <div id="copyright">
                © {new Date().getFullYear()}, by Reet Kothari
            </div>
        </footer>
    )
}