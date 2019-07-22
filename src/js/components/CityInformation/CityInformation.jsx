import React from 'react';

export default class CityInformation extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { name, temp, pressure, humidity, temp_min, temp_max, speed, lon, lat } = this.props;
        return (
            <div className='card'>
                <h5 className='card-header bg-primary text-light'>City Information</h5>
                    <br></br>
                    <div className='card-body text-center '>
                        <h3 className='card-title '>{ name }</h3>
                        <h7 className='card-text'>Lat/Long { lon } / { lat }</h7>
                        
                        <div className='row'>
                            <div className='col'>
                                <h6>Temperature</h6>
                                <p>{ temp }°F</p>
                            </div>
                            <div className='col'>
                                <h6>Pressure</h6>
                                <p>{ pressure }Hg</p>
                            </div>
                            <div className='col'>
                                <h6>Humidity</h6>
                                <p>{ humidity }%</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <h6>Lowest Temp (F)</h6>
                                <p>{ temp_min }°F</p>
                            </div>
                            <div className='col'>
                                <h6>Highest Temp (F)</h6>
                                <p>{ temp_max }°F</p>
                            </div>
                            <div className='col'>
                                <h6>Wind Speed</h6>
                                <p>{ speed }mph</p>
                            </div>
                        </div>
                    </div>
                    
                
            </div>
        );
    }
}
