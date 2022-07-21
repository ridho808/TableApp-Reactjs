import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Table extends Component {
  render() {
    return (
        <section id='Table' className='mt-2 mx-auto w-[90%] md:max-w-[90%] overflow-x-auto h-[86%]'>
        <table className='table-auto w-full mx-auto my-5 shadow-2xl '>
          <thead className='backdrop-blur-2xl bg-gray-800/40'>
            <tr>
              <th className='p-2 text-white text-left'>Product</th>
              <th className='p-2 text-white text-left'>Description</th>
              <th className='p-2 text-white text-left'>Price</th>
              <th className='p-2 text-white text-left'>Brand</th>
            </tr>
          </thead>
          <tbody className='backdrop-blur-2xl bg-white/40'>
            {
              this.props.Data.map((response)=>{
                return(
                  <tr key={response.id} className='border-2 border-transparent'>
                    <td className='p-2'>
                      <Link to={`/Details/${response.id}`}>
                      {response.title}
                      </Link>
                    </td>
                    <td className='p-2'>
                      {response.description}
                    </td>
                    <td className='p-2'>
                     ${response.price}
                    </td>
                    <td className='p-2'>
                      {response.brand}
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
    </section>
    )
  }
}
