import Link from 'next/link'
import Image from 'next/image'
import Card from './Card'

const CardImage = (props) => (
	<Card url={props.url} addclass={"card" + " " + props.addclass}>
	    <Image 
	        layout="responsive"
	        width={600}
	        height={400}
	        src={props.image}
	    />
       <div className="card__content">
           <span className="card__content--title">{props.title}</span>
       </div>
    </Card>
)

export default CardImage