import Link from 'next/link'

const Card = (props) => (
	<li className={"card" + " " + props.addclass}>
	    <Link href={ props.url }>
	    <a>
	    { props.children }
	   	</a>
	    </Link>
	</li>
)

export default Card;