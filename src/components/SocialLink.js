const SocialLink = (props) => {
    return (
        <li>
            <a href={props.href} target="_blank" rel='noreferrer' className={props.class??'nav-icon'}>
                <i className={props.icon}></i>
            </a>
        </li>
    );
}

export default SocialLink