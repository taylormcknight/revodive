import Link from 'next/link'
import Image from 'next/image'
import Card from './Card'

const CardUserPost = (props) => (
	<Card url={props.url} addclass="card--experience">
    <div className={` ${props.mediatype}-wrapper`}>
        <div className={props.mediatype}>
            <div className="user-media">
           <Image 
                layout="responsive"
                width={700}
                height={500}
                src={props.image}
            />
            </div>
        </div>
    </div>
    </Card>
)

export default CardUserPost