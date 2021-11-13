import React, {Component} from 'react';
import Tbody from '../components/ServiceTBody';
import '../styles/ServiceHome.css'

class HomeService extends Component {
    state = {
        tekst: "",
        items: [{
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
            }

        ],
        isLoaded: true,
    }
    onClickChange = (e) => {
        console.log(e.target.value);
        this.setState(
            {
                tekst: e.target.value.toLowerCase()
            }
        )
    }
    intemList = () => {
        let itemSearch = this.state.items
        itemSearch = itemSearch
            .filter(i =>
                i.columnID.toLowerCase().includes(this.state.tekst) ||
                i.city.toLowerCase().includes(this.state.tekst) ||
                i.street.toLowerCase().includes(this.state.tekst) ||
                i.instStatus.toLowerCase().includes(this.state.tekst) ||
                i.apmNumber.toLowerCase().includes(this.state.tekst) ||
                i.voivodeship.toLowerCase().includes(this.state.tekst))
            .map(i => <Tbody item={i}/>)
        return itemSearch;
    }


    render() {
        return (
            <div className="homeService">
                <input placeholder="Find APM" onChange={this.onClickChange}/>
                <table>
                    <thead>
                    <tr>
                        <th>APM Number</th>
                        <th>Orlen ID</th>
                        <th>Voivodeship</th>
                        <th>City</th>
                        <th>Street</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.intemList()}
                    </tbody>
                </table>


            </div>
        )
    }
}

export default HomeService;