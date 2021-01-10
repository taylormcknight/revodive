import Image from 'next/image';
import Link from 'next/link';
import React, { Component, Fragment } from 'react'

const HeroImage = (props) => (
	<div className="hero-image-wrapper">
		<Image 
	        layout="fill"
	        src={props.hero}
	        className="hero-image"
	    />
	</div>
)
export default HeroImage