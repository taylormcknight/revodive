// components/Base.js
import BasicLayout from '../../components/page-layouts/BasicLayout'
import CardOverlay  from '../../components/cards/CardOverlay'
import ImageGrid from '../../components/grids/ImageGrid'

function AnimalEncounters({ animals }) {
  return (
    <BasicLayout 
        BreadCrumbs={true}
        title="Animal Encounters"
        subtitle="Freedive with the world's most amazing marine life"
    >
    <ImageGrid gridsize="grid-3">
        {animals.map((animal) => (
            <CardOverlay 
                key={ animal.id }
                image={ animal.image }
                title={ animal.name }
                url={ animal.url }
            />
        ))}
    </ImageGrid>
    </BasicLayout>
  )
}

export async function getStaticProps() {

  const res = await fetch('http://localhost:3000/api/experiences/animals')
  const animals = await res.json()

  return {
    props: {
      animals,
    },
  }
}

export default AnimalEncounters