import React from 'react'
import Start from '../components/Start'
import Advances from '../containers/Sprint11/Advances'
import Improvements from '../containers/Sprint11/Improvements'
import ERPWebComponent from '../containers/Sprint11/ERPWebComponent'
import GraphWakatimeGeneral from '../containers/Sprint11/GraphWakatimeGeneral'
import GraphWakatimeERP from '../containers/Sprint11/GraphWakatimeERP'
import ItsComming from '../containers/Sprint11/ItsComming'
import SonarQube from '../containers/Sprint11/SonarQube'
import Layout from '../containers/Sprint11/Layout'
import EndSlide from '../containers/Home/EndSlide'

export default function Home() {
  return (
    <>
      <Start title="Sprint 11" />
      <Advances />
      <Improvements />
      <Layout />
      <ERPWebComponent />
      <SonarQube />
      <GraphWakatimeGeneral />
      <GraphWakatimeERP />
      <ItsComming />
      <EndSlide />
    </>
  )
}
