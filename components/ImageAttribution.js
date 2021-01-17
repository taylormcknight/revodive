import Image from 'next/image';
import Link from 'next/link';
import React, { Component, Fragment } from 'react'

const ImageAttribution = (props) => (
	<div className="image-attribution">
		<Link href={props.imagesourceurl}><a>The image</a></Link> by {props.imageauthor} is licensed under <Link href={props.imagelicenseurl}><a>{props.imagelicense}</a></Link>
	</div>
)
export default ImageAttribution