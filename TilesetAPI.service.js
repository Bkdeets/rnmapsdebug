import axios from 'axios';

const url = (tilesetId) => `https://api.mapbox.com/v4/${tilesetId}.json?access_token={your_key}`;

export const getTileset = async (tilesetId) => {
    let result = null;
    try {
        result = await axios.get(url(tilesetId));
        console.log(`Retrieved Tileset: ${tilesetId}`, result);
    } catch (error) {
        console.warn(error);
    }
    return result;
}

