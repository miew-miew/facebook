import { faBarsProgress, faBell, faHome, faMessage, faSearch, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../css/navbar.css';

export default function NavigationBar() {
  return (
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
            <FontAwesomeIcon className="icon" icon={faSearch} />
          </span>
        </form>

        <div className="navbar justify-content-md-center">
          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item mx-3">
              <a className="nav-link" href="#"><FontAwesomeIcon className="icon" icon={faHome} /></a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#"><FontAwesomeIcon className="icon" icon={faUserFriends} /></a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#"><FontAwesomeIcon className="icon" icon={faBell} /></a>
            </li>
          </ul>
        </div>

        <ul className="navbar-nav d-flex flex-row">
          <li className="nav-item mx-2">
            <a className="nav-link" href="#"><FontAwesomeIcon className="icon" icon={faBarsProgress} /></a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="#"><FontAwesomeIcon className="icon" icon={faMessage} /></a>
          </li>
          <li className="nav-item mx-2">
            <a
              className="nav-link"
              href="#"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                className="rounded-circle"
                height="30"
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}