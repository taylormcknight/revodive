import Link from 'next/link'

const Footer = () => (
  <div className="footer-wrapper">
    <footer className="footer">
      <section className="footer-contents">
        <section className="footer-list">
          <h2>Freediving education</h2>
          <ul>
            <li>
                <Link className="navbar-item" href="/freediving-101">
                <a>Freediving 101</a>
                </Link>
            </li>
          </ul>
        </section>
        <section className="footer-list">
          <h2>Advertise</h2>
          <ul>
            <li>
                <Link className="navbar-item" href="/advertise#promote-trips">
                <a>Promote your trips</a>
                </Link>
            </li>
            <li>
                <Link className="navbar-item" href="/advertise#promote-courses">
                <a>Promote your courses</a>
                </Link>
            </li>
            <li>
                <Link className="navbar-item" href="/advertise#promote-gear">
                <a>Promote your gear</a>
                </Link>
            </li>
            <li>
                <Link className="navbar-item" href="/advertise#promote-gear">
                <a>Hire brand ambassadors</a>
                </Link>
            </li>
          </ul>
        </section>
        <section className="footer-list">
          <h2>About</h2>
          <ul>
            <li>
                <Link className="navbar-item" href="/about">
                <a>Company</a>
                </Link>
            </li>
          </ul>
        </section>
      </section>
      <section className="footer-baseline">
        <ul>
          <li>
              © 2020 RevoGrid, LLC. All rights reserved.
          </li>
          <li>
            <Link className="navbar-item" href="/privacy-policy">
            <a>Privacy Policy</a>
            </Link>
          </li>
          <li>
            <Link className="navbar-item" href="/terms-of-service">
            <a>Terms of Service</a>
            </Link>
          </li>
        </ul>
      </section>
    </footer>
  </div>
)

export default Footer