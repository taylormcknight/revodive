// components/Base.js
import BasicLayout from '../components/page-layouts/BasicLayout'
import PageSection from '../components/PageSection'
import CardOverlay from '../components/cards/CardOverlay'
import Link from 'next/link'
import Image from 'next/image'
import ImageGrid from '../components/grids/ImageGrid'

function Experiences({ experiencecategories }) {
  return (
    <BasicLayout
        title="Experiences"
        subtitle="Find your next freediving adventure" >
        <PageSection>
            <ImageGrid gridsize="grid-3">
                {experiencecategories.map((category) => (
                    <CardOverlay
                        key={ category.id }
                        image={ category.image }
                        title={ category.name }
                        url={ category.url }
                    />
                ))}
            </ImageGrid>
        </PageSection>
	</BasicLayout>
  )
}

export async function getStaticProps() {

  const res = await fetch('http://localhost:3000/api/experiencecategories')
  const experiencecategories = await res.json()

  return {
    props: {
      experiencecategories,
    },
  }
}

export default Experiences

