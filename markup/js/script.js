window.onload = function()
{
	asideHeight();
}
var asideHeight = function () {
	var catalog, aside, catalogH; 
	catalog = document.getElementsByClassName('items-holder')[0];
	aside = document.getElementsByClassName('filter')[0];
	catalogH = catalog.offsetHeight;
	console.log(catalogH)
	aside.style.height = catalogH + "px";
}