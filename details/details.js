const pallette = ["rgba(253, 175, 171, .5)", "rgba(250, 241, 214, .5)", "rgba(182, 227, 233, .5)", "rgba(250, 222, 225, .5)", "rgba(250, 212, 174, .5)", "rgba(217, 241, 241, .5)"]

function random_pick_and_remove(items) {
	let index = ~~(items.length * Math.random());
	let color = items[index];
	items.splice(index, 1);
    return color;
}

var color1 = random_pick_and_remove(pallette);

document.querySelector('.grid-container').style.backgroundColor = color1;