import Base from "./Base";
import NavBar from "../NavBar";

const LandingPage = ({ children }) => (
	<div>
	<NavBar 
        loggedIn={false} 
        loggedOut={true} 
    />
	<Base>
		<div className="homepage">
		{children}
		</div>
	</Base>
	</div>
)

export default LandingPage