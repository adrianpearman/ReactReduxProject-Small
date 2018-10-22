import React from 'react'
import { Link } from 'react-router-dom' 

import styled from 'styled-components' 

const Information = styled.div`
  .id,
  .name,
  .website,
  .address {
    display: inline-block;
    margin: 0;
    padding: 0;
    vertical-align: top;
    height: 50px;
  }

  .id {
    width: 10%;
  }

  .name,
  .website,
  .address {
    width: 30%;
  }
`

const BusinessDetail = (props) =>{
    return (
      <Information>
        <div className='id'>{props.props.id}</div>
        <div className='name'>
          <Link to={{ pathname: `/business/${props.props.id}`, state: { ...props.props } }}>
            {props.props.name}          
          </Link>
        </div>
        <div className='website'>{props.props.website_url}</div>
        <div className='address'>{props.props.address}</div>
      </Information>
    )
  }

export default BusinessDetail