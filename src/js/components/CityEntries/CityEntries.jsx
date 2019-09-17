/* eslint-disable max-len */
import React from 'react';
import '../../../css/cityEntries.css';

import {
    updateSearchBar,
    getWeather
} from './entriesActions';

export default class CityEntries extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleGetWeather = this.handleGetWeather.bind(this);
    this.handleGetWeatherFromInput = this.handleGetWeatherFromInput.bind(this);
  }
  handleSearchInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateSearchBar(value));
  }

  handleGetWeather(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(getWeather(value));
  }

  handleGetWeatherFromInput() {
    const { dispatch, city } = this.props;
    dispatch(getWeather(city));
  }

  render() {
    const { city } = this.props;
    return (
        <div style={ { marginTop: '20px', marginBottom: '20px' } }>
            <div className='btn-group' role='group' aria-label='Basic example'>
                <button type='button' className='btn bg-dark text-light' onClick={ this.handleGetWeather } value='San Diego'>San Diego</button>
                <button type='button' className='btn bg-dark text-light' onClick={ this.handleGetWeather } value='New York'>New York</button>
                <button type='button' className='btn bg-dark text-light' onClick={ this.handleGetWeather } value='Washington'>Washington</button>
                <button type='button' className='btn bg-dark text-light' onClick={ this.handleGetWeather } value='London'>London</button>
                <button type='button' className='btn bg-dark text-light' onClick={ this.handleGetWeather } value='Tokyo'>Tokyo</button>
            </div>
            <div className='input-group mb-3'>
                <input type='text' className='form-control' placeholder='Enter City' aria-label="Recipient's username" aria-describedby='basic-addon2' value={ city } onChange={ this.handleSearchInput } />
                <div className='input-group-append'>
                    <button className='btn btn-info' type='button' onClick={ this.handleGetWeatherFromInput }>Go!</button>
                </div>
            </div>
        </div>
    );
}
}
