# Weather App

This project is a weather application that displays real-time weather information for a specified city. The app uses the OpenWeatherMap API to fetch weather data, including temperature, humidity, wind speed, and weather conditions.

## Features
- Displays the current temperature in Celsius.
- Shows the name of the city.
- Provides weather details such as humidity and wind speed.
- Dynamically updates the weather icon based on the weather conditions.
- Default city: Indore (can be updated by entering another city).

## Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/<your-username>/weather-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd weather-app
   ```
3. Open the `index.html` file in your browser to view the application.

## Usage
1. Enter the name of a city in the search input field.
2. Click the "Search" button to fetch and display the weather information for the specified city.
3. The app will show:
   - Current temperature in Celsius.
   - City name.
   - Humidity percentage.
   - Wind speed in kilometers per hour.
   - Weather icon corresponding to the weather condition (e.g., clear, cloudy, rainy).

## Code Structure
- **HTML:** Provides the structure of the application, including the input field, search button, and weather details display.
- **CSS:** Handles the styling of the application.
- **JavaScript:** Manages fetching weather data, updating the UI, and user interactions.

## API
The project uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data.

### Example Endpoint
- URL format: `https://api.openweathermap.org/data/2.5/weather?appid=YOUR_API_KEY&units=metric&q={city}`
- Replace `YOUR_API_KEY` with your OpenWeatherMap API key and `{city}` with the city name.

## Prerequisites
- Replace the `apiKey` variable with your own OpenWeatherMap API key:
  ```javascript
  const apiKey = "YOUR_API_KEY";
  ```
- Ensure you have an active internet connection to fetch weather data.

## Project Requirements
- A modern web browser with JavaScript enabled.
- Weather condition images should be stored in an `img/` directory with appropriate filenames (e.g., `clear.png`, `clouds.png`).

## Contributing
Feel free to contribute to this project by submitting issues or pull requests. Follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push them to your forked repository.
4. Submit a pull request to the main repository.

## Acknowledgments
- [OpenWeatherMap API](https://openweathermap.org/api) for providing weather data.
- Weather icons for enhancing the user interface.

