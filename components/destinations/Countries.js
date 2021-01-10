import DestinationBase from "./DestinationBase";

function Countries(props) {
	return (
		<DestinationBase title="Countries">
		{ props.children }
		</DestinationBase>
	)
}
export default Countries