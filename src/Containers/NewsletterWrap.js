import React, { Component } from 'react'

class NewsletterWrap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: null,
            email: null,
            country: null,
            date: new Date()
        }
    }

    render(){
        return(
            <div className='container text-center margin-top-xl'>
                <div className='row'>
                  <div className='col-xs-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6 newsletter-box margin-top'>
                        <form>
                            <div className="form-group">
                            <label>Name</label>
                            <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter name" 
                                onChange={e => {
                                    this.setState({
                                      name: e.target.value.toUpperCase()
                                    })

                                  }} />
                          </div>
                          <div className="form-group">
                            <label >Email address</label>
                            <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email"                        
                                onChange={e => {
                                    this.setState({
                                      email: e.target.value.toUpperCase()
                                    })
                                  }} />
                          </div>
                          <div className="form-group">
                            <label>Country</label>
                            <input type="text" className="form-control" placeholder="Enter country"                         
                                onChange={e => {
                                    this.setState({
                                      country: e.target.value.toUpperCase()
                                    })
                                  }} />
                          </div>
                          <a href={`data:text/JSON;charset=utf-8,${JSON.stringify(this.state)}`} className='btn btn-primary' download={`user.json`}>Submit</a>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
} export default NewsletterWrap