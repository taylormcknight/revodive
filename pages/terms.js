// components/Base.js
import BasicLayout from '../components/page-layouts/BasicLayout'
import PageSection from '../components/PageSection'

function TOS() {
  return (
    <BasicLayout
        PageHeader={true}
        HeroImage={false}
        hero="/images/about.jpg"
        title="RevoDive Terms of Service"
        mainclass="main"
    >
    <PageSection>
        
    </PageSection>
    </BasicLayout>
  )
}

export default TOS