import { StyleSheet, View, Button, Text, TextInput } from "react-native";
import { getTileset } from "./TilesetAPI.service";
import React, { useEffect, useState } from "react";
import MapboxGL from "@rnmapbox/maps";
import { useNetInfo } from "@react-native-community/netinfo";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styleDemo from "./style-demo.json"
import styleDemo2 from "./style-demo-2.json"

const defaultCamera = {
    centerCoordinate: [-78.54382, 40.446947],
    zoomLevel: 3,
    minZoomLevel: 3,
  }

const styles = StyleSheet.create({
	page: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	container: {
		height: 300,
		width: 300,
	},
	map: {
		flex: 1,
	},
	button: {
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: "black",
	},
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
});

const TilesetDownload = ({ navigation }) => {
	const [tilesetId, onChangeText] = React.useState("tilesetId");
	const [tileJSON, setTileJSON] = React.useState(null);
    const netInfo = useNetInfo();
	return (
		<View style={styles.page}>
			<View>
				<Text>Type: {netInfo.type}</Text>
				<Text>Is Connected? {netInfo.isConnected?.toString()}</Text>
			</View>
			<TextInput
				style={styles.input}
                placeholder="Input tileset id"
				onChangeText={onChangeText}
				value={tilesetId}
			/>
			
			<Button
				onPress={async () => {
					const result = await getTileset(tilesetId.toLocaleLowerCase());
                    console.log('setting data', result.data)
					setTileJSON(result.data);
				}}
				title="Dowload and Display"
				style={styles.button}
			/>
			<View style={styles.container}>
				<MapboxGL.MapView
					style={styles.map}
                    // styleJSON={JSON.stringify(styleDemo)}
					zoomEnabled={true}
				>
					{/* <MapboxGL.Camera
						zoomLevel={8}
						centerCoordinate={[-159.524478, 22.02088]}
					></MapboxGL.Camera> */}
                    <MapboxGL.Camera defaultSettings={defaultCamera}></MapboxGL.Camera>
                    
                    <MapboxGL.Style
                        json={styleDemo2}
                    />
				</MapboxGL.MapView>
			</View>
		</View>
	);
};

export default TilesetDownload;
