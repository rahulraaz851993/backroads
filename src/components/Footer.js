import PageLink from "./PageLink";
import { pageLinks, socialLinks } from '../data';
import SocialLink from "./SocialLink";

export default function Footer() {
    return (
        <footer className="section footer">
        <ul className="footer-links">
            {
                pageLinks.map((link) => {
                    return <PageLink {...link} itemClass="footer-link" key={link.id} />
                })
            }
        </ul>
        <ul className="footer-icons">
            {
                socialLinks.map((social) => {
                    return <SocialLink {...social} class="footer-icon" key={social.id} />
                })
            }
        </ul>
        <p className="copyright">
            copyright &copy; Backroads travel tours company
            <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
        </footer>
    )
}