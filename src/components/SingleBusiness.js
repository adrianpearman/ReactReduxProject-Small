import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components' 

const BusinessImage  = styled.div`
  display: inline-block;
  width: 49%;
  margin: 0;
  vertical-align: top;
  img{
    width: 100%;
  }
`

const BusinessDetails  = styled.div`
  width: 47%;
  display: inline-block;
  padding: 2%;
  vertical-align: top;
`

const BusinessContent = styled.div`
  margin-bottom: 5%;
`

const BusinessHours = styled.div`
  width: 47%;
  display: inline-block;
  padding: 0;
  vertical-align: top;
  ul {
    text-decoration: none;
    list-style: none;
    padding: 0;
    margin: 0;
  }
`

const Title  = styled.div`
  display: inline-block;
  margin: 0;
  width: 30%;
`

const Information  = styled.div`
  display: inline-block;
  margin: 0;
  width: 60%;
  p{
    margin: 0;
  }
`

const SingleBusiness = (props) => {
  const info = props.location.state

  return (
    <div >
      <Link to='/'>
        Back
        </Link>
      <div className='business-container'>
        <BusinessImage>
          <img src={info.logo_url} alt={info.name} />
        </BusinessImage>
        <BusinessDetails>
          <BusinessContent>
            <Title>
              <strong>Business Name:</strong>
            </Title>
            <Information>
                <p>{info.name}</p>             
            </Information>
          </BusinessContent>
          <BusinessContent>
            <Title>
              <strong>Business Address:</strong>
            </Title>
            <Information>
              <p>{info.address}</p>
            </Information>
          </BusinessContent>
          <BusinessContent>
            <Title>
              <strong>Website:</strong>
            </Title>
            <Information>
              <a href={info.website_url}>{info.website_url}</a>
            </Information>
          </BusinessContent>
          <BusinessContent>
            <Title>
              <strong>Hours</strong>
            </Title>
            <BusinessHours>
              <ul>
                <li><strong>Friday</strong>: {info.hours['friday']}</li>
                <li><strong>Saturday</strong>: {info.hours['saturday']}</li>
                <li><strong>Sunday</strong>: {info.hours['sunday']}</li>
                <li><strong>Monday</strong>: {info.hours['monday']}</li>
                <li><strong>Tuesday</strong>: {info.hours['tuesday']}</li>
                <li><strong>Wednesday</strong>: {info.hours['wednesday']}</li>
                <li><strong>Thursday</strong>: {info.hours['thursday']}</li>
              </ul>
            </BusinessHours>
          </BusinessContent>
        </BusinessDetails>
      </div>
    </div >
  )
}

export default SingleBusiness 


