import React, { Component } from 'react'
import axios from 'axios'

const Alketa = props => (
    <tr>
        <td>{props.product.name}</td>
        <td>{props.product.price}</td>
        <td>{props.product.discountPercentage}</td>
        <td>{props.product.color}</td>
        <td>{props.product.size}</td>
         <td>
                <button className="btn btn-sm btn-danger" onClick={() => {props.deleteProducts(props.product._id) }}>Delete</button>
                <button className="btn btn-sm btn-success" onClick={() => window.location = `/products/${props.product._id}`}>Update</button>
        </td>
    </tr>
)

export class SalesList extends Component {

    constructor(props) {
        super(props)
        
        this.deletetheseProducts = this.deletetheseProducts.bind(this);

        this.state = {
            products: []
        };
    }
    
    componentDidMount() {
        axios.get('http://localhost:3000/products/')
        .then(rs => {
               this.setState({
                products: rs.data
            })
                console.log(rs.data)
                })
        .catch(error => {
            console.log(error);
        })
    }

    deletetheseProducts(id) { 
        axios.delete('http://localhost:3000/products/'+id)
        .then(res => console.log(res.data));

        this.setState({
            products: this.state.products.filter(el => el._id !== id)
        })
    }

    ShowingSalesList(){
        return this.state.products.filter(currentProd=>currentProd.discountPercentage>0).map(currentProduct => {
            return <Alketa product={currentProduct} deleteProducts={this.deletetheseProducts} key={currentProduct._id} />; //passing the method as a property 
        })
    }

    render() {
        return (
            <div>
                <h3>Here are the products, that are on sales</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Discount price</th>
                            <th>Color</th>
                            <th>Size</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.ShowingSalesList() }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default SalesList
