import { faBarsProgress, faBell, faHome, faMessage, faSearch, faUserFriends, faUserGroup } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function NavigationBar() {
    return(
        <div className>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                <form className="d-flex input-group w-auto">
                    <input
                        type="search"
                        className="form-control rounded"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="search-addon"
                    />
                    <span className="input-group-text border-0" id="search-addon">
                        <FontAwesomeIcon icon={faSearch} />
                    </span>
                </form>

                <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
                data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
                </button>

                <div className="collapse navbar-collapse justify-content-md-center">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="#"><FontAwesomeIcon icon={faHome} /></a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="#"><FontAwesomeIcon icon={faUserFriends} /></a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="#"><FontAwesomeIcon icon={faBell} /></a>
                        </li>
                    </ul>
                </div>

                <ul className="navbar-nav">
                    <li className="nav-item mx-1">
                        <a className="nav-link" href="#"><FontAwesomeIcon icon={faBarsProgress} /></a>
                    </li>
                    <li className="nav-item mx-1">
                        <a className="nav-link" href="#"><FontAwesomeIcon icon={faMessage} /></a>
                    </li>
                    <li className="nav-item ">
                        <a
                        className="nav-link"
                        href="#"
                        >
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                            className="rounded-circle"
                            height="30"
                            loading="lazy"
                        />
                        </a>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}