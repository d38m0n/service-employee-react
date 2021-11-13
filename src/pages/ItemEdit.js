import React, {Component} from 'react';
class ItemEdit extends Component {
    state ={
        currentyClient:"",
        item:[{
            "id": 1,
            "voivodeship": "Łódzkie",
            "location": "CODO",
            "city": "Łódź",
            "zipCode": "91-342",
            "street": "Strykowska 22",
            "apmNumber": "PLES202422Z0032",
            "columnID": "11914",
            "instStatus": "Ready for Review"
        },
        {
            "id": 2,
            "voivodeship": "Łódzkie",
            "location": "CODO",
            "city": "Piotrków",
            "zipCode": "94-443",
            "street": "Kusocińskiego 1",
            "apmNumber": "PLES2423406Z0138",
            "columnID": "206936",
            "instStatus": "Ready for Review"
        }],
        isLoaded: true,
       }
    ViewItemPage = (props) => (
        <>
            <div>{props.item.apmNumber}</div>
            <div>{props.item.columnID}</div>
            <div>{props.item.location}</div>
            <div>{props.item.city}</div>
            <div>{props.item.street}</div>
            <div>{props.item.instStatus}</div>
        </>
        )
    intemFind = () =>{
        let itemSearch = this.state.item
       itemSearch = itemSearch
        .filter(i => 
           i.apmNumber.toLowerCase().includes(this.props.match.params.id.toLowerCase()))
        .map(i => <this.ViewItemPage item={i}/> )

        return itemSearch;
    }


   render() {
 
    
    return (   
        <div> Edit Page
           {this.intemFind()}
        </div>
            );
   }

}
 
export default ItemEdit;  