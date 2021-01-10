import DestinationBase from "./DestinationBase";

function LocalDestinations(props) {
	return (
		<DestinationBase title="Local Destinations">
		{ props.children }
		</DestinationBase>
	)
}
export default LocalDestinations