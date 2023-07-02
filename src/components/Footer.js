import "./styles/footer.css";

export default function Footer() {
    return(
        <section className="footer-section">
            <div id="copyright">
                © {new Date().getFullYear()}, by Reet Kothari
            </div>
        </section>
    )
}