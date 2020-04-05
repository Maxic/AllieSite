const pallette = ["rgba(253, 175, 171, .5)", "rgba(250, 241, 214, .5)", "rgba(182, 227, 233, .5)", "rgba(250, 222, 225, .5)", "rgba(250, 212, 174, .5)", "rgba(217, 241, 241, .5)"]

function random_pick_and_remove(items) {
	let index = ~~(items.length * Math.random());
	let color = items[index];
	items.splice(index, 1);
    return color;
}

var color1 = random_pick_and_remove(pallette);
var color2 = random_pick_and_remove(pallette);
var color3 = random_pick_and_remove(pallette);
var color4 = random_pick_and_remove(pallette);
var color5 = random_pick_and_remove(pallette);

document.querySelectorAll('.grid-item-1').forEach(function (item) {
  item.style.backgroundColor = color1;
});
document.querySelectorAll('.grid-item-2').forEach(function (item) {
  item.style.backgroundColor = color2;
});
document.querySelectorAll('.grid-item-3').forEach(function (item) {
  item.style.backgroundColor = color3;
});
document.querySelectorAll('.grid-item-4').forEach(function (item) {
  item.style.backgroundColor = color4;
});
document.querySelectorAll('.grid-item-5').forEach(function (item) {
  item.style.backgroundColor = color5;
});

var page = localStorage.getItem('currentpage');
if (page == undefined){
	page = 0;
	localStorage.setItem('currentpage', page);
} 
show_page(page);


function next_page(){
	page = parseInt(page) + 1
	if (page >= document.querySelectorAll('.grid-container').length){
		page =0
	}
	show_page(page)
}

function prev_page(){
	page = parseInt(page) - 1
	if (page < 0){
		page = document.querySelectorAll('.grid-container').length-1
	}
	show_page(page)
}

function show_page(page){
	document.querySelectorAll('.grid-container').forEach(function (item){
		item.style.cssText = "display: none;"	
	});
	document.querySelectorAll('.grid-container')[parseInt(page)].style.cssText = ""
}

//document.cookie = 'cookie1='+color1+'; expires=Fri, 19 Jun 2020 20:47:11 UTC; path=/';