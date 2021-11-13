import React from 'react'
import {Link} from 'react-router-dom'

const Tbody = (props) => {
    return (

        <tr key={props.item.id}>
            <td>{props.item.apmNumber}</td>
            <td>{props.item.columnID}</td>
            <td>{props.item.voivodeship}</td>
            <td>{props.item.city}</td>
            <td>{props.item.street}</td>
            <td>{props.item.instStatus}</td>
            <td>
                <Link to={`/item/${props.item.apmNumber}`}> <i class="far fa-id-badge"></i></Link>
                <Link to={`/edit/${props.item.apmNumber}`}> <i class="fas fa-cogs"></i></Link>

            </td>
        </tr>
    );
}

export default Tbody;
