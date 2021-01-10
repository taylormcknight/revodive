import BasicLayout from '../../../components/page-layouts/BasicLayout'
import CardArticle from '../../../components/cards/CardArticle'
import CardCountry from '../../../components/cards/CardCountry'
import CardExperience from '../../../components/cards/CardExperience'
import TripReports from '../../../components/TripReports'
import Countries from '../../../components/destinations/Countries'
import Experiences from '../../../components/Experiences'
import React, { Component, Fragment } from 'react'


function BlueWhales({ bluewhales }) {
    return (
        <BasicLayout 
            BreadCrumbs={true}
            HeroImage={true}
            title="Blue Whales"
            subtitle="Ready to dive with gentle giants?"
            hero="/images/experiences/animal-encounters/blue-whales-cover.jpg"
        >
        <TripReports>
            {bluewhales.map((bluewhale) => (
                <Fragment>
                {bluewhale.tripreports.map((tripreport) => (
                    <CardArticle
                        key={ tripreport.id }
                        image={ tripreport.image }
                        title={ tripreport.title }
                        description={ tripreport.description }
                        url={ tripreport.url }
                    />
                ))}
                </Fragment>
            ))}
        </TripReports>
        <Countries>
            {bluewhales.map((bluewhale) => (
                <Fragment>
                {bluewhale.countries.map((country) => (
                    <CardCountry 
                        key={ country.id }
                        image={ country.image }
                        title={ country.name }
                        url={ country.url }
                    />
                ))}
                </Fragment>
            ))}
        </Countries>
        <Experiences>
            {bluewhales.map((bluewhale) => (
                <Fragment>
                {bluewhale.experiences.map((experience) => (
                    <CardExperience 
                        key={ experience.id }
                        image={ experience.image }
                        title={ experience.name }
                        url={ experience.url }
                    />
                ))}
                </Fragment>
            ))}
        </Experiences>        
        </BasicLayout>
    )
}

export async function getStaticProps() {

  const res = await fetch('http://localhost:3000/api/experiences/animal-encounters/bluewhales')
  const bluewhales = await res.json()

  return {
    props: {
      bluewhales
    },
  }

}

export default BlueWhales