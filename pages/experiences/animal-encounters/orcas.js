import HeroPromotion from '../../../components/HeroPromotion'

import BasicLayout from '../../../components/page-layouts/BasicLayout'
import CardArticle from '../../../components/cards/CardArticle'
import CardCountry from '../../../components/cards/CardCountry'
import CardGearList from '../../../components/cards/CardGearList'
import CardExperience from '../../../components/cards/CardExperience'
import TripReports from '../../../components/TripReports'
import Countries from '../../../components/destinations/Countries'
import Experiences from '../../../components/Experiences'
import React, { Component, Fragment } from 'react'


function Orcas({ orcas }) {
    return (
        <BasicLayout 
            BreadCrumbs={true}
            HeroImage={true}
            HeroPromotion={true}
            title="Orcas"
            subtitle="Freedive with orcas"
            hero="/images/experiences/animal-encounters/orcas-cover.jpg"
        >
        <Experiences>
            {orcas.map((orca) => (
                <Fragment>
                {orca.experiences.map((experience) => (
                    <CardExperience 
                        key={ experience.id }
                        image={ experience.image }
                        vendor={ experience.vendor }
                        title={ experience.title }
                        price={ experience.price }
                        location={ experience.location }
                        url={ experience.url }
                        rating={ experience.rating }
                        reviews={ experience.reviews }
                    />
                ))}
                </Fragment>
            ))}
        </Experiences> 
        <Countries>
            {orcas.map((orca) => (
                <Fragment>
                {orca.countries.map((country) => (
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
        <TripReports>
            {orcas.map((orca) => (
                <Fragment>
                {orca.tripreports.map((tripreport) => (
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
        </BasicLayout>
    )
}

export async function getStaticProps() {

  const res = await fetch('http://localhost:3000/api/experiences/animal-encounters/orcas')
  const orcas = await res.json()

  return {
    props: {
      orcas
    },
  }

}

export default Orcas