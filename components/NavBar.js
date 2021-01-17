import Link from 'next/link'
import React, { useState } from "react";

export default function NavBar(props) {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className="nav-wrapper">
      <nav className="navigation">
        <logo>
          <Link className="logo" href="/">
            <a>
              RevoDive
            </a>
          </Link>
        </logo>
        <ul>
          <li>
            <Link href="/trips">
              <a>Trips</a>
            </Link>
          </li>
          <li>
            <Link href="/courses">
              <a>Courses</a>
            </Link>
          </li>
          <li>
            <Link href="/trips">
              <a>Dive Sites</a>
            </Link>
          </li>
          {props.loggedOut &&
          <li>
            <Link href="/signup">
              <a className="button primary">Sign up</a>
            </Link>
          </li>
          }
          {props.loggedIn &&
          <li className="dropdown" onClick={handleToggle} >
              <div id="profile-button">
                <img src="https://i.pravatar.cc/300" className="user-headshot" />
                <span className="name">Taylor</span>
              </div>
              <ul id="profile-menu" className={`navigation dropdown-menu ${isActive ? "show" : ""}`}>
                <li>
                  <Link className="" href="/users/taylor-mcknight">Profile</Link></li>
                <li><Link className="" href="/">Log out</Link></li>
              </ul>
            </li>
          }
        </ul>
      </nav>
    </div>
  );
}