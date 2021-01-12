import React from 'react'
import Start from '../containers/Home/Start'
import Slide2 from '../containers/Home/Slide2'
import Slide3 from '../containers/Home/Slide3'
import Slide4 from '../containers/Home/Slide4'
import EndSlide from '../containers/Home/EndSlide'

export default function Home() {
  // React.useEffect(() => {
  //   document.addEventListener('scroll', function () {
  //     window.scrollTo(0, window.innerWidth)
  //   })
  // }, [])
  return (
    <>
      <Start />
      <Slide2 />
      <Slide3 />
      <Slide4 />
      {/* <Slide5 /> */}
      <EndSlide />
    </>
  )
}
