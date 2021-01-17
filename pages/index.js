import Head from 'next/head'
import BasicLayout from '../components/page-layouts/BasicLayout'
import HeroVideo from '../components/HeroVideo'
import PageSection from '../components/PageSection'
import ImageGrid from '../components/grids/ImageGrid'
import CardOverlay from '../components/cards/CardOverlay'
import CardExperience from '../components/cards/CardExperience'
import Search from '../components/Search'
import React, { Component, Fragment } from 'react'
import Image from 'next/image';
import Link from 'next/link';


function Home({ fldivesites, flcourses, mexicotrips }) {
    return (
        <div>
        <BasicLayout
            PageHeader={false}
            HeroImage={false}
            HeroSource={false}
            BreadCrumbs={false}
            Search={true}
            placeholder="an amazing experience"
            location=""
        >
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PageSection>
                <div className="page-section__title-wrapper">
                    <span className="title-cta">
                    <Link href="">
                        <a>
                        View all Trips ->
                        </a>
                    </Link>
                    </span>
                    <h2>Find amazing trips in Mexico</h2>
                    <p>Find your next adventure</p>
                </div>
                <ImageGrid>
                    {mexicotrips.slice(0, 4).map((trip) => (
                      <Fragment>
                          <CardExperience 
                              key={ trip.id }
                              image={ trip.image }
                              vendor={ trip.vendor }
                              title={ trip.title }
                              price={ trip.price }
                              location={ trip.location }
                              url={ trip.url }
                              rating={ trip.rating }
                              reviews={ trip.reviews }
                              triplength={ trip.triplength }
                              tripdates={ trip.tripdates }
                          />
                      </Fragment>
                    ))}
                </ImageGrid>
            </PageSection>
            <PageSection>
                <div className="page-section__title-wrapper">
                    <span className="title-cta">
                    <Link href="">
                        <a>
                        View all Courses ->
                        </a>
                    </Link>
                    </span>
                    <h2>Go deeper</h2>
                    <p>Find an amazing freediving class</p>
                </div>
                <ImageGrid>
                    {flcourses.slice(0, 4).map((course) => (
                      <Fragment>
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
                      </Fragment>
                  ))}
                </ImageGrid>
            </PageSection>
            <div className="call-out">
            <PageSection>
                <div className="page-section__title-wrapper">
                    <span className="title-cta">
                    <Link href="">
                        <a>
                        View all Dive Sites ->
                        </a>
                    </Link>
                    </span>
                    <h2>Recently added Dive Sites</h2>
                    <p>See checkins and photos by other divers</p>
                </div>
                <ImageGrid>
                    {fldivesites.slice(0, 4).map((fldivesite) => (
                        <CardOverlay 
                            key={ fldivesite.id }
                            image={ fldivesite.image }
                            title={ fldivesite.name }
                            description={fldivesite.city + ", " + fldivesite.state}
                            url={`/divesites/north-america/united-states/florida/${fldivesite.slug}`}
                        />
                    ))}
                </ImageGrid>
            </PageSection>
            </div>
            </BasicLayout>
        </div>
    )
}

export async function getStaticProps() {

    const res = await fetch('http://localhost:3000/api/divesites/north-america/united-states/florida/fldivesites');
    const res2 = await fetch('http://localhost:3000/api/courses/north-america/united-states/florida/flcourses');
    const res3 = await fetch('http://localhost:3000/api/trips/north-america/mexico/mexicotrips');

    const fldivesites = await res.json();
    const flcourses = await res2.json();
    const mexicotrips = await res3.json();

    return {
        props: {
            fldivesites,
            flcourses,
            mexicotrips,
        },
    }
}

export default Home