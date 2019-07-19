import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Shipment extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
    }
    handleChange = (e) => {
        this.props.updateShipping(this.props.shipment.id,e.target.value);
        this.setState({
            [e.target.name]:  e.target.value,
        });
    }
    render() {
        const {shipment} = this.props;
        return (
            <div className="shipment-detail" key={shipment.id}>
                <Link to="/">Back</Link>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="title" placeholder="Enter new shipment name....." onChange={this.handleChange} />
                </form>
                <h1>{shipment.name}</h1> 
                <p><b>Destination: </b>{shipment.destination}</p>
                <p><b>Mode: </b>{shipment.mode}</p>
                <p><b>origin: </b>{shipment.origin}</p>
                <p><b>status: </b>{shipment.status}</p>
                <p><b>total: </b>{shipment.total}</p>
            </div>
        )
    }
}

const mapStatToProps = (state, ownProps) => {
    let id = ownProps.match.params.id;
    return {
        shipment: state.shipments.find(shippment => shippment.id === id),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateShipping: (id,value) => {
            dispatch({type:'UpdateShipping', id: id, value:value})
        }
    }
}
export default connect(mapStatToProps,mapDispatchToProps)(Shipment);