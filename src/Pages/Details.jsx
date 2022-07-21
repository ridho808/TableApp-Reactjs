import React, { Component } from 'react'
import Navbar from '../Component/Navbar';
import Data from '../Data/Data.json'
export default class Details extends Component {
  constructor(props){
    super(props);
    this.state ={
      Products : []
    }
  }
  componentDidMount(){
    const getParams = window.location.pathname.split('/')[2];
    const DATA = Data.filter((Data)=> (Data['id'] === Number(getParams)))
    this.setState({Products : DATA})
  }
  render() {
    return (
      <Navbar>
        <section className='max-w-[570px] h-[600px] mt-4 mx-auto'>
          <div className='bg-white rounded-xl'>
          {
            this.state.Products.map((res)=>{
              return (
                <div key={res.id}>
                    <h1 className='text-center text-2xl font-bold'>{res.title}</h1>
                    <h1 className='text-center'><strong>Price</strong> : ${res.price}</h1>
                    <img src={res.images[0]} alt=".." className='object-contain w-[300px] h-[200px] mx-auto rounded-lg' />
                    <div className='flex flex-row justify-evenly'>
                      <img src={res.images[2]} alt="..." className='object-cover w-[180px] rounded-lg p-2'/>
                      <img src={res.images[3]} alt="..." className='object-cover w-[180px] rounded-lg p-2'/>
                    </div>
                    <p className='text-center text-[18px] p-2'>
                      {res.description} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo laboriosam voluptas quae, fugit voluptatibus harum ab aut veritatis voluptates delectu
                    </p>
                </div>
              )
            })
          }
          </div>
        </section>
      </Navbar>
    
    )
  }
}
