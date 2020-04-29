import React, { Component } from 'react'

class ContactForm extends Component {
    constructor(props){
        super(props);
        this.initialState = {
            name: '',
            email: '',
            city: 'Dhaka',
            message: ''
        }
        this.state = this.initialState;
        this.handeleSubmit = this.handeleSubmit.bind(this);
        this.handeleChange = this.handeleChange.bind(this);
    }

    handeleChange(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    handeleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.setState(this.initialState);
        //console.log(this.state);
        
    }
    render() {
        return (
            <div>
                <h2>Contact Form</h2>
                <form onSubmit={this.handeleSubmit}>
                    <div>
                        Name:
                        <input type="text" name="name" value={this.state.name} onChange={this.handeleChange} />
                    </div>
                    <div>
                        Email:
                        <input type="text" name="email" value={this.state.email} onChange={this.handeleChange} />
                    </div>
                    <div>
                        City:
                        <select name="city" value={this.state.city} onChange={this.handeleChange}>

                        <option value="">Select City...</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="New Delhi">New Delhi</option>
                        <option value="Chennai">Chennai</option>
                        </select>
                    </div>
                    <div>
                        Message:
                        <textarea name="massage" value={this.state.massage} onChange={this.handeleChange} />
                    </div>
                    <div><button type="submit">Send Message</button></div>
                </form>
            </div>
        )
    }
}
export default ContactForm;