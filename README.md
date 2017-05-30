
## PEAKeasy 

An application used for discovering Colorado's 14ers, built with React, Leaflet, JavaScript, and CSS.

### Description

Users can search for mountains by name and click on individual mountains for more information. The homepage displays an overview map showing all of Colorado's 14ers, which was craeted with react-leaflet. The individual mountain page displays basic information, route information, a 10-day weather forecast, and Google maps with direction capabilities. 

### Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`   

To Start Server:

`npm start`  

To Visit App:

`localhost:8080`  

### Screenshots

<img width="1426" alt="screen shot 2017-05-18 at 12 24 43 pm" src="https://cloud.githubusercontent.com/assets/15853081/26217601/330fa56a-3bc5-11e7-9664-8a1cddf846e0.png">
<img width="1404" alt="screen shot 2017-05-18 at 12 24 59 pm" src="https://cloud.githubusercontent.com/assets/15853081/26217607/3544e3d6-3bc5-11e7-9c6b-e259c6a4dad1.png">
<img width="1315" alt="screen shot 2017-05-29 at 11 29 58 pm" src="https://cloud.githubusercontent.com/assets/15853081/26569277/d1eb7308-44c6-11e7-9aff-323c7c1b1404.png">
<img width="1244" alt="screen shot 2017-03-23 at 10 54 44 am" src="https://cloud.githubusercontent.com/assets/15853081/24259714/4d3b276e-0fb7-11e7-90cd-768e43156d30.png">
<img width="1278" alt="screen shot 2017-03-23 at 10 54 52 am" src="https://cloud.githubusercontent.com/assets/15853081/24259716/4f0384e2-0fb7-11e7-9a25-6b799064381f.png">


### Reflection
This was a 3 week long project built during my third module at Turing School of Software and Design. Project goals included using technologies learned up until this point and familiarizing myself with documentation for new features.  

I am an avid hiker, so I wanted to build an application that allowed users to search through the list of 14ers in Colorado (there are 53), and gather enough information to plan a hike.

One of the main challenges I ran into was gathering the information for this application. In the end, I hit three APIs and also created an extensive database that the application also pulled from. The three APIs are Wikipedia for images, Weather Underground for the 10-day weather forecast, and Google Maps for the map and directions. Originally I planned on pulling most of the general information and routes data from Wikipedia, and I spent several days trying to parse through the API to get the desired information. However, each Wikipedia page is setup differently, so there was no way to dyncamically parse through the information. As a result, I created my own database with the desired information.

The technologies implemented in this project are React, React-Router 4.0, Webpack, VanillaJS, JSX, CSS, and Mapbox. I chose to use the `create-react-app` boilerplate to minimize initial setup. Testing is done with Chai and Enzyme.
