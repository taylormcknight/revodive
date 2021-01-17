// components/Base.js
import Base from './Base'
import BreadCrumbs from "../BreadCrumbs";
import HeroImage from "../HeroImage";
import ImageAttribution from "../ImageAttribution";
import HeroPromotion from "../HeroPromotion";
import PageHeader from '../PageHeader'
import NavBar from '../NavBar'
import Search from '../Search'

function BasicLayout(props) {
    return (
        <div>
        <NavBar 
            loggedIn={true} 
            loggedOut={false} 
        />
        <Base>
            {/* Selectively serve breadcrumbs component with BreadCrumbs={true} */}
            {props.BreadCrumbs && <BreadCrumbs />}
            {/* Selectively serve hero image component with HeroImage={true} */}
            {props.HeroImage && <HeroImage 
                hero={props.hero} 
            />}
            {props.HeroSource && <ImageAttribution
                imagesourceurl={props.imagesourceurl}
                imageauthor={props.imageauthor}
                imagelicenseurl={props.imagelicenseurl}
                imagelicense={props.imagelicense}
            />}
            {props.HeroPromotion && <HeroPromotion />}
            {props.Search && <Search />}
            <div className={`container + ${props.pageClass}`}>
            {props.PageHeader && <PageHeader title={ props.title } subtitle={ props.subtitle } />}
            { props.children }
            </div>
        </Base>
        </div>
    )
}

export default BasicLayout