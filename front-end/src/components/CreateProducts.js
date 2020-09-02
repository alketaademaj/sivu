import React, { Component } from 'react'
import axios from "axios";

export class CreateProducts extends Component {
    constructor(props) {
        super(props)

        this.onProductnameChange = this.onProductnameChange.bind(this);
        this.onPriceChange=this.onPriceChange.bind(this);
        this.onColorChange=this.onColorChange.bind(this);
        this.onSizeChange=this.onSizeChange.bind(this);
        this.onStockChange=this.onStockChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        
        this.state = {
             productname:"",
             price:0,
             color:"",
             stock:0,
             size:"",
        }
    }
    onProductnameChange(e){
        this.setState({
            productname:e.target.value,
        })
    }
    onPriceChange(e){
        this.setState({
            price:e.target.value,
        })
    }
    onColorChange(e){
        this.setState({
            color:e.target.value,
        })
    }
    onSizeChange(e){
        this.setState({
            size:e.target.value,
        })
    }
    onStockChange(e){
        this.setState({
            stock:e.target.value,
        })
    }
    onSubmit(e){
        e.preventDefault();

        const product={
            name:this.state.productname,
            price:this.state.price,
            color:this.state.color,
            size:this.state.size,
            stock:this.state.stock
        }
        console.log(product);
        axios.post("http://localhost:3000/products/add",product)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(`Error :${err}`)); //YAAAAY 
    }
    render() {
        return (
            <div>
                <h3>Create New Product</h3>
                <form className="mt-4 text-left" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="productname">Product name:</label>
                        <input type="text" className="form-control" id="productname" placeholder="Product name" onChange={this.onProductnameChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price:</label>
                        <input type="number" className="form-control" id="price" placeholder="Price" onChange={this.onPriceChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="color">Colour:</label>
                        <input type="text" className="form-control" id="color" placeholder="Color" onChange={this.onColorChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="stock">Stock:</label>
                        <input type="number" className="form-control" id="stock" placeholder="Stock" onChange={this.onStockChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="size">Size:</label>
                        <input type="text" className="form-control" id="size" placeholder="Size" onChange={this.onSizeChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default CreateProducts