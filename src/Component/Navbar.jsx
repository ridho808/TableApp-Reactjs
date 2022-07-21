import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { AiOutlineMenuFold,
         AiOutlineMenuUnfold,
         AiOutlineSearch,
         AiFillHome,AiFillInfoCircle,AiFillPhone    } from 'react-icons/ai';

export default class Navbar extends Component {
    constructor(props){
        super(props);
        this.state={
          ToggleMenu : false,
        }
        this.MenuClick = this.MenuClick.bind(this);
      }
      MenuClick(){
        this.setState({ToggleMenu : !this.state.ToggleMenu});
      }
      componentDidMount(){
        this.MenuClick();
       }
  render() {
    return (
        <section className='flex flex-row'>
        <header>
            <nav>
                <div className={this.state.ToggleMenu ?'w-[170px] bg-white h-screen hidden sm:flex flex-col' : 'w-[60px] bg-white h-screen sm:flex flex-col'}>
                    <img src="https://img.icons8.com/color-glass/50/000000/data-sheet.png" alt='logo' className='self-center mx-auto'/>
                    <ul className='flex flex-col h-[350px] justify-evenly items-center'>
                        <li>
                            <Link  to={'/'} className="flex flex-row items-center">
                            <AiFillHome size={30} fill="#7027A0"/>
                            <h3 className={this.state.ToggleMenu ?'p-2 font-bold hover:underline':'hidden'}>Home</h3>
                            </Link>
                        </li>
                        <li>
                            <Link  to={'/About'} className="flex flex-row items-center">
                            <AiFillInfoCircle size={30} fill="#7027A0"/>
                            <h3 className={this.state.ToggleMenu ?'p-2 font-bold hover:underline':'hidden'}>About</h3>
                            </Link>
                        </li>
                        <li>
                            <Link  to={'/Contact'} className="flex flex-row items-center">
                            <AiFillPhone size={30} fill="#7027A0"/>
                            <h3 className={this.state.ToggleMenu ?'p-2 font-bold hover:underline':'hidden'}>Contact</h3>
                            </Link>
                        </li>
                    </ul>
                </div>
               
            </nav>
        </header>
        <main className='h-screen w-full'>
        <div className='flex flex-row justify-evenly items-center bg-white w-full mx-auto'>
              { this.state.ToggleMenu ?
                <AiOutlineMenuFold size={30} onClick={this.MenuClick} className="ml-2 hover:fill-purple-900" fill='black'/> :
                <AiOutlineMenuUnfold size={30} onClick={this.MenuClick} className="ml-2 hover:fill-purple-900" fill='black'/>
              }
              <h1 className='w-[200px] font-bold text-2xl text-center text-purple-900'>TableApp</h1>
              <div className='w-full flex items-center justify-end mr-2'>
              <input 
              type="text"
              placeholder='Search....' 
              className='w-[150px] h-[30px] border-2 border-gray-600 p-2 m-3 rounded-lg sm:w-[200px]' 
              onChange={this.props.Search} />
              <AiOutlineSearch size={30}/>
              </div>
          </div>
            {this.props.children}
        </main>
        <footer>

        </footer>
        </section>
    )
  }
}
