import React, { Component } from 'react';
import $ from 'jquery';


export default class IndividualMountain extends Component {
	constructor() {
		super();
		this.state = {
			mountainData: [],
			mountainDataImg: [],
		}
	}

	componentWillMount() {
		this.getMountainData();
		// this.getMountainDataImage();
	}




	getMountainData() {
		const mountain = this.props.selectedData.name
		const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + mountain + "&format=json&callback=?"

		$.ajax({
			type:"GET",
			url:url,
			async:false,
			dataType: "json",
			success:(result) => {
				this.setState({
					mountainData: result
				})
				console.log(this.state.mountainData)
			},
			error:(errorMessage) => {
				alert("Error");
			}
		});
}

// getMountainData() {
// 	const mountain = this.props.selectedData.name
// 	const url = "http://en.wikipedia.org/w/api.php?action=parse&page=" + mountain + "&prop=text&format=json&callback=?"
//
// 	$.getJSON(url , function(json) {
// 		$('#wikiInfo').html(json.parse.text['*']);
// 		$("#wikiInfo").find("a:not(.references a)").attr("href", function(){ return "http://www.wikipedia.org" + $(this).attr("href");});
// 		$("#wikiInfo").find("a").attr("target", "_blank");
// 	});
// };



// getMountainDataImage() {
//
// 		const mountainImg = this.props.selectedData.name
//     $.ajax({
//       url: "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages%7Cpageterms&generator=prefixsearch&redirects=1&formatversion=2&piprop=thumbnail&pithumbsize=250&pilimit=20&wbptterms=description&gpssearch=" + mountainImg + "&gpslimit=20",
//       method: "GET",
//       dataType: "jsonp",
//       success:(result) => {
// 				debugger
// 				for (var i = 0; i < 20; i++) {
// 					if (result.query.pages[i].hasOwnProperty("thumbnail") === true)
// 					{
// 						this.setState({
// 							mountainDataImg: (result.query.pages[i].index - 1).html("<img src=' " + result.query.pages[i].thumbnail.source + "' class='responsive-img valign'>")
// 						})
// 					} else {
// 							this.setState({
// 								mountainDataImg : (result.query.pages[i].index - 1).html("<img src='https://upload.wikimedia.org/wikipedia/commons/2/21/Article_icon.svg' class='responsive-img valign articleIcon'>")
// 							})
// 						}
// 					}
// 					error:() => {
// 						console.log("second call unsuccessful");
// 					}
// 				}
// 			})
// 			error:() => {
// 				alert("Error, please try again");
// 			}
// 		};






  render(){

		return (
			<div className = "individual-mountain">
				<section className="mountain-info">
					<h3>{this.state.mountainData[0]}</h3>
					<p>{this.state.mountainData[2]}</p>
					<section id="output">{this.state.mountainDataImg[1]}</section>

				</section>
				<div id="wikiInfo">&nbsp;</div>
				<button>Favorite</button>
			</div>
		)
	}
}
