var answerJSON= {
	"winterWear": ['Switzerland','Iceland'],
	"beachWear":['Panama','Spain','Thailand','Vietnam','Turkey','Morocco'],
	"hipsterWear":['Spain','Turkey'],
	"safariWear":['Kenya'],
	"scandiWear":['Netherlands'],
	"hippiWear":['India','Thailand'],
	"shopBarca":['Spain'],
	"shopXmas":['Switzerland'],
	"shopAsia":['Thailand','China'],
	"shopScandi":['Iceland','Netherlands'],
	"shopBazzar":['Morocco','Turkey'],
	"shopBeach":['Morocco', 'Vietnam','Turkey','Panama'],
	"stayBarca":['Spain'],
	"stayResort":['Thailand', 'Vietnam', 'Panama'],
	"staySafari":['Kenya'],
	"stayTree":['Panama'],
	"stayRiad":['Morocco'],
	"stayCave":['Turkey'],
	"eatPho":['Vietnam'],
	"eatTurkey":['Turkey'],
	"eatSalmon":['Iceland'],
	"eatTajine":['Morocco'],
	"eatPaella":['Spain'],
	"eatThai":['Thailand'],
	"rideCamper":['Kenya'],
	"rideMoto":['Spain','Panama','Thailand','Vietnam'],
	"rideHorse":['Panama'],
	"rideCamel":['Morocco'],
	"rideBoat":['Thailand','Vietnam','Spain'],
	"rideTukTuk":['Thailand','India'],
	"spa":['Iceland','Turkey','Vietnam','Thailand','Morocco','Panama','India'],
	"scuba":["Turkey","Thailand"],
	"paragliding":['Switzerland','Turkey'],
	"safari":['Kenya','India'],
	"architecture":['Turkey','Spain','Morocco'],
	"repelling":['Vietnam'],
	"iceCaving":['Iceland'],
	"rockClimbing":['Thailand', 'Spain'],
	"cook": ['Thailand','Vietnam','Morocco','Turkey'],

}


var countries = ["Thailand", "Switzerland", "Vietnam", "Iceland", "Panama", "Spain", "Morocco", "Kenya", "Turkey", "India", "Netherlands"];
var highestCountry = localStorage["highestCountry"];

for(var i=0; i < countries.length; i++){
	var temp = countries[i];
	if (localStorage[temp] === undefined) {
		localStorage[temp] = 0;  // localStorage("Thailand")
	// 	if (localStorage["Thailand"]===undefined) {
	// localStorage["Thailand"]= 0;{
	// 	"Switzerland": 0,
	// 	"Vietnam": 0,
	// 	"Iceland": 0,
	// 	"Panama": 0,
	// 	"Spain": 0,
	// 	"Morocco":0,
	// 	"Thailand":0,
	}
}


var answers= answerJSON["hippiWear"]

// localStorage["results"]["Thailand"] = localStorage["results"]["Thailand"] + 1

var text

