import Link from 'next/link'
import Image from 'next/image';
import React, { useState } from "react";

export default function Search(props) {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
	<div className="search-wrapper">
	  <header>
	    <h1>Go freediving {props.type} {props.location}</h1>
	    <div className="sub-title">Find amazing dive sites. Easily book trips and courses.</div>
	    <form className="search">
	      <input type="search" placeholder={`Search for ${props.placeholder}`} />
	    </form>
	  </header>
	  
	</div>
  );
}