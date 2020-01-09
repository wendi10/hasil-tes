import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

// action redux
import UniversityActions from '../Redux/UniversityRedux'

// component
import UniversityCard from '../Components/UniversityCard';
import Navbar from '../Components/Navbar'
import FetchingFailure from '../Components/FetchingFailure'

// util
import isEmpty from 'lodash/isEmpty'
import Loader from 'react-loader-spinner'

class HomeWrap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            university: null,
            selectedFilter: null,
            searchKeyword: null,
            err: null
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            university: nextProps.university,
            err: nextProps.university.err
        }
    }

    onSearch = event => {
        const { selectedFilter } = this.state
        event.preventDefault()
        let searchKeyword = event.target.value
        this.setState({ searchKeyword })

        let data = {
            name: searchKeyword
        }

        if (!isEmpty(selectedFilter)) {
            data = { ...data, country: selectedFilter }
        }

        this.props.getUniversity(data)
    };

    selectFilter = (selected) => {
        const { searchKeyword } = this.state
        let data = { country: selected }
        this.setState({
            selectedFilter: selected
        })
        if (!isEmpty(searchKeyword)) {
            data = { ...data, name: searchKeyword }
        }
        this.props.getUniversity(data)
    }

    resetFilter = () => {
        const { searchKeyword } = this.state
        this.setState({
            selectedFilter: ''
        })
        let data = {}
        if (!isEmpty(searchKeyword)) {
            data = { ...data, name: searchKeyword }
        }
        this.props.getUniversity(data)
    }

    componentDidMount() {
        let data = {}
        this.props.getUniversity(data)
    }

    render() {
        const university = this.state.university.university

        let country = []
        if (!isEmpty(university)) {
            university.payload.map((data) => {
                country.push(data.country)
                return null
            })
        }
        let filterCountry = ['all']
        filterCountry = country.filter((item, index) => country.indexOf(item) === index)

        return (
            <Fragment>
                <Navbar filterCountry={filterCountry} onSearch={this.onSearch} selectFilter={this.selectFilter} selectedFilter={this.state.selectedFilter} resetFilter={this.resetFilter} />
                {
                    !isEmpty(university) && !isEmpty(university.payload) && !this.state.university.fetching
                        ? <UniversityCard university={university.payload} />
                        : university && university.payload.length === 0 && !this.state.university.fetching
                            ? <center><h4 className='margin-top'>Universitas tidak ditemukan</h4></center>
                            : <Fragment>
                                <div style={{ marginTop: '200px' }}>
                                    <center>
                                        {
                                            !isEmpty(this.state.err)
                                                ? <FetchingFailure err={this.state.err} />
                                                : <Loader
                                                    type="Puff"
                                                    color="#ccc"
                                                    height={100}
                                                    width={100}
                                                />
                                        }
                                    </center>
                                </div>
                            </Fragment>
                }
            </Fragment>
        )
        // else if() {
        //     <center><a>Refresh Page</a></center>
        // }
    }
}
const mapStateToProps = (state) => ({
    university: state.university
})

const mapDispatchToProps = (dispatch) => ({
    getUniversity: (data) => dispatch(UniversityActions.universityRequest(data)),
    searchUniversity: (keyword) => dispatch(UniversityActions.searchRequest(keyword))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeWrap)