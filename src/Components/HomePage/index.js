import { Component  } from "react";
import {Redirect} from 'react-router-dom'
import ContactsList from "../ContactsList";
import 'bootstrap/dist/css/bootstrap.css';

import './index.css'

class HomePage extends Component{

  state = {
    numberList : [],
    isLoading : true,
    page : 1,
    hasMore: true
  }


  componentDidMount(){
    this.getContactsList()
    window.addEventListener('scroll', this.handleScroll);
  
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

 
  handleScroll = () => {
    const { isLoading, hasMore } = this.state;

    if (isLoading || !hasMore) {
      return;
    }

    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 500 &&
    !isLoading

    if (documentHeight - (scrollTop + windowHeight) < 100) {
      this.getContactsList();
    }
  };

  getContactsList = async () => {
    const {page} = this.state
    const url = `https://randomuser.me/api/?results=20&page=${page}`
    console.log(url)
    const response = await fetch(url)

    if (response.ok){
      const data = await response.json()
      const filteredDate = data.results.map(each => ({
      firstName : each.name.first,
      lastName : each.name.last,
      picture : each.picture.large,
      id : each.id.value
    }))

    this.setState({numberList : filteredDate})
    this.setState({isLoading:false})
    this.setState(prev => ({page : prev.page + 1}))


    this.setState((prevState) => ({
      numberList: [...prevState.numberList, ...filteredDate],
      page: prevState.page + 1,
      hasMore: prevState.page < 2,
      isLoading: false
    }));
    }
  }

  onclickLogout = () => {
    const {history} = this.props 
    history.replace("/")
  }


  render(){
    const {numberList, isLoading} = this.state
    return(
      <div className="bg-container">
        <h1 className="heading">Contacts List</h1>
        <button className="btn btn-info" onClick={this.onclickLogout}>LogOut</button>
        {isLoading ? <p className="loader">Loading...</p> : <ul className="ul-list">
          {numberList.map(each => <ContactsList details={each} key={each.id}/>)}
        </ul>}
        
      </div>
    )
  }
}

export default HomePage