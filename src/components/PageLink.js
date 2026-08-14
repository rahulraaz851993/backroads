export default function PageLink({href, text, itemClass}) {
    return (
        <li>
            <a href={href} className={itemClass??'nav-link'}> {text} </a>
        </li>
    )
}