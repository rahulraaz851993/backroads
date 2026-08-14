import logo from '../images/logo.svg'
import { pageLinks, socialLinks } from '../data'
import PageLink from './PageLink'
import SocialLink from './SocialLink'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
            {
                pageLinks.map((link) => {
                    return <PageLink {...link} key={link.id} />
                })
            }
        </ul>

        <ul className="nav-icons">
           {
            socialLinks.map((social) => {
                return <SocialLink {...social} />
            })
           }
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
