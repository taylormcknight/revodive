// components/Base.js
import BasicLayout from '../components/page-layouts/BasicLayout'
import PageSection from '../components/PageSection'

function UGCTerms() {
  return (
    <BasicLayout
        PageHeader={true}
        HeroImage={false}
        hero="/images/about.jpg"
        title="RevoDive Copyright Policy"
        mainclass="main"
    >
    <PageSection>
        <h2>Notification of Copyright Infringement</h2>

        <p>RevoGrid, LLC. ("RevoDive") respects the intellectual property rights of others and expects its users to do the same.</p>

        <p>It is RevoDive’s policy, in appropriate circumstances and at its discretion, to disable and/or terminate the account or access of users who repeatedly infringe or are repeatedly charged with infringing the copyrights or other intellectual property rights of others.</p>

        <p>In accordance with the Digital Millennium Copyright Act of 1998, the text of which may be found on the U.S. Copyright Office website at http://www.copyright.gov/legislation/dmca.pdf, RevoDive will respond expeditiously to claims of copyright infringement committed using the RevoDive website and mobile application (the "Site and Application") that are reported to RevoDive’s Designated Copyright Agent, identified in the sample notice below.</p>

        <p>If you are a copyright owner, or are authorized to act on behalf of one, or authorized to act under any exclusive right under copyright, please report alleged copyright infringements taking place on or through the Site and Application by completing the following DMCA Notice of Alleged Infringement and delivering it to RevoDive’s Designated Copyright Agent. Upon receipt of the Notice as described below, RevoDive will take whatever action, in its sole discretion, it deems appropriate, including removal of the challenged material from the Site and Application.</p>

        <h2>DMCA Notice of Alleged Infringement ("Notice")</h2>

        <ol>
            <li>Identify the copyrighted work that you claim has been infringed, or - if multiple copyrighted works are covered by this Notice - you will provide a comprehensive list of the copyrighted works that you claim have been infringed.</li>
            <li>Identify the material that you claim is infringing (or to be the subject of infringing activity) and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit us to locate the material, including at a minimum, if applicable, the URL of the link shown on the Site and Application where such material may be found.</li>
            <li>Provide your mailing address, telephone number, and, if available, email address.</li>
            <li>Include both of the following statements in the body of the Notice:
                <ul>
                    <li>"I hereby state that I have a good faith belief that the disputed use of the copyrighted material is not authorized by the copyright owner, its agent, or the law (e.g., as a fair use)."</li>
                    <li>"I hereby state that the information in this Notice is accurate and, under penalty of perjury, that I am the owner, or authorized to act on behalf of the owner, of the copyright or of an exclusive right under the copyright that is allegedly infringed."</li>
                </ul>
            </li>
            <li>Provide your full legal name and your electronic or physical signature.</li>
        </ol>
        
        
        <p>Deliver this Notice, with all items completed, to RevoDive’s Designated Copyright Agent:</p>

        <p>Copyright Agent<br/>
        c/o RevoGrid, LLC.<br/>
        copyright@RevoDive.com</p>


    </PageSection>
    </BasicLayout>
  )
}

export default UGCTerms