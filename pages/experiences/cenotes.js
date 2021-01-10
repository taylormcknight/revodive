// components/Base.js
import BasicLayout from '../../components/page-layouts/BasicLayout'
import ImageGrid from '../../components/grids/ImageGrid'
import Countries from '../../components/destinations/Countries'
import React, { Component, Fragment } from 'react'

function Cenotes({ cenotes }) {
  return (
    <BasicLayout
        BreadCrumbs={true}
        title="Freedive in cenotes"
        subtitle="Find amazing cenotes around the world" 
    >
    </BasicLayout>
  )
}

export async function getStaticProps() {

  const res = await fetch('http://localhost:3000/api/experiences/cenotes')
  const cenotes = await res.json()

  return {
    props: {
      cenotes,
    },
  }
}

export default Cenotes