import HeroPromotion from '../../../../components/HeroPromotion'

import BasicLayout from '../../../../components/page-layouts/BasicLayout'
import CardArticle from '../../../../components/cards/CardArticle'
import CardTripReport from '../../../../components/cards/CardTripReport'
import CardGuide from '../../../../components/cards/Cardguide'
import CardExperience from '../../../../components/cards/CardExperience'
import TripReports from '../../../../components/TripReports'
import Experiences from '../../../../components/Experiences'
import Guides from '../../../../components/Guides'
import RelatedArticles from '../../../../components/RelatedArticles'

import React, { Component, Fragment } from 'react'


function Orcas({ orcas }) {
    return (
        <BasicLayout 
            BreadCrumbs={true}
            HeroImage={true}
            HeroPromotion={true}
            title="Freedive with Orcas in Norway"
            subtitle="Are you ready for the Arctic waters?"
            hero="/images/experiences/animal-encounters/orcas-cover.jpg"
        >
        <Guides>
            {orcas.map((orca) => (
                <Fragment>
                {orca.guides.map((guide) => (
                    <CardGuide 
                        key={ guide.id }
                        image={ guide.image }
                        url={ guide.url }
                        title={ guide.title }
                        description={ guide.description }
                    />
                ))}
                </Fragment>
            ))}
        </Guides> 
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
        <TripReports>
            {orcas.map((orca) => (
                <Fragment>
                {orca.tripreports.map((trip) => (
                    <CardTripReport
                        key={ trip.id }
                        image={ trip.image }
                        name={ trip.name }
                        date={ trip.date }
                        url={ trip.url }
                    />
                ))}
                </Fragment>
            ))}
        </TripReports>
        <RelatedArticles>
            {orcas.map((orca) => (
                <Fragment>
                {orca.relatedarticles.map((article) => (
                    <CardArticle
                        key={ article.id }
                        image={ article.image }
                        title={ article.title }
                        description={ article.description }
                        url={ article.url }
                    />
                ))}
                </Fragment>
            ))}
        </RelatedArticles>
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