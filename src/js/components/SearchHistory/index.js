import { connect } from 'react-redux';
import SearchHistory from './SearchHistory';

function mapStoreToProps(store) {
    return {
        searchHistory: store.entries.searchHistory
    };
}
export default connect(mapStoreToProps)(SearchHistory);
