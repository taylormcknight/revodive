import PageSection from "./PageSection";
import ImageGrid from "./grids/ImageGrid";
import CardText from './cards/CardText'
import Link from 'next/link'

function Guides(props) {
	return (
		<PageSection>
			<div className="page-section__title-wrapper">
                <span className="title-cta">
                <Link href="">
                    <a>
                    View all Guides ->
                    </a>
                </Link>
                </span>
            	<h2>Guides</h2>
                <p>Read these guides before your trip</p>
            </div>
            <ImageGrid gridsize="grid-3">
                { props.children }
            </ImageGrid>
        </PageSection>
	)
}
export default Guides