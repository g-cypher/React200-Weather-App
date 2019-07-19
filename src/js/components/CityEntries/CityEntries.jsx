import React from 'react';

export default class CityEntries extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={ { marginTop: '20px', marginBottom: '20px' } }>
                <div className='btn-group' role='group' aria-label='Basic example'>
                    <button type='button' className='btn btn-primary'>San Diego</button>
                    <button type='button' className='btn btn-primary'>New York</button>
                    <button type='button' className='btn btn-primary'>Washington D.C.</button>
                    <button type='button' className='btn btn-primary'>London</button>
                    <button type='button' className='btn btn-primary'>Tokyo</button>
                </div>
                <div className='input-group mb-3'>
                    <input type='text' className='form-control' placeholder='Enter City' aria-label="Recipient's username" aria-describedby='basic-addon2' />
                    <div className='input-group-append'>
                        <button className='btn btn-outline-secondary' type='button'>Go!</button>
                    </div>
                </div>
            </div>
        );
    }
}
