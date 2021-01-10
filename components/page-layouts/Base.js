import NavBar from "../NavBar";
import Footer from "../Footer";

const Base = (props) => (
	<div>
		<NavBar />
		{props.children}
		<Footer />
	</div>
)

export default Base