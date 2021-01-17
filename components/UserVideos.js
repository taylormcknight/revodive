import Link from 'next/link'
import Image from 'next/image'
import PageSection from './PageSection'
import ImageGrid from './grids/ImageGrid'
import CardImage from './cards/CardImage'

const UserVideos = (props) => (
	<PageSection>
		<h2>Videos</h2>
		<ImageGrid gridsize="grid-3">
			<Image
				layout="responsive"
                width={600}
                height={400}
                src="/images/destinations/north-america/united-states/florida/ponce-de-leon-springs/2467755644_7cfc2a9ace_o.jpg"

            />
            <div className="user-video">
            <Image
				layout="responsive"
                width={600}
                height={400}
                src="/images/destinations/north-america/united-states/florida/ponce-de-leon-springs/2467755644_7cfc2a9ace_o.jpg"

            />
            </div>
            <Image
				layout="responsive"
                width={600}
                height={400}
                src="/images/destinations/north-america/united-states/florida/ponce-de-leon-springs/2467755644_7cfc2a9ace_o.jpg"

            />
            <Image
				layout="responsive"
                width={600}
                height={400}
                src="/images/destinations/north-america/united-states/florida/ponce-de-leon-springs/2467755644_7cfc2a9ace_o.jpg"

            />
            <Image
				layout="responsive"
                width={600}
                height={400}
                src="/images/destinations/north-america/united-states/florida/ponce-de-leon-springs/2467755644_7cfc2a9ace_o.jpg"

            />
            <Image
				layout="responsive"
                width={600}
                height={400}
                src="/images/destinations/north-america/united-states/florida/ponce-de-leon-springs/2467755644_7cfc2a9ace_o.jpg"

            />
		</ImageGrid>
	</PageSection>
)
export default UserVideos;
