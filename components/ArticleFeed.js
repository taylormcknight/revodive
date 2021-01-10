/* Need to use this as base for TripReports */

function ArticleFeed(props) {
	return (
		<ul className="grid-wrapper feed article-feed">
			{ props.children }
		</ul>
	)
}
export default ArticleFeed
    