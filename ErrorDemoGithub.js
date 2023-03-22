// import React, { useState } from "react";
// import { StyleSheet, View, Button, Text } from "react-native";
// import MapboxGL from "@rnmapbox/maps";
// import { useNetInfo } from "@react-native-community/netinfo"; // not required

// MapboxGL.setAccessToken("");

// const STYLES = {
// 	UNDOWNLOADED: "mapbox://styles/",
// 	STYLE_1: "mapbox://styles/",
// 	STYLE_2: "mapbox://styles/",
// 	DEFAULT: "mapbox://styles/",
// };

// const ErrorDemo = () => {
// 	const [styleUrl, setStyleUrl] = useState(STYLES.DEFAULT);
// 	const netInfo = useNetInfo();

// 	const progressListener = (offlineRegion, status) =>
// 		console.log(offlineRegion, status);
// 	const errorListener = (offlineRegion, err) =>
// 		console.log(offlineRegion, err);

// 	const downloadStyle = async (name, styleURL) => {
// 		try {
// 			await MapboxGL.offlineManager.createPack(
// 				{
// 					name,
// 					styleURL,
// 					minZoom: 14,
// 					maxZoom: 20,
// 					bounds: [
// 						[-159.807531, 21.805279],
// 						[-159.284307, 22.267364],
// 					],
// 				},
// 				progressListener,
// 				errorListener
// 			);
// 			console.log("Refreshing Downloaded Packs");
// 			const offlinePacks = await MapboxGL.offlineManager.getPacks();
// 			console.log("New Packs", offlinePacks);
// 		} catch (error) {
// 			console.warn(error);
// 		}
// 	};

// 	return (
// 		<View style={styles.page}>
// 			<View>
// 				<Text>Type: {netInfo.type}</Text>
// 				<Text>Is Connected? {netInfo.isConnected?.toString()}</Text>
// 			</View>
// 			<Button
// 				onPress={() => {
// 					downloadStyle("style1", STYLES.STYLE_1);
// 				}}
// 				title="Download Style 1"
// 				style={styles.button}
// 			/>
// 			<Button
// 				onPress={() => {
// 					downloadStyle("style2", STYLES.STYLE_2);
// 				}}
// 				title="Download Style 2"
// 				style={styles.button}
// 			/>
// 			<View style={styles.container}>
// 				<MapboxGL.MapView
// 					style={styles.map}
// 					styleURL={styleUrl}
// 					zoomEnabled={true}
// 				>
// 					<MapboxGL.Camera
// 						zoomLevel={8}
// 						centerCoordinate={[-159.524478, 22.02088]}
// 					></MapboxGL.Camera>
// 				</MapboxGL.MapView>
// 			</View>
// 			<Button
// 				onPress={() => {
// 					setStyleUrl(STYLES.UNDOWNLOADED);
// 				}}
// 				title="Undownloaded Style"
// 				style={styles.button}
// 			/>
// 			<Button
// 				onPress={async () => {
// 					setStyleUrl(STYLES.STYLE_1);
// 				}}
// 				title="Style 1"
// 				style={styles.button}
// 			/>
// 			<Button
// 				onPress={() => {
// 					setStyleUrl(STYLES.STYLE_2);
// 				}}
// 				title="Style 2"
// 				style={styles.button}
// 			/>
// 		</View>
// 	);
// };

// const styles = StyleSheet.create({
// 	page: {
// 		flex: 1,
// 		justifyContent: "center",
// 		alignItems: "center",
// 	},
// 	container: {
// 		height: 300,
// 		width: 300,
// 	},
// 	map: {
// 		flex: 1,
// 	},
// 	button: {
// 		alignItems: "center",
// 		justifyContent: "center",
// 		paddingVertical: 12,
// 		paddingHorizontal: 32,
// 		borderRadius: 4,
// 		elevation: 3,
// 		backgroundColor: "black",
// 	},
// });

// export default ErrorDemo;


