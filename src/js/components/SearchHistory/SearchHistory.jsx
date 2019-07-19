import React from 'react';

export default class SearchHistory extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
        
        <div className='card'>
            <h5 className='card-header bg-primary text-light'>Search History</h5>
            <div className='card-body'>
                <table className='table'>
                    <tbody>
                        <tr className='d-flex'>
                            <td className='mr-auto p-2'>Mark</td>
                            <td className='p-2'>Otto</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        );
    }
}