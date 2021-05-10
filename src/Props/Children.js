import React, { Component } from 'react'

export default class Children extends Component {
    render() {

        let { img, name, price } = this.props.dataShoe;
        return (
            <div>
                <div className="card col-4" style={{ border: 'none' }}>
                    <img className="card-img-top" src={img} alt={name} style={{ width: '250px', height: '250px' }} />
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text">Price : {price}$</p>
                        <p>Size: {this.props.renderSize()}</p>

                        <button className='btn btn-success' onClick={() => { this.props.showAlert() }}>Add to card</button>
                    </div>
                </div>

            </div>
        )
    }
}
