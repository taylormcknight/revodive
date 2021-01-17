import Image from 'next/image';
import Link from 'next/link';
import React, { Component, Fragment } from 'react'

const ImageAttribution = (props) => (
	<div className="attribution">
		<Link href={props.sourceurl}><a>The image</a></Link> by {props.author} is licensed under <Link href={props.licenseurl}><a>{props.license}</a></Link>
	</div>
)
export default ImageAttribution