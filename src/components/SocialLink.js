const SocialLink = (props) => {
    return (
        <li>
            <a href={props.href} target="_blank" className="nav-icon">
                <i className={props.icon}></i>
            </a>
        </li>
    );
}

export default SocialLink