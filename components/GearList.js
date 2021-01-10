import PageSection from "./PageSection";
import ImageGrid from "./grids/ImageGrid";
import CardText from './cards/CardText'
import Link from 'next/link'

function GearList(props) {
	return (
		<PageSection>
			<div className="page-section__title-wrapper">
            	<h2>Gear Lists</h2>
            	<span className="title-cta">
            	<Link href="">
            		<a>
            		View all ->
            		</a>
        		</Link>
        		</span>
            </div>
            <ImageGrid gridsize="grid-4">
                { props.children }
            </ImageGrid>
        </PageSection>
	)
}
export default GearList