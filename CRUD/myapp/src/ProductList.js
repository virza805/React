import React, { Component } from 'react'

class ProductList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEdit: false
        };

        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
    }
    
    onDelete() {
        const { onDelete, name} = this.props;

        onDelete(name);
    }

    onEdit() {
        this.setState({ isEdit: true });
    }

    onEditSubmit(event) {
        event.preventDefault();

        this.props.onEditSubmit(this.nameInput.value, this.rollInput.value, this.numberInput.value, this.props.name);
    }

    render() {
        const { name, roll, number } = this.props;
        
        return (
            <div>
            {
            
                this.state.isEdit
                ? (
                <form onSubmit={this.onEditSubmit}>
                    
                    <input type="text" ref={nameInput => this.nameInput = nameInput} defaultValue={name} placeholder="StudentName"/>

                    <input type="text" ref={rollInput => this.rollInput = rollInput} defaultValue={roll} placeholder="Roll"/>

                    <input type="text" required ref={numberInput => this.numberInput = numberInput} defaultValue={number} placeholder="Number"/>

                    <button>Save</button>
                </form>
                
                )
                : (
            
                <tr>
                    <th scope="row">1</th>
                    <td>{name}</td>
                    <td>{roll}</td>
                    <td>{number}</td>
                    <td className="btn btn-success" onClick={this.onEdit}>Edit</td>
                    <td className="btn btn-danger ml-1" onClick={this.onDelete}>Delet</td>
                </tr>
                )
            }
            </div>
        );
    }
}
export default ProductList;