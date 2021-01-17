import {useRouter} from 'next/router'
import Link from 'next/link'
import Modal from 'react-modal';
import BasicLayout from '../../../components/page-layouts/BasicLayout'
import PageSection from '../../../components/PageSection'
import ImageList from '../../../components/grids/ImageList'
import CardExperience from '../../../components/cards/CardExperience'
import Suggestion from '../../../components/Suggestion'
import Reviews from '../../../components/reviews/Reviews'
import Experiences from '../../../components/Experiences'
import React, { Component, Fragment } from 'react'


export default function Spring({spring, fltrips}) {
  return (
    <>
      <BasicLayout
        pageClass="sidebar-layout"
        PageHeader={true}
        HeroImage={true}
        HeroSource={true}
        BreadCrumbs={true}
        title={spring.name}
        hero={spring.image}
        imageauthor={spring.imageauthor}
        imagesource={spring.imagesource}
        imagesourceurl={spring.imagesourceurl}
        imagelicense={spring.imagelicense}
        imagelicenseurl={spring.imagelicenseurl}
      >
      <main>
      <PageSection>
          <div className="button-wrapper">
            <Link href="/write-report">
              <a className="button primary small" >
              Write Dive Report
              </a>
            </Link>
            <button className="button secondary small"><span className="emoji">📷</span> Add Photo</button>
            <button className="button secondary small"><span className="emoji">🔗</span> Share</button>
            <button className="button secondary small"><span className="emoji">🏆</span> Add Goal</button>
          </div>
          <ul className="info-box">
            <li>
            <h3>Hours</h3>
            <p>
              { spring.hours}
            </p>
            </li>
            <li>
            <h3>Fees</h3>
            <p>
              { spring.fees}
            </p>
            </li>
            <li>
            <h3>Location</h3>
            <p>
              { spring.street}<br />
              { spring.city}, { spring.state}<br />
            </p>
            </li>
          </ul>
        </PageSection>
        <PageSection>
          <h2>Description</h2>
          <p>{ spring.description }</p>
          <Suggestion />
        </PageSection>
        <PageSection>
          <Reviews />
      </PageSection>
      </main>
      <aside className="right-sidebar">
      <h2>Book a Course</h2>
      <ImageList>
      {fltrips.map((trip) => (
          <Fragment>
          {trip.springs.slice(0, 3).map((spring) => (
              <CardExperience 
                  key={ spring.id }
                  image={ spring.image }
                  vendor={ spring.vendor }
                  title={ spring.title }
                  price={ spring.price }
                  location={ spring.location }
                  url={ spring.url }
                  rating={ spring.rating }
                  reviews={ spring.reviews }
              />
          ))}
          </Fragment>
      ))}
      <span className="title-cta">
        <Link href="">
          <a>
          View more trips ->
          </a>
      </Link>
      </span>
      </ImageList>
      </aside>
      <Experiences>
          
      </Experiences>
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
  const res = await fetch(`http://localhost:3000/api/experiences/springs?slug=${params.slug}`);
  const res2 = await fetch('http://localhost:3000/api/trips/us/fl/fltrips');
  
  const [spring] = await res.json();
  const fltrips = await res2.json()

  // console.clear();
  // console.log({ params });
  // console.log(spring);
  // springs.map((spring) => console.log({ name: spring.name }));

  return {
    props: {
      spring,
      fltrips
    },
  };
}