import {useRouter} from 'next/router'
import Link from 'next/link'
import Modal from 'react-modal';
import BasicLayout from '../../../../../components/page-layouts/BasicLayout'
import PageSection from '../../../../../components/PageSection'
import ImageList from '../../../../../components/grids/ImageList'
import CardExperience from '../../../../../components/cards/CardExperience'
import CardUserPost from '../../../../../components/cards/CardUserPost'
import Suggestion from '../../../../../components/Suggestion'
import Reviews from '../../../../../components/reviews/Reviews'
import UserPosts from '../../../../../components/UserPosts'
import Experiences from '../../../../../components/Experiences'
import React, { Component, Fragment } from 'react'


export default function FloridaDivesites({fldivesite, flcourses}) {
  return (
    <>
      <BasicLayout
        pageClass="sidebar-layout"
        PageHeader={true}
        HeroImage={true}
        HeroSource={true}
        BreadCrumbs={false}
        title={fldivesite.name}
        hero={fldivesite.image}
        imageauthor={fldivesite.imageauthor}
        imagesource={fldivesite.imagesource}
        imagesourceurl={fldivesite.imagesourceurl}
        imagelicense={fldivesite.imagelicense}
        imagelicenseurl={fldivesite.imagelicenseurl}
      >
      <aside className="left-sidebar">
        <h2>What to Know</h2>
        <ul className="info-box">
           <li>
                <h3>Location</h3>
                <p>
                  { fldivesite.street}<br />
                  { fldivesite.city}, { fldivesite.state}<br />
                </p>
            </li>
            <li>
                <h3>Hours</h3>
                <p>
                  { fldivesite.hours}
                </p>
            </li>
            <li>
                <h3>Fees</h3>
                <p>
                  { fldivesite.fees}
                </p>
            </li>
        </ul>
        <h2>Description</h2>
        <p>{ fldivesite.description }</p>
        <Suggestion />
        </aside>
        <main>
            <div className="button-wrapper">
                <Link href="/write-report">
                  <a className="button primary small" >
                  Check in
                  </a>
                </Link>
                <button className="button secondary small"><span className="emoji">📷</span> Post Photo</button>
                <button className="button secondary small"><span className="emoji">🎥</span> Post Video</button>

                <button className="button secondary small"><span className="emoji">⭐</span> Save</button>

            </div>
            <UserPosts>
                <Fragment>
                {fldivesite.userposts.slice(0, 3).map((post) => (
                    <CardUserPost
                        key={ post.id }
                        image={ post.image }
                        author={ post.author }
                        title={ post.title }
                        location={ post.location }
                        url={ post.url }
                        mediatype={ post.mediatype }
                    />
                ))}
                </Fragment>
            </UserPosts>
            <Reviews />
        </main>
        <aside className="right-sidebar">
            <h2>Book a Course</h2>
            <ImageList>
            {flcourses.slice(0, 3).map((course) => (
                <CardExperience 
                    key={ course.id }
                    image={ course.image }
                    vendor={ course.vendor }
                    title={ course.title }
                    price={ course.price }
                    location={ course.location }
                    url={ course.url }
                    rating={ course.rating }
                    reviews={ course.reviews }
                />
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
      </BasicLayout>
      </>
  );
}

export async function getStaticPaths() {
  // Fetch the list of florida dive sites
  const res = await fetch("http://localhost:3000/api/divesites/north-america/united-states/florida/fldivesites");
  const fldivesites = await res.json();

  // Create a path from their ids: `/states/1`, `/states/2` ...
  const paths = fldivesites.map((fldivesite) => `/divesites/north-america/united-states/florida/${fldivesite.slug}`);

  // Return paths, fallback is necessary, false means unrecognize paths will
  // render a 404 page
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/divesites/north-america/united-states/florida/fldivesites?slug=${params.slug}`);
  const res2 = await fetch('http://localhost:3000/api/courses/north-america/united-states/florida/flcourses');
  
  const [fldivesite] = await res.json();
  const flcourses = await res2.json()

  // console.clear();
  // console.log({ params });
  // console.log(spring);
  // springs.map((spring) => console.log({ name: spring.name }));

  return {
    props: {
      fldivesite,
      flcourses
    },
  };
}