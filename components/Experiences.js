import PageSection from "./PageSection";
import ImageGrid from "./grids/ImageGrid";
import CardText from './cards/CardText'
import Link from 'next/link'

function Experiences(props) {
	return (
        <div className="call-out">
		<PageSection>
			<div className="page-section__title-wrapper">
                <span className="title-cta">
                <Link href="">
                    <a>
                    View all Experiences ->
                    </a>
                </Link>
                </span>
            	<h2>Nearby Experiences</h2>
                <p>Find your next adventure</p>
            </div>
            <ImageGrid gridsize="grid-4">
                { props.children }
            </ImageGrid>
        </PageSection>
        </div>
	)
}
export default Experiences