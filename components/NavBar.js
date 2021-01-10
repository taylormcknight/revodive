import Link from 'next/link'

const NavBar = () => (
  <div className="nav-wrapper">
    <nav className="navigation">
      <logo>
        <Link className="logo" href="/">
          <a>
            <img
              src="/revodive.jpg"
              alt="logo"
            />
          </a>
        </Link>
      </logo>
      <ul>
        <li>
          <Link href="/experiences">
            <a>Experiences</a>
          </Link>
        </li>
        <li>
          <Link href="/advertise">
            <a>Advertise</a>
          </Link>
        </li>
        <li>
          <Link href="/signup">
            <a className="button primary">Sign up</a>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default NavBar
