const pallette = ["#FAF1D6", "#FAD4AE", "#FDAFAB", "#FADEE1", "#D9F1F1", "#B6E3E9"]

function random_pick_and_remove(items) {
	let index = ~~(items.length * Math.random());
	let color = items[index];
	items.splice(index, 1);
    return color;
}

var color1 = random_pick_and_remove(pallette);
var color2 = random_pick_and_remove(pallette);

console.log(color1);
console.log(color1);

document.querySelector('.grid-item-1').style.backgroundColor = color1;
document.querySelector('.grid-item-2').style.backgroundColor = color2;

document.cookie =
 'cookie1='+color1+'; expires=Fri, 19 Jun 2020 20:47:11 UTC; path=/';