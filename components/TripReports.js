import PageSection from "./PageSection";
import ImageGrid from "./grids/ImageGrid";
import CardText from './cards/CardText'
import Link from 'next/link'

function TripReports(props) {
	return (
		<PageSection>
			<div className="page-section__title-wrapper">
				<span className="title-cta">
            	<Link href="">
            		<a>
            		View all Trip Reports ->
            		</a>
        		</Link>
        		</span>
            	<h2>Trip Reports</h2>
            	<p>Read these trip reports by other divers</p>
            </div>
            <ImageGrid gridsize="grid-3">
                { props.children }
            </ImageGrid>
        </PageSection>
	)
}
export default TripReports