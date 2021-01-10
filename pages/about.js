// components/Base.js
import BasicLayout from '../components/page-layouts/BasicLayout'
import PageSection from '../components/PageSection'

function About() {
  return (
    <BasicLayout
        HeroImage={true}
        hero="/images/about.jpg"
        title="About"
        subtitle="RevoDive's mission is to help recreational freedivers have revolutionary diving experiences."
        mainclass="main"
    >
    <PageSection>
        <h2>Spend more time in the water</h2>
        <p>Planning and booking a freediving trip can be hard. RevoDive makes it easy to find and compare freediving experiences around the world. Spend less time researching. More time in the water.</p>
        <h2>Coming Soon</h2>
        <p>RevoApnea.com for pro freedivers.</p>
    </PageSection>
	</BasicLayout>
  )
}

export default About

