import React, { Component } from 'react'
import axios from 'axios'

export default class LatestPhotos extends Component {

        state = {
            photos: [],
            page: 1,
            loading: true,
            search_query: '',
            searching: false
        }

        componentDidMount(){
            axios.get('https://api.unsplash.com/photos/?client_id=SG1Bjx_Aj0xRZeMDwNVXDXGj3NsePF8f-NfhcqW7zFo&per_page=15&page='+ this.state.page).then(
              res => this.setState({
                  photos: res.data,
                  loading:false,
                  page: this.state.page +1

                })
              
            )
            window.scrollTo({
                top:0,
                behavior:'smooth',
            })

          }
        
        loadNextPage = (e) => {

            axios.get('https://api.unsplash.com/photos/?client_id=SG1Bjx_Aj0xRZeMDwNVXDXGj3NsePF8f-NfhcqW7zFo&per_page=15&page='+ this.state.page).then(
              res => this.setState({
                  photos: res.data,
                  loading:false,
                  page: this.state.page +1
                })
              
            )
            window.scrollTo({
                top:0,
                behavior:'smooth',
            })

        }
        
        searchQuery = (e) => {
            this.setState({
                search_query: e.target.value
            })
            
        }
        searchTrigger = (e) => {
            axios.get('https://api.unsplash.com/search/photos/?client_id=SG1Bjx_Aj0xRZeMDwNVXDXGj3NsePF8f-NfhcqW7zFo&query='+ this.state.search_query +'&per_page=15&page='+ this.state.page).then(
              res => this.setState({
                  photos: res.data.results,
                  loading:false,
                  page: 2,
                  searching: true,
                  total_found: res.data.total,
                  total_found_pages: res.data.total_pages
                })
                
            )
            e.preventDefault();
        }

        loadNextSearchPage = (e) => {

            axios.get('https://api.unsplash.com/search/photos/?client_id=SG1Bjx_Aj0xRZeMDwNVXDXGj3NsePF8f-NfhcqW7zFo&query='+ this.state.search_query +'&per_page=15&page='+ this.state.page).then(
              res => this.setState({
                  photos: res.data.results,
                  loading:false,
                  page: this.state.page +1,
                  searching: true,
                  total_found: res.data.total,
                  total_found_pages: res.data.total_pages
                })
              
            )
            window.scrollTo({
                top:0,
                behavior:'smooth',
            })

        }

    render() {

        var searchHeadin = '';
        var searchBtnMarkup = '';
        var searchinfo = '';
        if(this.state.searching ===true){
            searchHeadin = <h2>You searched with <i>{this.state.search_query}</i></h2>
            searchBtnMarkup = <button className="btn btn-success" onClick={this.loadNextSearchPage}>Load Page {this.state.page} </button>
        searchinfo = <span>Total found {this.state.total_found} | Page {this.state.page -1} of {this.state.total_found_pages}</span>;
        } else{
            searchHeadin = <h2>Latest Photos</h2>
            searchBtnMarkup = <button className="btn btn-success" onClick={this.loadNextPage}>Load Page {this.state.page} </button>
            searchinfo = '';
        }
        if(this.state.loading === true ){
            return (
                <div className="col text-center">Loading</div>
            )
        }
        return(
            <React.Fragment>
                <div className="row top-heading">
                    <div className="col my-auto">{searchHeadin} {searchinfo}</div>
                    <div className="col col-auto my-auto">
                        <form onSubmit={this.searchTrigger} action="">
                            <input type="text" value={this.state.search_query} onChange={this.searchQuery} placeholder="Search keyword"/>
                            <input type="submit" value="search"/>
                        </form>
                    </div>
                </div>
                
                <div className="row">
                    
                
                
                {
                    this.state.photos.map((photo) => (
                        <div key={photo.id} className="col-lg-4">
                            <div className="single-photo-item">
                                <a className="d-block" href={"photo?id=" + photo.id} >
                                    <div className="photo-wrapper">
                                        <img src={photo.urls.small} alt={photo.description}/>
                                    </div>
                                    <h5>{photo.alt_description}</h5>
                                    <p className="cat-name">by - {photo.user.first_name} {photo.user.last_name}</p>
                                </a>
                            </div>
                        </div>
                    ))
                }

                </div>


                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="load-more-btn">{searchBtnMarkup}</div>
                    </div>
                </div>
            </React.Fragment>
        )
        
       
    }
}
