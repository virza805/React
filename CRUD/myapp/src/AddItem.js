import React, { Component } from 'react'

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();

        this.props.onAdd(this.nameInput.value, this.rollInput.value, this.numberInput.value );
        
        this.nameInput.value = '';
        this.rollInput.value = '';
        this.numberInput.value = '';
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h3>Add Student</h3>
                <input type="text" ref={nameInput => this.nameInput = nameInput}  placeholder="StudentName"/>

                <input type="text" ref={rollInput => this.rollInput = rollInput} placeholder="Roll"/>

                <input type="text" required ref={numberInput => this.numberInput = numberInput} placeholder="Number"/>

                <button>Add</button>
                <hr/>
                
            </form>
        )
    }
}
export default AddItem;