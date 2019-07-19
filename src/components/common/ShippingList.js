import React from 'react';
import Cargo from '../Cargo';
import { Link } from 'react-router-dom';
const ShippingList = ({shipments}) => {
    const shipmentLists = shipments.length ? (
        shipments.map(shipment => {
            return (   
                
                <tr key={shipment.id}>
                    <td>{shipment.id}</td>
                    <td>{shipment.mode}</td>
                    <td>{shipment.name}</td>
                    <td>{shipment.origin}</td>
                    <td>{shipment.status}</td>
                    <td>{shipment.total}</td>
                    <td>{shipment.type}</td>
                    <td>{shipment.userId}</td>
                    <td><Cargo cargo={ shipment.cargo }/></td>
                    <td>Services</td>
                    <td><Link to={'/' + shipment.id}>View</Link></td>
                        
                </tr>
                
            )
        })
    ) : (
        <tr><td colSpan="9">No data found!</td></tr>
    );
    return(
        <tbody>{shipmentLists}</tbody>
    )
}

export default ShippingList;