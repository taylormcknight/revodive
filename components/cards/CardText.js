import Link from 'next/link'
import Card from './Card'

const CardText = (props) => (
	<Card addclass="card--blank" url={props.url}>
	    <span className="card__title">{ props.title }</span>
    </Card>
)

export default CardText