# Find you perfect car

This is a simple web app which allows user to find the perfect car based on the manufacturer and model they select. 
Found cars will display informations about the manufacturer, model, fuel type, body type and engine capacity. 
It is mobile and desktop-friendly.

### How to start the app

Open two terminal windows: 
Terminal 1
1. run "npm install"
2. run "npm start" and it should open http://localhost:3000

Terminal 2
1. run "node apiserver/server.js"

### Test

The app, using react testing library, tests:
- App is rendered correctl
- Vehicles are listed inside cards and if no vehicle is found, it will display a message to the user
- Dropdown list and disabled

### Tech stack

- React
- Redux
- Redux-Saga
- CSS module
- Axios
- React testing library
