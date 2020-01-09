import React, { Component, Fragment } from 'react'

class UniversityCard extends Component {
    render() {
        const { university } = this.props

        return (
            <Fragment>
                <div className='container-card margin-top'>
                    {
                        university
                            // delete slice for display all data *limiting data for faster browser, bcs if no limit, the data 9000++
                            ? university.slice(0, 500).map((data, index) => {
                                return (
                                    <div key={index} className='card'>
                                        <div className='content-card'>
                                            <h5 className='font-weight-bold' style={{ marginBottom: '20px' }}>{data.name}</h5>
                                            <h6>{`Country : ${data.country}`}</h6>
                                            <h6>Website : </h6>
                                            <ul>
                                                {
                                                    data.web_pages.slice(0, 2).map((data, index) => {
                                                        return (
                                                            <li key={index}><a href={data} target='_blank'>{data}</a></li>
                                                        )
                                                    })
                                                }

                                            </ul>
                                        </div>
                                    </div>
                                )
                            })

                            : null
                    }

                </div>
            </Fragment>
        )
    }
}

export default UniversityCard