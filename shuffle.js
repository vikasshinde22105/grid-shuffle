function loadGrid(){
	var parent = document.querySelector("#col-left");
	var divCount =10;
	var gridDivHtml='';
	for(let i =1;i<10;i++){
		gridDivHtml += ('<div class="col'+i+'"><div class="col-md'+i+'"><span>'+(i)+'</span></div><div class="col-sm'+i+'">'+(i)+'</div></div>');
	}
parent.innerHTML = gridDivHtml;
 
}
 function shuffle(){
	var parent = document.querySelector("#col-left");
	var divs = parent.children;
	var shuffle = document.createDocumentFragment();
	while (divs.length) {
		shuffle.appendChild(divs[Math.floor(Math.random() * divs.length)]);
	}
		parent.appendChild(shuffle);
 }
 function sort(){
	loadGrid();
 }