import * as React from 'react';
import InputAddress from './Content';

export class DisplayMapClass extends React.Component {
  constructor(props){
      super(props);
  }
  mapRef = React.createRef();

  state = {
    // The map instance to use during cleanup
    map: null,
    address: "flinders street station"
  };

  componentDidMount() {
    const H = window.H;
    const platform = new H.service.Platform({
        apikey: "YM826tD42pCGUoAt6EJkIa9wXMJFQfb8RJWFSYcQ3Z0"
    });

    const defaultLayers = platform.createDefaultLayers();

    // Create an instance of the map
    const map = new H.Map(
      this.mapRef.current,
      defaultLayers.vector.normal.map,
      {
        // This map is centered over Europe
        center: { lat: -37.840935, lng: 144.946457 },//{lat: 50, lng: 5},
        zoom: 8,
        pixelRatio: window.devicePixelRatio || 1
      }
    );

    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    const ui = H.ui.UI.createDefault(map, defaultLayers);
 
    this.setState({ map });

    // Get an instance of the geocoding service:
    var service = platform.getSearchService();
    // Call the geocode method with the geocoding parameters,
    // the callback and an error callback function (called if a
    // communication error occurs):
    service.autosuggest({
            q: this.props.address==""?"flinders street station":this.props.address,
            at: '-37.840935,144.946457'
        }, (result) => {
          /*
          // Add a marker for each location found
          result.items.forEach((item) => {
              //if(!item.address.label.includes(this.props.address)){
              //  map.removeObject(new H.map.Marker(item.position));
              //}
          map.addObject(new H.map.Marker(item.position));
        });
        */
        // only show the first one in all results
        map.addObject(new H.map.Marker(result.items[0].position)); 
          }, alert);
  }

  componentWillUnmount() {
    // Cleanup after the map to avoid memory leaks when this component exits the page
    this.state.map.dispose();
  }

  render() {
    return (
      // Set a height on the map so it will display
      <div>
      <div ref={this.mapRef}  style={{ height: "90vh" }} />
      </div>
    );
  }
}
