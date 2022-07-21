import React, { Component } from 'react';
import Navbar from '../Component/Navbar';
import Data from '../Data/Data.json';
import Table from '../Component/Table';
export default class Home extends Component {
    constructor(props){
      super(props);
      this.state={
        Product : Data,
        ToggleMenu : false,
        Query : ""
      }
      this.MenuClick = this.MenuClick.bind(this);
      this.SearchBar = this.SearchBar.bind(this);
      this.InputSearch = this.InputSearch.bind(this);
    }
    MenuClick(){
      this.setState({ToggleMenu : !this.state.ToggleMenu})
    }
    InputSearch(event){
      return this.setState({Query:event.target.value})
    }
    SearchBar(Data){
      return( Data.filter((item)=>item.title.toLowerCase().includes(this.state.Query)))
    }
   componentDidMount(){
    this.MenuClick()
   }
  render() {
    return (
      <>
        <Navbar Search={this.InputSearch}>
          <Table Data={this.SearchBar(this.state.Product)}/>
        </Navbar>
      </>
    )
  }
}
