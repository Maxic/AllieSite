//const pallette = [""]
const pallette = ["#F5DEB3", "#FFF5EE", "#FFF0F5", "#DCDCDC", "#FFFFF0", "#7FFFD4", "#EEE8AA", "rgba(253, 175, 171)", "rgba(250, 241, 214)", "rgba(182, 227, 233)", "rgba(250, 222, 225)", "rgba(250, 212, 174)", "rgba(217, 241, 241)"];

function random_pick_and_remove(items) {
	let index = ~~(items.length * Math.random());
	let color = items[index];
	items.splice(index, 1);
    return color;
}

function random_pick(items) {
	let index = ~~(items.length * Math.random());
	let color = items[index];
    return color;
}

document.querySelectorAll('div[class*="page"]').forEach(function (item){
	item.style.backgroundColor = random_pick(pallette);
});


document.querySelectorAll('div[class*="header"]').forEach(function (item){
	item.style.backgroundColor = random_pick(pallette);
});
// var color1 = random_pick_and_remove(pallette);
// var color2 = random_pick_and_remove(pallette);
// var color3 = random_pick_and_remove(pallette);
// var color4 = random_pick_and_remove(pallette);
// var color5 = random_pick_and_remove(pallette);

// document.querySelectorAll('.grid-item-1').forEach(function (item) {
//   item.style.backgroundColor = color1;
// }); 
// document.querySelectorAll('.grid-item-2').forEach(function (item) {
//   item.style.backgroundColor = color2;
// });
// document.querySelectorAll('.grid-item-3').forEach(function (item) {
//   item.style.backgroundColor = color3;
// });
// document.querySelectorAll('.grid-item-4').forEach(function (item) {
//   item.style.backgroundColor = color4;
// });
// document.querySelectorAll('.grid-item-5').forEach(function (item) {
//   item.style.backgroundColor = color5;
// });

var page = localStorage.getItem('currentpage');
if (page == undefined){
	page = 0;
	localStorage.setItem('currentpage', page);
} 
show_page(page);


function next_page(){
	page = parseInt(page) + 1
	if (page >= document.querySelectorAll('.wrapper').length){
		page =0
	}
	localStorage.setItem('currentpage', page);
	show_page(page)
}

function prev_page(){
	page = parseInt(page) - 1
	if (page < 0){
		page = document.querySelectorAll('.wrapper').length-1
	}
	localStorage.setItem('currentpage', page);
	show_page(page)
}

function show_page(page){
	document.querySelectorAll('.wrapper').forEach(function (item){
		item.style.cssText = "display: none;"	
	});
	document.querySelectorAll('.wrapper')[parseInt(page)].style.cssText = ""
}