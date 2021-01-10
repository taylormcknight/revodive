import BasicLayout from './BasicLayout'
import Article from '../Article'
import CardImage from '../cards/CardImage'
import TripReports from '../TripReports'
import Countries from '../destinations/Countries'
import Experiences from '../components/Experiences'
import React, { Component, Fragment } from 'react'

function ExperienceLayout( {children} ) {
    return (
        <BasicLayout 
            BreadCrumbs={true}
            HeroImage={true}
            title={ props.title }
            subtitle={ props.subtitle }
            hero={ props.hero }
        >
        <TripReports>
            {{ props.experience }.map(({props.experience}) => (
                <Fragment>
                {{props.experience}).tripreports.map((tripreport) => (
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
            {{props.experience}.map(({props.experience}) => (
                <Fragment>
                {{props.experience}.countries.map((country) => (
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
            {{props.experience}.map(({props.experience}) => (
                <Fragment>
                {{props.experience}.experiences.map((experience) => (
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

  const res = await fetch({props.api})
  const bluewhales = await res.json()

  return {
    props: {
      {props.experience}
    },
  }

}

export default ExperienceLayout