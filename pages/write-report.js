// components/Base.js
import BasicLayout from '../components/page-layouts/BasicLayout'
import PageSection from '../components/PageSection'

function About() {
  return (
    <BasicLayout
        PageHeader={true}
        HeroImage={false}
        hero="/images/about.jpg"
        title="Experience title"
        subtitle="How was your diving experience?"
        pageClass="basic-layout"
    >
    <PageSection>
        <form className="basic-form">
            <textarea placeholder="I've been freediving all over the world. Nothing has come close to how amazing it was to dive in Dahab's blue hole. The color of the water, the coral, the marine life – unbelievable.">
            </textarea>
            <h2>Attach Photos</h2>
            <div className="upload-images">
            </div>
            <button className="button primary submit">
            Post Dive Report
            </button>
        </form>
    </PageSection>
	</BasicLayout>
  )
}

export default About

