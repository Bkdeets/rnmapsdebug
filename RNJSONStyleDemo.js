import React from 'react';
import { Text, StyleSheet } from 'react-native';
import MapboxGL from '@rnmapbox/maps';

import StyleJsonExample from '../../assets/style-json-example.json';
import BaseExamplePropTypes from '../common/BaseExamplePropTypes';
import Page from '../common/Page';
import Bubble from '../common/Bubble';

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

const defaultCamera = {
  centerCoordinate: [-78.54382, 40.446947],
  zoomLevel: 3,
  minZoomLevel: 3,
};

class StyleJson extends React.Component {

  render() {
    return (
      <Page {...this.props}>
        <MapboxGL.MapView styleURL={MapboxGL.StyleURL.Light} style={styles.map}>
          <MapboxGL.Camera defaultSettings={defaultCamera} />
          <MapboxGL.Style
            json={
              StyleJsonExample
            }
          />
        </MapboxGL.MapView>
      </Page>
    );
  }
}

export default StyleJson;