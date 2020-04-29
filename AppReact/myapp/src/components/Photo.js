import React, { Component } from 'react';
import axios from 'axios';

export default class Photo extends Component {

    state = {
        photo:[],
        loading: true
    }
    componentDidMount(){
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let photo_id = params.get('id');
        
        axios.get('https://api.unsplash.com/photos/'+ photo_id +'/?client_id=SG1Bjx_Aj0xRZeMDwNVXDXGj3NsePF8f-NfhcqW7zFo').then(
          res => this.setState({
              photo: res.data,
              loading:false

            })
          
        );

      }

    render() {
        console.log(this.state.photo);
        var photo = this.state.photo;
        
        return (
            <div>
                <div className="photo-single-wrapper">
                    <div className="photo-single-info col-lg-4">
                        {photo.alt_description ? <h3>{photo.alt_description}</h3> : ''}
                        <p> {photo.description && photo.description} </p>

                        <ul>
                            <li><label htmlFor="uploaded_by">Uploaded by - </label> <b> 
                            {photo.user && photo.user.first_name} {photo.user && photo.user.last_name}</b>
                            </li>
                            <li><label htmlFor="upload_location">Location Title - </label><b> {photo.location && photo.location.title} </b> </li>
                            <li><label htmlFor="country">Country- </label> <b>{photo.location && photo.location.country} </b></li>

                            {photo.updated_at ? <li><label htmlFor="upload_date">Date - </label>{photo.updated_at}</li> : ''}
                            
                            
                            <li><label htmlFor="camera">Camera Brand - </label> {photo.exif && photo.exif.make} </li>

                            <li><label htmlFor="camera_model">Camera Model - </label>
                             {photo.exif && photo.exif.model}
                            </li>
                            <li><label htmlFor="iso">ISO - </label> {photo.exif && photo.exif.iso} </li>
                        </ul>

                        <a className="btn btn-success" target="_blank" rel="noopener noreferrer" href={photo.links && photo.links.download} download >Download</a>
                    </div>
                    <img src={photo.urls && photo.urls.full} alt={photo.description}/>
                </div>
            </div>
        )
    }
}
