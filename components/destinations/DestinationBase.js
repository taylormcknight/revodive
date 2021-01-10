import PageSection from "../PageSection";
import ImageGrid from "../grids/ImageGrid";

function DestinationBase(props) {
	return (
		<PageSection>
            <h2>{ props.title }</h2>
            <ImageGrid gridsize="grid-4">
				{ props.children }
			</ImageGrid>
    	</PageSection>
	)
}
export default DestinationBase