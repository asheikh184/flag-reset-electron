import { Outlet, Link, NavLink } from "react-router-dom"

const Navs  = () => {
    return (
        <>
            <nav className="menu-nav">
                <div className="logo">
                    <Link to="/">
                        <img src="assets/img/logo/logo.png" alt="Logo" />
                    </Link>
                </div>
                <div className="navbar-wrap main-menu d-lg-flex">
                    <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"} navigation>
                        <li className="active">
                            <NavLink to="https://katanainu.com/" className={({ isActive }) => isActive ? 'active' : ''}>Katana Inu</NavLink>
                        </li>
                        <li>
                            <NavLink to="https://kainu.io/" className={({ isActive }) => isActive ? 'active' : ''}>Marketplace</NavLink>
                        </li>
                        <li>
                            <NavLink to="https://katanainu.com/the-game" className={({ isActive }) => isActive ? 'active' : ''}>Why Katana Inu</NavLink>
                        </li>

                        <li>
                            <NavLink to="https://play.katanainu.com/" className={({ isActive }) => isActive ? 'active' : ''}>Play</NavLink>
                        </li>
                        <li>
                            <NavLink to="https://katanainu.gitbook.io/2/" className={({ isActive }) => isActive ? 'active' : ''}>NFT Paper</NavLink>
                        </li>
                        <li>
                            <NavLink to="https://katanainu.com/assets/resources/katanainuwhitepaper.pdf" className={({ isActive }) => isActive ? 'active' : ''}>WhitePaper</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="header-action d-none d-md-block">
                    <ul>
                        <li className="header-btn">
                            <NavLink to="/about" className='btnd'><img src="assets/img/images/okx.png" alt="OKX"/></NavLink>
                        </li>
                        <li className="header-btn"><NavLink to="/about" className='btnd'>Connect Wallet</NavLink></li>
                    </ul>
                </div>
            </nav>
        <Outlet/>
        </>
    )
}

export default Navs
