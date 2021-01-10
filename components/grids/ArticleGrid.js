import PageSectionWide from "../PageSectionWide"

function ArticleGrid(props) {
    return (
    	<PageSectionWide>
	        <div className="grid-wrapper">
	            <ul className={"article-grid grid " + " " + props.gridsize}>
	                { props.children }
	            </ul>
	        </div>
        </PageSectionWide>
    )
}
export default ArticleGrid;