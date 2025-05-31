const API_BASE_URL = 'http://localhost:8000';

// Bangalore locations with coordinates
const bangaloreLocations = [
  { name: 'Indiranagar', latitude: 12.9719, longitude: 77.6412 },
  { name: 'Koramangala', latitude: 12.9279, longitude: 77.6271 },
  { name: 'Whitefield', latitude: 12.9698, longitude: 77.7500 },
  { name: 'HSR Layout', latitude: 12.9116, longitude: 77.6474 },
  { name: 'JP Nagar', latitude: 12.9077, longitude: 77.5954 },
  { name: 'Marathahalli', latitude: 12.9916, longitude: 77.7072 },
  { name: 'Electronic City', latitude: 12.8458, longitude: 77.6658 },
  { name: 'Bannerghatta', latitude: 12.8000, longitude: 77.5767 },
  { name: 'Sarjapur', latitude: 12.9352, longitude: 77.7315 },
  { name: 'Bellandur', latitude: 12.9352, longitude: 77.7215 },
  { name: 'Vijayanagar', latitude: 12.9916, longitude: 77.5512 },
  { name: 'Rajajinagar', latitude: 12.9916, longitude: 77.5512 },
  { name: 'Malleshwaram', latitude: 13.0067, longitude: 77.5712 },
  { name: 'Basavanagudi', latitude: 12.9489, longitude: 77.5712 },
  { name: 'Frazer Town', latitude: 13.0067, longitude: 77.5912 },
  { name: 'RT Nagar', latitude: 13.0067, longitude: 77.5912 },
  { name: 'Cox Town', latitude: 13.0067, longitude: 77.5912 },
  { name: 'Ulsoor', latitude: 12.9916, longitude: 77.6212 },
  { name: 'MG Road', latitude: 12.9750, longitude: 77.6050 },
  { name: 'Brigade Road', latitude: 12.9750, longitude: 77.6050 },
];

// Existing charging stations in Bangalore (red dots)
const existingStations = [
  { name: 'Tata Power Charging Station', latitude: 12.9716, longitude: 77.5946, type: 'DC Fast Charging' },
  { name: 'EESL Charging Hub', latitude: 12.9279, longitude: 77.6271, type: 'Level 2 AC' },
  { name: 'Tata Nexon EV Station', latitude: 12.9116, longitude: 77.6474, type: 'DC Fast Charging' },
  { name: 'Ather Grid Station', latitude: 12.9077, longitude: 77.5954, type: 'Tesla Compatible' },
  { name: 'Mahindra EV Station', latitude: 12.9916, longitude: 77.7072, type: 'Level 2 AC' },
  { name: 'Ola Electric Station', latitude: 12.8458, longitude: 77.6658, type: 'DC Fast Charging' },
  { name: 'Hero Electric Station', latitude: 12.8000, longitude: 77.5767, type: 'Level 2 AC' },
  { name: 'TVS iQube Station', latitude: 12.9352, longitude: 77.7315, type: 'Tesla Compatible' },
];

// Potential charging station locations (green dots)
const potentialStations = [
  { name: 'Potential Location 1', latitude: 12.9352, longitude: 77.7215, type: 'Level 2 AC', score: 0.85 },
  { name: 'Potential Location 2', latitude: 12.9916, longitude: 77.5512, type: 'DC Fast Charging', score: 0.92 },
  { name: 'Potential Location 3', latitude: 13.0067, longitude: 77.5712, type: 'Tesla Compatible', score: 0.78 },
  { name: 'Potential Location 4', latitude: 12.9489, longitude: 77.5712, type: 'Level 2 AC', score: 0.65 },
  { name: 'Potential Location 5', latitude: 13.0067, longitude: 77.5912, type: 'DC Fast Charging', score: 0.88 },
  { name: 'Potential Location 6', latitude: 13.0067, longitude: 77.5912, type: 'Tesla Compatible', score: 0.71 },
  { name: 'Potential Location 7', latitude: 12.9916, longitude: 77.6212, type: 'Level 2 AC', score: 0.83 },
  { name: 'Potential Location 8', latitude: 12.9750, longitude: 77.6050, type: 'DC Fast Charging', score: 0.95 },
  { name: 'Potential Location 9', latitude: 12.9750, longitude: 77.6050, type: 'Tesla Compatible', score: 0.67 },
];

export const searchLocations = async (query) => {
  // Filter locations based on search query
  return bangaloreLocations.filter(location => 
    location.name.toLowerCase().includes(query.toLowerCase())
  );
};

export const getExistingStations = async () => {
  return existingStations;
};

export const getPotentialStations = async () => {
  return potentialStations;
};

export const checkHotspotSuggestion = async (latitude, longitude, chargerType) => {
  try {
    const response = await fetch(`${API_BASE_URL}/check-hotspot`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        latitude,
        longitude,
        charger_type: chargerType,
      }),
    });
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    return data.hotspot_score;
  } catch (error) {
    console.error('Error checking hotspot:', error);
    return null;
  }
};

export const predictRate = async (latitude, longitude, chargerType) => {
  try {
    const response = await fetch(`${API_BASE_URL}/predict-rate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        latitude,
        longitude,
        charger_type: chargerType,
      }),
    });
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    return data.estimated_rate;
  } catch (error) {
    console.error('Error predicting rate:', error);
    return null;
  }
}; 