import {useRouter} from 'next/router'
import BasicLayout from '../../../components/page-layouts/BasicLayout'
import PageSection from '../../../components/PageSection'
import ImageGrid from '../../../components/grids/ImageGrid'

export default function Spring({spring}) {
  return (
    <>
      <BasicLayout
        BreadCrumbs={true}
        title={spring.name}
      >
      <PageSection>
          <h2>Location</h2>
          <p>
            { spring.street}<br />
            { spring.city}, { spring.state}<br />
          </p>
          <h2>Max Depth</h2>
          <p>{spring.depth} feet</p>
          <h2>Marine Life</h2>
          <p>{spring.marinelife}</p>
          <h2>Restrooms</h2>
          <p>{spring.restrooms}</p>
          <h2>Images</h2>
      </PageSection>
      </BasicLayout>
      </>
  );
}

export async function getStaticPaths() {
  // Fetch the list of springs
  const res = await fetch("http://localhost:3000/api/experiences/springs");
  const springs = await res.json();

  // Create a path from their ids: `/states/1`, `/states/2` ...
  const paths = springs.map((spring) => `/experiences/springs/${spring.slug}`);

  // Return paths, fallback is necessary, false means unrecognize paths will
  // render a 404 page
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch('http://localhost:3000/api/experiences/springs?slug=${params.slug');
  const spring = await res.json();

  return {
    props: {
      spring: spring[0]
    },
  };
}