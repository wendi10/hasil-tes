import React, { Component } from 'react'
// util
import isEmpty from 'lodash/isEmpty'

import config from '../config'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterCountry: []
    }
  }


  static getDerivedStateFromProps(nextProps, prevState) {
    if (isEmpty(prevState.filterCountry)) {
      return {
        filterCountry: nextProps.filterCountry
      }
    } else return null

  }

  render() {
    const { selectedFilter } = this.props
    const { filterCountry } = this.state

    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href={config.baseURL}>Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse float-right" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href={config.baseURL}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={config.baseURL + 'newsletter'}>Newsletter</a>
              </li>
              {
                this.props.type === 'newsletter'
                  ? null
                  : <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Filter
                        </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <span className='padding-left-s'>By Country : </span>
                      <div className='country-scroll'>
                        {
                          !isEmpty(filterCountry)
                            ? filterCountry.map((data, idx) => {
                              return <a key={idx} className="dropdown-item" href="/#" onClick={() => { this.props.selectFilter(data) }}>{data}</a>
                            })
                            : <div> Fetching data</div>
                        }
                      </div>
                    </div>
                  </li>
              }

              {
                !isEmpty(selectedFilter)
                  ? <li className="nav-item">
                    <span className='nav-link filtered'>
                      {selectedFilter}
                      <span className='padding-left-m cursor-pointer' onClick={() => this.props.resetFilter()}><img width='16px' src='https://stupefied-lichterman-dfea71.netlify.com/refresh.png'></img></span>
                    </span>
                  </li>
                  : null
              }

            </ul>
            {
              this.props.type === 'newsletter'
                ? null
                : <form className="form-inline my-2 my-lg-0">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
                    onChange={(event) => this.props.onSearch(event)} />
                  {/* <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button> */}
                </form>
            }
          </div>
        </nav>
      </div>
    )
  }
} export default Navbar