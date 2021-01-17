// components/Base.js
import BasicLayout from '../components/page-layouts/BasicLayout'
import PageSection from '../components/PageSection'

function About() {
  return (
    <BasicLayout
        PageHeader={true}
        HeroImage={false}
        hero="/images/about.jpg"
        title="Experience Title?"
        subtitle="How can we improve this description?"
        pageClass="basic-layout"
    >
    <PageSection>
        <form className="basic-form">
            <textarea placeholder="This cenote now has a bathroom facility...">
            </textarea>
            <button className="button primary submit">
            Post Dive Report
            </button>
        </form>
    </PageSection>
	</BasicLayout>
  )
}

export default About

