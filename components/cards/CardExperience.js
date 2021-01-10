import Link from 'next/link'
import Image from 'next/image'
import Card from './Card'

const CardExperience = (props) => (
	<Card url={props.url} addclass="card--experience">
	    <Image 
	        layout="responsive"
	        width={600}
	        height={400}
	        src={props.image}
	    />
        <div className="card__content">
                <span className="card__content--rating">
                    <span className="card__content--star">&#9733;&nbsp;</span> 
                    {props.rating} ({props.reviews})</span>
                <span className="card__content--secondary-info">{props.vendor}</span>
                <span className="card__content--title">{props.title}</span>
                <span className="card__content--location">{props.location}</span>
                <span className="card__content--pricing">From ${props.price}</span>
        </div>
    </Card>
)

export default CardExperience