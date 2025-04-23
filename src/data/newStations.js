// Array to store newly added stations
export let newStations = [];

// Function to add a new station
export const addNewStation = (station) => {
  newStations.push({
    ...station,
    id: `new-${Date.now()}`, // Generate unique ID
    addedAt: new Date().toISOString(),
    status: "pending", // pending, active, rejected
  });
};

// Function to get all new stations
export const getNewStations = () => {
  return newStations;
};

// Function to update station status
export const updateStationStatus = (stationId, status) => {
  const station = newStations.find((s) => s.id === stationId);
  if (station) {
    station.status = status;
  }
};