// for(var index=0; index<answerJSON[].length; index++){
//  $("results").eq(index).attr(localStorage["results"]["Thailand"] + 1)
// }
function run(event){
	key = $(event.target).attr("id");
	if(answerJSON.hasOwnProperty(key)) {
		// debugger;
		console.log("key", key);
		console.log("value", answerJSON[key]);

		for(var i =0; i< answerJSON[key].length; i++){
			if(answerJSON[key][i]=== "Iceland"){
				console.log(localStorage["Iceland"]);
				localStorage["Iceland"] = parseInt(localStorage["Iceland"]) + 1;
			}
		}
		for(var i =0; i< answerJSON[key].length; i++){
			if(answerJSON[key][i]=== "Thailand"){
				console.log(localStorage["Thailand"]);
				localStorage["Thailand"] = parseInt(localStorage["Thailand"]) + 1;
			}
		}
		for(var i =0; i< answerJSON[key].length; i++){
			if(answerJSON[key][i]=== "Switzerland"){
				console.log(localStorage["Switzerland"]);
				localStorage["Switzerland"] = parseInt(localStorage["Switzerland"]) + 1;
			}
		}
		for(var i =0; i< answerJSON[key].length; i++){
			if(answerJSON[key][i]=== "Vietnam"){
				console.log(localStorage["Vietnam"]);
				localStorage["Vietnam"] = parseInt(localStorage["Vietnam"]) + 1;
			}
		}
		for(var i =0; i< answerJSON[key].length; i++){
			if(answerJSON[key][i]=== "Panama"){
				console.log(localStorage["Panama"]);
				localStorage["Panama"] = parseInt(localStorage["Panama"]) + 1;
			}
		}
		for(var i =0; i< answerJSON[key].length; i++){
			if(answerJSON[key][i]=== "Spain"){
				console.log(localStorage["Spain"]);
				localStorage["Spain"] = parseInt(localStorage["Spain"]) + 1;
			}
		}
		for(var i =0; i< answerJSON[key].length; i++){
			if(answerJSON[key][i]=== "Morocco"){
				console.log(localStorage["Morocco"]);
				localStorage["Morocco"] = parseInt(localStorage["Morocco"]) + 1;
			}
		}
		for(var i =0; i< answerJSON[key].length; i++){
			if(answerJSON[key][i]=== "Kenya"){
				console.log(localStorage["Kenya"]);
				localStorage["Kenya"] = parseInt(localStorage["Kenya"]) + 1;
			}
		}
		for(var i =0; i< answerJSON[key].length; i++){
			if(answerJSON[key][i]=== "Turkey"){
				console.log(localStorage["Turkey"]);
				localStorage["Turkey"] = parseInt(localStorage["Turkey"]) + 1;
			}
		}
		for(var i =0; i< answerJSON[key].length; i++){
			if(answerJSON[key][i]=== "India"){
				console.log(localStorage["India"]);
				localStorage["India"] = parseInt(localStorage["India"]) + 1;
			}
		}
		for(var i =0; i< answerJSON[key].length; i++){
			if(answerJSON[key][i]=== "Netherlands"){
				console.log(localStorage["Netherlands"]);
				localStorage["Netherlands"] = parseInt(localStorage["Netherlands"]) + 1;
			}
		}

		// console.log("")
		// $("results").eq(index).attr(localStorage["results"]["Thailand"] + 1)
	}

	checkHighest();
} 


function checkHighest(){
	countries = ["Thailand", "Switzerland", "Vietnam", "Iceland", "Panama", "Spain", "Morocco", "Kenya", "Turkey", "India", "Netherlands"];
	highestCountry = countries[0];
	var highest = parseInt(localStorage[highestCountry]);
	for(var i=0; i < countries.length; i++){
		var country = countries[i];
			// debugger;
		if (parseInt(localStorage[country]) > highest) {
			highest = parseInt(localStorage[country]);
			highestCountry = countries[i]; // localStorage("Thailand")
			localStorage["highestCountry"] = highestCountry;

		}
	}
}

function countryPage(){
	var destination = highestCountry;
	window.location.href= destination+".html";
	// window.location.href="destination.html";
}

function choosebeachWear(){ $('#beachWear').addClass('chosen');}
function choosehipsterWear(){ $('#hipsterWear').addClass('chosen');}
function choosesafariWear(){ $('#safariWear').addClass('chosen');}
function choosescandiWear(){ $('#scandiWear').addClass('chosen');}
function choosehippiWear(){ $('#hippiWear').addClass('chosen');}
function chooseshopBarca(){ $('#shopBarca').addClass('chosen');}
function chooseshopXmas(){ $('#shopXmas').addClass('chosen');}
function chooseshopAsia(){ $('#shopAsia').addClass('chosen');}
function chooseshopScandi(){ $('#shopScandi').addClass('chosen');}
function chooseshopBazzar(){ $('#shopBazzar').addClass('chosen');}
function chooseshopBeach(){ $('#shopBeach').addClass('chosen');}
function choosestayBarca(){ $('#stayBarca').addClass('chosen');}
function choosestayResort(){ $('#stayResort').addClass('chosen');}
function choosestaySafari(){ $('#staySafari').addClass('chosen');}
function choosestayTree(){ $('#stayTree').addClass('chosen');}
function choosestayRiad(){ $('#stayRiad').addClass('chosen');}
function choosestayCave(){ $('#stayCave').addClass('chosen');}
function chooseeatPho(){ $('#eatPho').addClass('chosen');}
function chooseeatTurkey(){ $('#eatTurkey').addClass('chosen');}
function chooseeatSalmon(){ $('#eatSalmon').addClass('chosen');}
function chooseeatTajine(){ $('#eatTajine').addClass('chosen');}
function chooseeatPaella(){ $('#eatPaella').addClass('chosen');}
function chooseeatThai(){ $('#eatThai').addClass('chosen');}
function chooserideCamper(){ $('#rideCamper').addClass('chosen');}
function chooserideMoto(){ $('#rideMoto').addClass('chosen');}
function chooserideHorse(){ $('#rideHorse').addClass('chosen');}
function chooserideCamel(){ $('#rideCamel').addClass('chosen');}
function chooserideBoat(){ $('#rideBoat').addClass('chosen');}
function chooserideTukTuk(){ $('#rideTukTuk').addClass('chosen');}
function choosespa(){ $('#spa').addClass('chosen');}
function choosescuba(){ $('#scuba').addClass('chosen');}
function chooseparagliding(){ $('#paragliding').addClass('chosen');}
function choosesafari(){ $('#safari').addClass('chosen');}
function choosearchitecture(){ $('#architecture').addClass('chosen');}
function chooserepelling(){ $('#repelling').addClass('chosen');}
function chooseiceCaving(){ $('#iceCaving').addClass('chosen');}
function chooserockClimbing(){ $('#rockClimbing').addClass('chosen');}
function choosecook(){ $('#cook').addClass('chosen');}

