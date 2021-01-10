import Link from 'next/link'
import Image from 'next/image';

const Article = (props) => (
    <li>
        <article>
        	<figure>
			    <Link href={ props.url }>
			        <a>
			        <img src={ props.image } />
			        </a>
			    </Link>
			</figure>
			<figcaption>
			    <Link href={ props.url }>
			    <a>
			    <h1>
			        { props.title }
			    </h1>
			    </a>
			    </Link>
			    <p>{ props.description }</p>
			    <p>
			    <Link href={ props.url }>
			    <a>Read more<img src="https://rtaylormcknight.com/media/img/external-link-icon.png" className="external-link-icon" />
			     </a>
			     </Link>
			     </p>
			</figcaption>
        </article>
    </li>
)
export default Article
    

    