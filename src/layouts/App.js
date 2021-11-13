import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import ServiceHeader from './ServiceHeader';
import ServiceNavigation from './ServiceNavigation';
import ServiceTable from './ServiceMain';
import ServiceFooter from './ServiceFooter';
import "../styles/App.css"

class App extends Component {
    state = {
        currentyClient: "",
        item: [{
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


    fetchData = () => {
        fetch("http://localhost:8080/rest/items")

            .then(async response => {
                const data = await response.json();
                if (!response.ok) {
                    throw Error(response.status);
                }

                this.setState({
                    clients: data,
                    isLoaded: true
                })
            })
            .catch(err => console.log(err.message));

    }


    render() {


        return (
            <Router>
                <div className="app">
                    <header>
                        {<ServiceHeader/>}
                    </header>
                    <main className="serviceMain">

                        <aside className="serviceAside">
                            {<ServiceNavigation/>}
                        </aside>
                        <section className="serviceSection">
                            {<ServiceTable items={this.state.item}/>}
                        </section>
                    </main>
                    <footer className="serviceFooter">
                        {<ServiceFooter/>}
                    </footer>
                </div>
            </Router>

        );
    }
}

export default App;