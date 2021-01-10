import Link from 'next/link'
import Image from 'next/image'
import Card from './Card'

const CardExperience = (props) => (
	<Card url={props.url} addclass="card--article">
	    <img src={ props.image } />
        <div className="card__content">
            <span className="card__content--title">{props.title}</span>
            <span className="card__content--description">{props.description}</span>
            <p>
            <Link href={ props.url }>
            <a>Read more<img src="https://rtaylormcknight.com/media/img/external-link-icon.png" className="card__content--external-link" />
             </a>
             </Link>
             </p>
        </div>
    </Card>
)

export default CardExperience