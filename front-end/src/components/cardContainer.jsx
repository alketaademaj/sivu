import MediaCard from "./card"
import React, { Component } from 'react'
import axios from "axios";

//PARENT COMPONENT

export class CardContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            productlist: []
       }
    }

    // function arrow(parameter) {
        //console.log(parameter)
    //}
    // const arrow = (name) => { this is what happens in the componentDidMound
        //console.log(name)
    //}
    // arrow("Tanay");

    componentDidMount() {
        axios.get('http://localhost:3000/products/')
        .then(res => this.setState({//we create an object (when we use it state) where you store the value of everything that came to the array 
            productlist: res.data
        })) //supplies what we get in return from the axios request
        .catch(err => console.log(`Error :${err}`))
    }

    goingOverProducts = () => {
         return this.state.productlist.map(theparameter => {
            return <MediaCard product = {theparameter} />; //child component, we are putting the data in the framework (card.jsx)
        })
    }

    render() {
        return (
            <div style = {{
                display: 'grid',
                gridTemplateColumns: 'auto auto auto auto',
                margin: '4px',
                }}>

            {this.goingOverProducts()}
            </div>
        )
    }
}

export default CardContainer
