[![Stories in Ready](https://badge.waffle.io/ccgamble/PEAKeasy.png?label=ready&title=Ready)](https://waffle.io/ccgamble/PEAKeasy)
## Project Name & Pitch

PEAKeasy 

An application used for discovering Colorado's 14ers, built with React, JavaScript, and CSS.

## Description

Users can search for mountains by name and click on individual mountains for more information. The homepage displays an overview map showing all of Colorado's 14ers, which was craeted in Mapbox and implemented with react-leaflet. The individual mountain page displays basic information, route information, a 10-day weather forecast, and Google maps with direction capabilities. 

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

## Screenshots

<img width="1164" alt="screen shot 2017-02-28 at 11 17 33 pm" src="https://cloud.githubusercontent.com/assets/15853081/24259700/418de92e-0fb7-11e7-99a7-7ad614df22ac.png">
<img width="1303" alt="screen shot 2017-03-23 at 10 54 32 am" src="https://cloud.githubusercontent.com/assets/15853081/24259712/4af793fc-0fb7-11e7-862f-eb90996d8de1.png">
<img width="1244" alt="screen shot 2017-03-23 at 10 54 44 am" src="https://cloud.githubusercontent.com/assets/15853081/24259714/4d3b276e-0fb7-11e7-90cd-768e43156d30.png">
<img width="1278" alt="screen shot 2017-03-23 at 10 54 52 am" src="https://cloud.githubusercontent.com/assets/15853081/24259716/4f0384e2-0fb7-11e7-9a25-6b799064381f.png">


## Reflection
This was a 3 week long project built during my third module at Turing School of Software and Design. Project goals included using technologies learned up until this point and familiarizing myself with documentation for new features.  

I am an avid hiker, so I wanted to build an application that allowed users to search through the list of 14ers in Colorado (there are 53), favorite ones that sound appealing, and gather enough information to plan a hike. I started this process by using the `create-react-app` boilerplate, and then adding `react-router-4.0`.

One of the main challenges I ran into was gathering the information for this application. In the end, I hit three APIs and also created an extensive database that the application also pulled from. The three APIs are Wikipedia for images, Weather Underground for the 10-day weather forecast, and Google Maps for the map and directions. Originally I planned on pulling most of the general information and routes data from Wikipedia, and I spent several days trying to parse through the API to get the desired information. However, each Wikipedia page is setup differently, so there was no way to dyncamically parse through the information. As a result, I created my own database with the desired information.

At this stage of deployment, the technologies implemented in this project are React, React-Router 4.0, Webpack, LoDash, VanillaJS, JSX, CSS, and Mapbox. I chose to use the `create-react-app` boilerplate to minimize initial setup.
