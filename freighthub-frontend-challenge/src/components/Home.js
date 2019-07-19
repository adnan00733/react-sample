import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Search from './common/Search';
import ShippingList from './common/ShippingList';
class Home extends Component {
    
    render() {
        const shipments = this.props.shipments;
        return (
            <div className="shipment-list">
                <Search />
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Mode</th>
                            <th>Name</th>
                            <th>Origin</th>
                            <th>status</th>
                            <th>total</th>
                            <th>type</th>
                            <th>User ID</th>
                            <th>Cargo</th>
                            <th>Services</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <ShippingList shipments = {shipments} />
                </table>
            </div>
        )
    }
}

const mapStatToProps = (state) => {
    return {
        shipments: state.shipments,
    }
}
export default connect(mapStatToProps)(Home);
