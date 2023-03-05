import React, { useEffect, useState } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import MapboxGL from "@rnmapbox/maps";
import { useNetInfo } from "@react-native-community/netinfo";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
});

MapboxGL.setAccessToken(
	""
);

const STYLES = {
	UNDOWNLOADED: "mapbox://styles/bkdeets/cl2idgyc3001815ql3mn5foi7",
	STYLE_1: "mapbox://styles/bkdeets/cld2ipdu0000601tc6x67uagu",
	STYLE_2: "mapbox://styles/bkdeets/cl2touw3c010c14o91fmh745v",
	DEFAULT: "mapbox://styles/bkdeets/cl9yvwzde001f14o0p8e6ynl1",
};

const ErrorDemo = ({ navigation }) => {
	const [packs, setPacks] = useState(null);
	const [styleUrl, setStyleUrl] = useState(STYLES.DEFAULT);
	const netInfo = useNetInfo();

	const progressListener = (offlineRegion, status) =>
		console.log(offlineRegion, status);
	const errorListener = (offlineRegion, err) =>
		console.log(offlineRegion, err);

	useEffect(() => {
		const getPacks = async () => {
			const offlinePacks = await MapboxGL.offlineManager.getPacks();
			setPacks(offlinePacks);
		};
		getPacks();
	}, []);

	const downloadStyle = async (name, styleURL) => {
		try {
			await MapboxGL.offlineManager.createPack(
				{
					name,
					styleURL,
					minZoom: 14,
					maxZoom: 20,
					bounds: [
						[-159.807531, 21.805279],
						[-159.284307, 22.267364],
					],
				},
				progressListener,
				errorListener
			);
			console.log("Refreshing Downloaded Packs");
			const offlinePacks = await MapboxGL.offlineManager.getPacks();
			setPacks(offlinePacks);
			console.log("New Packs", offlinePacks);
		} catch (error) {
			console.warn(error);
		}
	};

	return (
		//styleURL={"mapbox://styles/bkdeets/cld2ipdu0000601tc6x67uagu"}
		// mapbox://styles/bkdeets/cl2touw3c010c14o91fmh745v
		<View style={styles.page}>
			<View>
				<Text>Type: {netInfo.type}</Text>
				<Text>Is Connected? {netInfo.isConnected?.toString()}</Text>
			</View>
			<Button
				onPress={() => {
					downloadStyle("style999", STYLES.STYLE_1);
				}}
				title="Download Style 1"
				style={styles.button}
			/>
			<Button
				onPress={() => {
					downloadStyle("style2", STYLES.STYLE_2);
				}}
				title="Download Style 2"
				style={styles.button}
			/>
			<View style={styles.container}>
				<MapboxGL.MapView
					style={styles.map}
					styleURL={styleUrl}
					zoomEnabled={true}
				>
					<MapboxGL.Camera
						zoomLevel={8}
						centerCoordinate={[-159.524478, 22.02088]}
					></MapboxGL.Camera>
				</MapboxGL.MapView>
			</View>
			<Button
				onPress={() => {
					console.log(packs);
					setStyleUrl(STYLES.UNDOWNLOADED);
				}}
				title="Undownloaded Style"
				style={styles.button}
			/>
			<Button
				onPress={async () => {
					console.log(packs);
					setStyleUrl(STYLES.STYLE_1);
				}}
				title="Style 1"
				style={styles.button}
			/>
			<Button
				onPress={() => {
					console.log(packs);

					setStyleUrl(STYLES.STYLE_2);
				}}
				title="Style 2"
				style={styles.button}
			/>
			<Button
				onPress={() => {
					MapboxGL.offlineManager.clearAmbientCache();
				}}
				title="CLEAR CACHE"
				style={styles.button}
			/>
			{/* <Button
				onPress={async () => {
					await MapboxGL.offlineManager.deletePack("style999");
					const offlinePacks =
						await MapboxGL.offlineManager.getPacks();

            console.log('new offline packs', offlinePacks)
					setPacks(offlinePacks);
				}}
				title="DELETE style1"
				style={styles.button}
			/> */}
		</View>
	);
};

export default ErrorDemo;


