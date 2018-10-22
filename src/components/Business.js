import React from 'react' 
import { connect } from 'react-redux'
import styled from 'styled-components'
import { getBusinessData } from '../redux/actions/businessActions'
import { Switch, BrowserRouter as Router, Route, } from 'react-router-dom'

// Components
import BusinessDetail from './BusinessDetail'
import SingleBusiness from './SingleBusiness'
import ErrorComponent from './ErrorComponent'
 

const BusinessContainer = styled.div`
  width: 80%;
  margin: 0 10%;
`

const Header = styled.div`
  background: #1e69e4;
  color: white;
  .id,
  .name,
  .website,
  .address {
    display: inline-block;
    margin: 0;
    padding: 0;
    height: 25px;
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

const ButtonContainer = styled.div`
  button {
    width: 20%;
    padding: 10px;
    margin-top: 5%;
    margin: 5% 40%;
  }
`


class Business extends React.Component {  
  constructor(props){
    super(props)

    this.state = {
      businessData: []
    }
  }

  getInformation = () => {
    this.props.dispatch(getBusinessData())
    this.setState({ businessData: this.props.getState().businessData.businessDetails })
  }

  render(){
    let businessList = this.state.businessData.map((item) => {
      return <BusinessDetail key={item.id} props={item}/>
    })

    let refreshList = (
      <ButtonContainer>
        <button onClick={this.getInformation}>Refresh List</button>
      </ButtonContainer>
    )

    return(
      <Router>
        <Switch>
          <Route exact path='/' render={() => {
            return(
              <BusinessContainer>
                <Header>
                  <div className='id'>ID</div>
                  <div className='name'>Name</div>
                  <div className='website'>Website</div>
                  <div className='address'>Address</div>
                </Header>
                {this.state.businessData.length === 0 ? refreshList : businessList}
              </BusinessContainer>
            )}}
          />
          <Route path='/business/:id?' component={SingleBusiness}/>
          <Route path='*' component={ErrorComponent}/>
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return{
    businessDetails: state.businessData.businessDetails
  }
}

export default connect(mapStateToProps)(Business)