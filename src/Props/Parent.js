import React, { Component } from 'react'
import Children from './Children'
import src from '../img/unnamed.jpg'

export default class Parent extends Component {
    Shoe = {
        name: 'Giay nam dep',
        img: src,
        price: 100,
        content: 'Giay nam sieu re',
        size: [21, 22, 23, 24]
    }

    renderSize = () => {
        return (
            this.Shoe.size.map((size, index) => {
                return (
                    <button key={index} className = 'btn  btn-outline-primary ml-2'> {size}</button>
                )
            })
        )
    }

    showAlert = () => {
        alert('Add to card success!!')
    }
    render() {
        return (
            <div className = "container ">
                <h3 className="display-4 mb-4"> Demo props databinding</h3>
                <Children dataShoe={this.Shoe} renderSize={this.renderSize} showAlert = {this.showAlert} />
            </div>
        )
    }
}
