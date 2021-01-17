// components/Base.js
import BasicLayout from '../../../../../components/page-layouts/BasicLayout'
import CardOverlay  from '../../../../../components/cards/CardOverlay'
import Search  from '../../../../../components/Search'
import ImageGrid from '../../../../../components/grids/ImageGrid'

function FloridaDivesites({ fldivesites }) {
  return (
    <BasicLayout 
        PageHeader={false}
        BreadCrumbs={false}
        title="Florida Freediving Sites"
        subtitle="Freedive with the world's most amazing marine life"
    >
    <ImageGrid gridsize="grid-4">
        {fldivesites.map((fldivesite) => (
            <CardOverlay 
                key={ fldivesite.id }
                image={ fldivesite.image }
                title={ fldivesite.name }
                description={fldivesite.city + ", " + fldivesite.state}
                url={`/divesites/north-america/united-states/florida/${fldivesite.slug}`}
            />
        ))}
    </ImageGrid>
    </BasicLayout>
  )
}

export async function getStaticProps() {

  const res = await fetch('http://localhost:3000/api/divesites/north-america/united-states/florida/fldivesites')
  const fldivesites = await res.json()

  return {
    props: {
      fldivesites,
    },
  }
}

export default FloridaDivesites