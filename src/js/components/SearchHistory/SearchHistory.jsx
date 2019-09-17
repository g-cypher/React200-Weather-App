import React from 'react';

export default class SearchHistory extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { searchHistory } = this.props;
        return(
        
        <div className='card'>
            <h5 className='card-header bg-dark text-light'>Search History</h5>
            <div className='card-body'>
                <table className='table'>
                    <tbody>
                    {
                        searchHistory.map((search, i) => (
                            <tr key={ i }>
                                <td>{ search.name }</td>
                                <td>{ search.date }</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>

        );
    }
}
