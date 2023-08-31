import { Link } from "react-router-dom";

function Header() {
    
  return (
    <>
      <header className="navigation fixed-top">
        <div className="container">
          {/* main nav */}
          <nav className="navbar navbar-expand-lg navbar-light px-0">
            {/* logo */}
            <Link className="navbar-brand logo" href="/">
              <img
                loading="lazy"
                className="logo-default"
                src="/images/logo.png"
                alt="logo"
              />
              <img
                loading="lazy"
                className="logo-white"
                src="/images/logo-white.png"
                alt="logo"
              />
            </Link>
            {/* /logo */}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navigation"
              aria-controls="navigation"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navigation">
              <ul className="navbar-nav ml-auto text-center">
                <li className="nav-item dropdown active">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#!"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Homepage <i className="tf-ion-chevron-down" />
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/">
                        Homepage
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="onepage-slider">
                        Onepage
                      </Link>
                    </li>
                    <li>
                      <a className="dropdown-item" href="onepage-text">
                        Onepage 2
                      </a>
                    </li>
                    <li className="dropdown dropdown-submenu dropright">
                      <a
                        className="dropdown-item dropdown-toggle"
                        href="#!"
                        id="dropdown0501"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Sub Menu <i className="tf-ion-chevron-down" />
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdown0501"
                      >
                        <li>
                          <a className="dropdown-item" href="index">
                            Submenu 01
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="index">
                            Submenu 02
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to="about">
                    About Us
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to="services">
                    Services
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to="explore">
                    Explore
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to="team">
                    Team
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to="pricing">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to="contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#!"
                    id="navbarDropdown02"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages <i className="tf-ion-chevron-down" />
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown02"
                  >
                    <li>
                      <a className="dropdown-item" href="404">
                        404 Page
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="blog">
                        Blog Page
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="single-post">
                        Blog Single Page
                      </a>
                    </li>
                    <li className="dropdown dropdown-submenu dropleft">
                      <a
                        className="dropdown-item dropdown-toggle"
                        href="#!"
                        id="dropdown0201"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Sub Menu <i className="tf-ion-chevron-down" />
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdown0201"
                      >
                        <li>
                          <a className="dropdown-item" href="index">
                            Submenu 01
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="index">
                            Submenu 02
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
          {/* /main nav */}
        </div>
      </header>
    </>
  );
}

export default Header;
