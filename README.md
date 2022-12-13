# SpaceX 
This project allows you to search [SpaceX API](https://api.spacex.land/graphql/) and filter them based on missions and rockets.
It shows past launches as a list and on expanding each item you would find details of the ships
On click of Rocket icon you would be able tosee the rocket payload and core details in a modal


### Tech Stack
-React
-Typescript
-Graphql
-React-Query
-TailWind


### Pending Items
- Cleaning up the code and optimizing it using React memo and callbacks
- Query Data Selector can be used to add the mission select property into the response to avoid managing selecting state locally
- Scroll to top functionality
- Using QueryParams for Search filters to make it url friendly
- Having a more clean design. Currently its more focussed towards functionality.
- - tailwind transition is currently not working. Need to work on that to fix animations


Note: Before running the project make sure you add .env file with below config
REACT_APP_BASE_URL=https://api.spacex.land/graphql

## How To Run Project Locally

- Clone the repository locally
- Run "npm ci"
- run "npm start" the page should be served locally on http://localhost:3000
