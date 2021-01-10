// components/Base.js
import Base from './Base'
import BreadCrumbs from "../BreadCrumbs";
import HeroImage from "../HeroImage";
import PageHeader from '../PageHeader'

function BasicLayout(props) {
    return (
        <Base>
            {/* Selectively serve breadcrumbs component with BreadCrumbs={true} */}
            {props.BreadCrumbs && <BreadCrumbs />}
        {/* Selectively serve hero image component with HeroImage={true} */}
            {props.HeroImage && <HeroImage hero={props.hero} />}
            <PageHeader title={ props.title } subtitle={ props.subtitle } />
            { props.children }
        </Base>
    )
}

export default BasicLayout