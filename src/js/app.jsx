import React from 'react';
import CityEntries from './components/CityEntries';
import CityInformation from './components/CityInformation';
import SearchHistory from './components/SearchHistory';


export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="navbar-brand">
            <div>Weather App</div>
          </div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
        <div className='jumbotron'>
          <h1 className='display-3 text-center'>Weather App</h1>
        </div>
        <div className='row justify-content-center'>
          <CityEntries />
        </div>
        <div className='row'>
          <div className='col-12 col-md-6 mb-4'>
            <CityInformation />
          </div>
          <div className='col-12 col-md-6 mb-4'>
            <SearchHistory />
          </div>
        </div>
      </div>
    );
  }
}
