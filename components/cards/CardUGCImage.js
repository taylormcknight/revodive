import Link from 'next/link'
import Image from 'next/image'
import Card from './Card'

const CardUGCImage = (props) => (
	<Card url={props.url} addclass="card--article">
	    <Image 
            layout="responsive"
            width={600}
            height={400}
            src={props.image}
        />
        <div className="card__content">
            <p>
            <Link href={ props.url }>
            <a>Photo by {props.author}<img src="https://rtaylormcknight.com/media/img/external-link-icon.png" className="card__content--external-link" />
             </a>
             </Link>
             </p>
        </div>
    </Card>
)

export default CardUGCImage