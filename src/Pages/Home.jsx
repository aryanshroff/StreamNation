import React from 'react'
import Main from '../Components/Main'
import Row from '../Components/Row'
import requests from "../HoldingReq";


const Home = () => {
  return (
    <div>
        <Main></Main>
        <Row title='Upcoming' fetchUrl={requests.requestUpcoming}></Row>
        <Row title='Popular' fetchUrl={requests.requestPopular}></Row>
        <Row title='Trending' fetchUrl={requests.requestTrending}></Row>
        <Row title='Top Rated' fetchUrl={requests.requestTopRated}></Row>
        <Row title='Horror' fetchUrl={requests.requestHorror}></Row>

    </div>
  )
}

export default Home