// components/Base.js
import BasicLayout from '../../../components/page-layouts/BasicLayout'
import CardOverlay  from '../../../components/cards/CardOverlay'
import ImageGrid from '../../../components/grids/ImageGrid'

function Springs({ springs }) {
  return (
    <BasicLayout 
        BreadCrumbs={true}
        title="Springs"
        subtitle="Freedive with the world's most amazing marine life"
    >
    <ImageGrid gridsize="grid-4">
        {springs.map((spring) => (
            <CardOverlay 
                key={ spring.id }
                image={ spring.image }
                title={ spring.name }
                description={spring.city + ", " + spring.state}
                url={`/experiences/springs/${spring.slug}`}
            />
        ))}
    </ImageGrid>
    </BasicLayout>
  )
}

export async function getStaticProps() {

  const res = await fetch('http://localhost:3000/api/experiences/springs')
  const springs = await res.json()

  return {
    props: {
      springs,
    },
  }
}

export default Springs