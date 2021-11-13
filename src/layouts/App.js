import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import ServiceHeader from './ServiceHeader';
import ServiceNavigation from './ServiceNavigation';
import ServiceTable from './ServiceMain';
import ServiceFooter from './ServiceFooter';
import "../styles/App.css"
class App extends Component {
  state ={
    currentyClient:"",
    item:[{
      "id": 1,
      "voivodeship": "Łódzkie",
      "location": "CODO",
      "city": "Łódź",
      "zipCode": "91-614",
      "street": "Strykowska 38",
      "apmNumber": "PLES202106Z0032",
      "contactPerson": "Piotr Kałużny",
      "phoneNumber": "609361684",
      "columnID": "119175",
      "instStatus": "Ready for Review"
  },
  {
      "id": 2,
      "voivodeship": "Łódzkie",
      "location": "CODO",
      "city": "Łódź",
      "zipCode": "94-054",
      "street": "Kusocińskiego 141",
      "apmNumber": "PLES202106Z0138",
      "contactPerson": "Piotr Kałużny",
      "phoneNumber": "609361684",
      "columnID": "206936",
      "instStatus": "Ready for Review"
  },
  {
      "id": 3,
      "voivodeship": "Mazowieckie",
      "location": "CODO",
      "city": "Pruszków",
      "zipCode": "05-800",
      "street": "Bohaterów Warszawy 7",
      "apmNumber": "PLES202106Z0080",
      "contactPerson": "Piotr Kałużny",
      "phoneNumber": "609361684",
      "columnID": "351546",
      "instStatus": "Ready for Review"
  },
  {
      "id": 5,
      "voivodeship": "Łódzkie",
      "location": "CODO",
      "city": "Łódź",
      "zipCode": "91-041",
      "street": "Lutomierska 143",
      "apmNumber": "PLES202106Z0105",
      "contactPerson": "Piotr Kałużny",
      "phoneNumber": "609361684",
      "columnID": "242940",
      "instStatus": "Ready for Review"
  },
  {
      "id": 6,
      "voivodeship": "Łódzkie",
      "location": "CODO",
      "city": "Łódź",
      "zipCode": "93-272",
      "street": "Rydza Śmigłego 43",
      "apmNumber": "PLES202106Z0103",
      "contactPerson": "Piotr Kałużny",
      "phoneNumber": "609361684",
      "columnID": "257114",
      "instStatus": "Ready for Review"
  }],
    isLoaded: true,
   }
   

fetchData = () => {
       fetch("http://localhost:8080/rest/items")
         
        .then(async response => {
           const data = await response.json();
           if (!response.ok){
               throw Error (response.status);
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