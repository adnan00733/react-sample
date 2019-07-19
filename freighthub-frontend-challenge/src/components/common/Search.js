import React,{ Component } from 'react';
import { connect } from 'react-redux';
class Search extends Component {
    state = {};
    handleSubmit = (e) => {
        e.preventDefault();
        
        if(this.state.search.length > 0) {
            this.props.searchShipping(this.state.search);
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]:  e.target.value,
        });
    }
    render() {
       
        return (
            <div className="shipment-detail">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="search" placeholder="Enter shipment id...." onChange={this.handleChange} />
                    <button type="submit" className="button">Submit</button>
                </form>
            </div>
        )
    }
}

const mapStatToProps = ( state, ownProps ) => {
    return {
        shipments: state.shipments,
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        searchShipping: (search) => {
            dispatch({type:'searchShipping', search:search})
        }
    }

}
export default connect(mapStatToProps,mapDispatchToProps)(Search);