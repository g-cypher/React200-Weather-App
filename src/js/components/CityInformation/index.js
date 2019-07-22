import { connect } from 'react-redux';
import CityInformation from './CityInformation';

function mapStoreToProps(store) {
    return {
        name: store.entries.name,
        temp: store.entries.temp,
        pressure: store.entries.pressure,
        humidity: store.entries.humidity,
        temp_min: store.entries.temp_min,
        temp_max: store.entries.temp_max,
        speed: store.entries.speed,
        lon: store.entries.lon,
        lat: store.entries.lat

    };
}
export default connect(mapStoreToProps)(CityInformation);
