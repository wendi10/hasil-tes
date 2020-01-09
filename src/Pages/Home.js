import React, { Component } from 'react'
import HomeWrap from '../Containers/HomeWrap';

class Index extends Component {
    render () {
        return (
            <div >
                {/* <section className='menu-section'>
                    <nav className='nav menu'>
                        <ul>
                            <li>
                                <a href='/'>Liku</a>
                            </li>
                            <li>
                                <input type='text' placeholder='Search Here'></input>
                            </li>
                            <li><a>Contact Us</a></li>
                        </ul>
                    </nav>
                </section> */}
                    <HomeWrap />
            </div>
        )
    }
}

export default Index