export async function getCoordinates(address,API_KEY) {
    // const API_KEY = process.env.REACT_APP_GEO_API_KEY; // Use REACT_APP_ prefix in React

    const response = await fetch(
        `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(address)}&apiKey=${API_KEY}`
       
    );

    const data = await response.json();

    console.log("function print: ",data);

    if (data.features && data.features.length > 0) {
        const result = data.features[0].geometry.coordinates;
        return result; // Leaflet uses `lat` and `lng`
    } else {
        throw new Error('No coordinates found for this address');
    }
}