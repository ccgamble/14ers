## Project Name & Pitch

PEAKeasy 

An application used for discovering Colorado's 14ers, built with React, JavaScript, and CSS.

## Project Status

This project is currently in development. Users can search for mountains by name and click on individual mountains for more information. The individual mountain page displays basic information, route information, a 10-day weather forecast, and Google maps with direction capabilities. User can favorite mountains, but functionality to display a page with all of the favorited mountains is in progress. I have started to build an overview map showing all of the 14ers with the ability to click on each point and get the name or general information in Mapbox. Once this is completed, it will be included. Also, I plan to create functionality for sorting the list of mountains by different parameters.

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Run Test Suite:  

`npm test`  

To Start Server:

`npm start`  

To Visit App:

`localhost:8080`  

## Reflection
This was a 3 week long project built during my third module at Turing School of Software and Design. Project goals included using technologies learned up until this point and familiarizing myself with documentation for new features.  

I am an avid hiker, so I wanted to build an application that allowed users to search through the list of 14ers in Colorado (there are 53), favorite ones that sound appealing, and gather enough information to plan a hike. I started this process by using the `create-react-app` boilerplate, and then adding `react-router-4.0`.

One of the main challenges I ran into was gathering the information for this application. In the end, I hit three APIs and also created an extensive database that the application also pulled from. The three APIs are Wikipedia for images, Weather Underground for the 10-day weather forecast, and Google Maps for the map and directions. Originally I planned on pulling most of the general information and routes data from Wikipedia, and I spent several days trying to parse through the API to get the desired information. However, each Wikipedia page is setup differently, so there was no way to dyncamically parse through the information. As a result, I created my own database with the desired information.

At this stage of deployment, the technologies implemented in this project are React, React-Router 4.0, Webpack, LoDash, VanillaJS, JSX, and CSS. I chose to use the `create-react-app` boilerplate to minimize initial setup.
