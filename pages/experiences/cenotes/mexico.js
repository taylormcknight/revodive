import BasicLayout from '../../../components/page-layouts/BasicLayout'
import Article from '../../../components/Article'
import CardImage from '../../../components/cards/CardImage'
import TripReports from '../../../components/TripReports'
import LocalDestinations from '../../../components/destinations/LocalDestinations'
import Experiences from '../../../components/Experiences'
import React, { Component, Fragment } from 'react'


function CenotesMexico({ cenotes }) {
    return (
        <BasicLayout 
            BreadCrumbs={true}
            HeroImage={true}
            title="Freedive in cenotes in Mexico"
            subtitle="Dive in the Yucatan"
            hero="/images/experiences/cenotes/cenotes-cover.jpg"
        >
        <LocalDestinations>
            {cenotes.map((cenote) => (
                <Fragment>
                {cenote.countries.map((country) => (
                <Fragment>
                {country.regions.map((region) => (
                    <CardImage 
                        key={ region.id }
                        image={ region.image }
                        title={ region.name }
                        url={ region.url }
                    />
                ))}
                </Fragment>
                ))}
                </Fragment>
            ))}
        </LocalDestinations>   
        </BasicLayout>
    )
}

export async function getStaticProps() {

  const res = await fetch('http://localhost:3000/api/experiences/cenotes')
  const cenotes = await res.json()

  return {
    props: {
      cenotes
    },
  }

}

export default CenotesMexico