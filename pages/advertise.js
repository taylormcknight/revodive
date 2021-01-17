// components/Base.js
import BasicLayout from '../components/page-layouts/BasicLayout'
import HeroImage from '../components/HeroImage'
import PageHeader from '../components/PageHeader'
import PageSection from '../components/PageSection'
import PageSectionWide from '../components/PageSectionWide'
import Link from 'next/link'

function Advertise(props) {
    return (
        <BasicLayout 
            HeroImage={true}
            PageHeader={true}
            hero="/images/advertise.jpg"
            title="Connect with freedivers"
            subtitle="Promote your trips, courses, and gear"
            mainclass="main"
        >
        <PageSection>
            <h2>Revolutionize your marketing</h2>
            <p>We help your customers associate your brand with:</p>
            <ol>
                <li>Convenience</li>
                <li>Attractiveness</li>
                <li>Positive interactions</li>
                <li>A longterm relationship</li>
                <li>Safety and security</li>
            </ol>
        </PageSection>
        <PageSection>
            <h2>Services</h2>
            <h3>Promote your trips</h3>
            <p>Lead a cenote freediving trip in Tulum? Promote your trip offerings on our <Link href="/experiences/cenotes/mexico/tulum/"><a>Tulum Cenote Experience page</a></Link>.</p>
            <h3>Promote your courses</h3>
            <p>Lead an intro to freediving course? Promote your classes on our Freediving 101 page.</p>
            <h3>Promote your gear</h3>
            <p>Let us help</p>
            <h3>Hire brand ambassadors</h3>
            <p>Coming soon. If this is a current need, let us know at advertise@revodive.com.</p>
        </PageSection>
        { props.children }
        </BasicLayout>
    )
}

export default Advertise