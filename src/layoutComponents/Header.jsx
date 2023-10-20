import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [searchInput, setSearchInput] = useState('');
  const [category, setCategory] = useState([]);
  const [openMenus, setOpenMenus] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    router.push('/search?search=' + searchInput);
  };

  const toggleSubMenu = (index) => {
    if (openMenus.includes(index)) {
      setOpenMenus(openMenus.filter((i) => i !== index));
    } else {
      setOpenMenus([...openMenus, index]);
    }
  };

  useEffect(() => {
    fetchCategory();
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    setCurrentPath(pathname);
    if (currentPath !== pathname) {
      $('.canvas-menu').removeClass('open');
      $('.main-overlay').removeClass('active');
      $('.search-popup').removeClass('visible');
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  const fetchCategory = async () => {
    const res = await fetch(global.api + 'category');
    const data = await res.json();
    data.status === true ? setCategory(data.data) : setCategory([]);
  };

  return (
    <>
      <header
        className={`header-default sticky-header ${
          isScrolled ? 'border-bottom' : null
        }`}
      >
        <nav className="navbar navbar-expand-lg">
          <div className="container-xl">
            <Link className="navbar-brand" href="/">
              <img src="/images/logo.png" alt="logo" />
              {/* <img src="/images/logo.svg" alt="logo" /> */}
            </Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" href="/">
                    Home
                  </Link>
                </li>
                {category.map((item, index) =>
                  item.children.length > 0 ? (
                    <li className="nav-item dropdown" key={index}>
                      <a className="nav-link dropdown-toggle">{item.name}</a>
                      <ul className="dropdown-menu">
                        {item.children.map((child, index) => (
                          <li key={index}>
                            <Link
                              href={`/category/${child.path}`}
                              className="dropdown-item"
                            >
                              {child.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li className="nav-item" key={index}>
                      <Link
                        className="nav-link"
                        href={`/category/${item.path}`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  )
                )}
                {/* <li className="nav-item">
                  <Link className="nav-link" href="contact.html">
                    Contact
                  </Link>
                </li> */}
              </ul>
            </div>
            <div className="header-right">
              <div className="header-buttons">
                <button className="search icon-button d-unset d-md-none">
                  <i className="icon-magnifier" />
                </button>
                <div className="searchMyAccount">
                  <div className="pull-right mainHeaderCols searchWrapper">
                    <div className="icon-addon addon-sm">
                      <form
                        className="searchContainer border-bottom-0 position-relative"
                        onSubmit={handleSearchSubmit}
                      >
                        <input
                          className="searchInput form-controls"
                          placeholder="Search...."
                          type="text"
                          autoComplete="off"
                          value={searchInput}
                          onChange={(e) => setSearchInput(e.target.value)}
                        />
                        <i className="icon-magnifier" />
                      </form>
                    </div>
                  </div>
                </div>
                <button className="burger-menu icon-button d-unset d-md-none">
                  <span className="burger-icon"></span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="search-popup">
        {/* close button */}
        <button type="button" className="btn-close" aria-label="Close" />
        {/* content */}
        <div className="search-content">
          <div className="text-center">
            <h3 className="mb-4 mt-0">Press ESC to close</h3>
          </div>
          {/* form */}
          <form className="d-flex search-form" onSubmit={handleSearchSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search and press enter ..."
              aria-label="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button className="btn btn-default btn-lg" type="submit">
              <i className="icon-magnifier" />
            </button>
          </form>
        </div>
      </div>
      {/* mobile menu */}
      <div className="canvas-menu d-flex align-items-end flex-column">
        {/* close button */}
        <button type="button" className="btn-close" aria-label="Close" />
        {/* logo */}
        <div className="logo mt-0">
          <img src="/images/logo.png" alt="logo" className="w-40" />
        </div>
        {/* menu */}
        <nav>
          <ul className="vertical-menu">
            {category.map((item, index) =>
              item.children.length > 0 ? (
                <li
                  className="active"
                  key={index}
                  onClick={() => toggleSubMenu(index)}
                >
                  <span
                    className={`switch ${
                      openMenus.includes(index)
                        ? 'icon-arrow-up'
                        : 'icon-arrow-down '
                    }`}
                    onClick={() => toggleSubMenu(index)}
                  ></span>
                  {item.name}
                  <ul
                    className={`submenu ${
                      openMenus.includes(index) ? 'openmenu' : ''
                    }`}
                  >
                    {item.children.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link href={`/category/${subItem.path}`}>
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={index}>
                  <Link href={`/category/${item.path}`}>{item.name}</Link>
                </li>
              )
            )}
          </ul>
        </nav>
        {/* social icons */}
        {/* <ul className="social-icons list-unstyled list-inline mb-0 mt-auto w-100">
          <li className="list-inline-item">
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <i className="fab fa-pinterest" />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <i className="fab fa-medium" />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <i className="fab fa-youtube" />
            </a>
          </li>
        </ul> */}
      </div>
      <div className="main-overlay"></div>
    </>
  );
}

export default Header;
