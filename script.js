const displayTop = document.getElementById('displayTop');
const displayBottom = document.getElementById('displayBottom');

function insert (value) {
	return displayBottom.innerHTML = displayBottom.innerHTML + value;
}

function clearAll(){
	return displayBottom.innerHTML = '';
}