function clearResults(){
	localStorage.clear();	
}

// for(var key in answerJSON) {

// }
$("#winterWear").click(run)
$('#beachWear').click(run)
$('#hipsterWear').click(run)
$('#safariWear').click(run)
$('#scandiWear').click(run)
$('#hippiWear').click(run)
$('#shopBarca').click(run)
$('#shopXmas').click(run)
$('#shopAsia').click(run)
$('#shopScandi').click(run)
$('#shopBazzar').click(run)
$('#shopBeach').click(run)
$('#stayBarca').click(run)
$('#stayResort').click(run)
$('#staySafari').click(run)
$('#stayTree').click(run)
$('#stayRiad').click(run)
$('#stayCave').click(run)
$('#eatPho').click(run)
$('#eatTurkey').click(run)
$('#eatSalmon').click(run)
$('#eatTajine').click(run)
$('#eatPaella').click(run)
$('#eatThai').click(run)
$('#rideCamper').click(run)
$('#rideMoto').click(run)
$('#rideHorse').click(run)
$('#rideCamel').click(run)
$('#rideBoat').click(run)
$('#rideTukTuk').click(run)
$('#spa').click(run)
$('#scuba').click(run)
$('#paragliding').click(run)
$('#safari').click(run)
$('#architecture').click(run)
$('#repelling').click(run)
$('#iceCaving').click(run)
$('#rockClimbing').click(run)
$('#cook').click(run)

$('#beachWear').click(choosebeachWear)
$('#hipsterWear').click(choosehipsterWear)
$('#safariWear').click(choosesafariWear)
$('#scandiWear').click(choosescandiWear)
$('#hippiWear').click(choosehippiWear)
$('#shopBarca').click(chooseshopBarca)
$('#shopXmas').click(chooseshopXmas)
$('#shopAsia').click(chooseshopAsia)
$('#shopScandi').click(chooseshopScandi)
$('#shopBazzar').click(chooseshopBazzar)
$('#shopBeach').click(chooseshopBeach)
$('#stayBarca').click(choosestayBarca)
$('#stayResort').click(choosestayResort)
$('#staySafari').click(choosestaySafari)
$('#stayTree').click(choosestayTree)
$('#stayRiad').click(choosestayRiad)
$('#stayCave').click(choosestayCave)
$('#eatPho').click(chooseeatPho)
$('#eatTurkey').click(chooseeatTurkey)
$('#eatSalmon').click(chooseeatSalmon)
$('#eatTajine').click(chooseeatTajine)
$('#eatPaella').click(chooseeatPaella)
$('#eatThai').click(chooseeatThai)
$('#rideCamper').click(chooserideCamper)
$('#rideMoto').click(chooserideMoto)
$('#rideHorse').click(chooserideHorse)
$('#rideCamel').click(chooserideCamel)
$('#rideBoat').click(chooserideBoat)
$('#rideTukTuk').click(chooserideTukTuk)
$('#spa').click(choosespa)
$('#scuba').click(choosescuba)
$('#paragliding').click(chooseparagliding)
$('#safari').click(choosesafari)
$('#architecture').click(choosearchitecture)
$('#repelling').click(chooserepelling)
$('#iceCaving').click(chooseiceCaving)
$('#rockClimbing').click(chooserockClimbing)
$('#cook').click(choosecook)

$('#total').click(countryPage)
$('#clear').click(clearResults)

