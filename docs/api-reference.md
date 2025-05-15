# API Reference

## Authentication

All API requests require authentication using JWT tokens. Include the token in the Authorization header:

```
Authorization: Bearer <your_token>
```

## Base URL

```
https://api.electrikq.com/v1
```

## Endpoints

### Station Management

#### List Stations

```http
GET /stations
```

Query Parameters:

- `lat` (float): Latitude
- `lng` (float): Longitude
- `radius` (int): Search radius in meters
- `connector_type` (string): Type of connector
- `available` (boolean): Filter by availability

Response:

```json
{
  "stations": [
    {
      "id": "string",
      "name": "string",
      "location": {
        "lat": 0,
        "lng": 0
      },
      "connectors": [
        {
          "type": "string",
          "power": 0,
          "available": true
        }
      ],
      "price": {
        "amount": 0,
        "currency": "string"
      }
    }
  ],
  "total": 0,
  "page": 0,
  "limit": 0
}
```

#### Get Station Details

```http
GET /stations/{station_id}
```

#### Create Station

```http
POST /stations
```

Request Body:

```json
{
  "name": "string",
  "location": {
    "lat": 0,
    "lng": 0
  },
  "connectors": [
    {
      "type": "string",
      "power": 0
    }
  ],
  "price": {
    "amount": 0,
    "currency": "string"
  }
}
```

### Booking Management

#### Create Booking

```http
POST /bookings
```

Request Body:

```json
{
  "station_id": "string",
  "connector_id": "string",
  "start_time": "string",
  "duration": 0
}
```

#### Get Booking Status

```http
GET /bookings/{booking_id}
```

### User Management

#### Register User

```http
POST /users/register
```

Request Body:

```json
{
  "email": "string",
  "password": "string",
  "name": "string",
  "phone": "string"
}
```

#### Login

```http
POST /users/login
```

Request Body:

```json
{
  "email": "string",
  "password": "string"
}
```

## Error Codes

| Code | Description           |
| ---- | --------------------- |
| 400  | Bad Request           |
| 401  | Unauthorized          |
| 403  | Forbidden             |
| 404  | Not Found             |
| 429  | Too Many Requests     |
| 500  | Internal Server Error |

## Rate Limiting

- 100 requests per minute for authenticated users
- 20 requests per minute for unauthenticated users

## Webhooks

The API supports webhooks for real-time updates. Configure webhooks in your dashboard to receive notifications for:

- Booking status changes
- Station availability updates
- Payment confirmations
