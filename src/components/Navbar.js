import logo from "../images/logo.svg";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='nav-center'>
                <div className='nav-header'>
                    <a href='#home'>
                        <img src={logo} className='nav-logo' alt='backroads' />
                    </a>
                    <button type='button' className='nav-toggle' id='nav-toggle'>
                        <i className='fas fa-bars'></i>
                    </button>
                </div>
                {/* <!-- left this comment on purpose --> */}
                <PageLinks parentId='nav-links' parentClass='nav-links' itemClass='nav-link' />
                <SocialLinks parentClass='nav-icons' itemClass='nav-icon' />
            </div>
        </nav>
    );
};

export default Navbar;
