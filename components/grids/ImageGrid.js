import PageSectionWide from "../PageSectionWide"

function ImageGrid(props) {
    return (
    	<PageSectionWide>
	        <div className="grid-wrapper">
	            <ul className={"grid photo-grid " + " " + props.gridsize}>
	                { props.children }
	            </ul>
	        </div>
        </PageSectionWide>
    )
}
export default ImageGrid;