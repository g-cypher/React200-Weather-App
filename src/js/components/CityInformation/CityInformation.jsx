import React from 'react';

export default class CityInformation extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='card'>
                <h5 className='card-header bg-primary text-light'>City Information</h5>
                    <br></br>
                    <div className='card-body text-center '>
                        <h3 className='card-title '>Tokyo</h3>
                        <h7 className='card-text'>Lat/Long 35.69 / 139.65</h7>
                        
                        <div className='row'>
                            <div className='col'>
                                <h6>Temperature</h6>
                                <p>65.65F</p>
                            </div>
                            <div className='col'>
                                <h6>Pressure</h6>
                                <p>65.65F</p>
                            </div>
                            <div className='col'>
                                <h6>Humidity</h6>
                                <p>65.65F</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <h6>Lowest Temp (F)</h6>
                                <p>65.65F</p>
                            </div>
                            <div className='col'>
                                <h6>Highest Temp (F)</h6>
                                <p>65.65F</p>
                            </div>
                            <div className='col'>
                                <h6>Wind Speed</h6>
                                <p>25.65mph</p>
                            </div>
                        </div>
                    </div>
                    
                
            </div>
        );
    }
}
