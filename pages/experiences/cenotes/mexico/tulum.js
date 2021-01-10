import BasicLayout from '../../../../components/page-layouts/BasicLayout'
import Article from '../../../../components/Article'
import CardImage from '../../../../components/cards/CardImage'
import TripReports from '../../../../components/TripReports'
import Countries from '../../../../components/destinations/Countries'
import Experiences from '../../../../components/Experiences'
import React, { Component, Fragment } from 'react'


function CenotesTulum({ cenotes }) {
    return (
        <BasicLayout 
            BreadCrumbs={true}
            HeroImage={true}
            title="Freedive in cenotes in Tulum"
            subtitle="Dive in the Yucatan"
            hero="/images/destinations/countries/mexico/mexico.jpg"
            overview="Whale sharks are amazing"
        >
        <TripReports>
            {cenotes.map((cenote) => (
                <Fragment>
                {cenote.tripreports.map((tripreport) => (
                    <Article
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
            {cenotes.map((cenote) => (
                <Fragment>
                {cenote.countries.map((country) => (
                    <CardImage 
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
            {cenotes.map((cenote) => (
                <Fragment>
                {cenote.experiences.map((experience) => (
                    <CardImage 
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

  const res = await fetch('http://localhost:3000/api/experiences/cenotes')
  const cenotes = await res.json()

  return {
    props: {
      cenotes
    },
  }

}

export default CenotesTulum