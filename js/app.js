var form = document.getElementById('csv_form');
csvConvert(form)


function csvConvert(form){
	var textarea = form.getElementsByTagName('textarea')[0],
		convertButton = form.getElementsByTagName('button')[0],
		parent = form.parentNode;
	textarea.className = "textarea_csv_string";

	createCsvWrappers();
	convertButton.addEventListener('click', getCsvString);

	function createCsvWrappers(){
		var csvWrapper = document.createElement('div');
		
		csvWrapper.className = "csv_wrapper";
		parent.insertBefore(csvWrapper, form);
		csvWrapper.appendChild(form);
	}
	function getCsvString(){
		var textareaCsvString = textarea.value;
		if(!textareaCsvString){
			console.log('Warning: empty_textarea')
		}else{
			csvCreate(textareaCsvString)
		}
	}
	function csvCreate(textareaCsvString){
		table = document.createElement('table'),
		table.className = "csv_table";
		console.log(parent);
		parent.appendChild(table);
		// console.log(textareaCsvString[0])
		for(let i = 0; i < textareaCsvString.length; i++){
			var timeLine = '';
			if(textareaCsvString[i].charCodeAt() != 44 && textareaCsvString[i].charCodeAt() != 10){
				timeLine += textareaCsvString[i];
			}else if(textareaCsvString[i].charCodeAt() == 44){

			}
			console.log(textareaCsvString[i].charCodeAt() );
		}







		// var cols = prompt("Введите количество строк", "");
		// var rows = prompt("Введите количество столбцов", "");
		// cols = parseInt(cols);
		// rows = parseInt(rows);
		// document.write(' <table border=1, cellpadding=0, cellspacing=0, width="500px">');
		// for (i = 1; i <= cols; i++) {
		//     document.write("<tr>"+rowscalc(rows)+"</tr>");
		// }
		// document.write("</table>");
		 
		// function rowscalc(r) {
		//     for (k = 1; k <= r; k++) {
		//         document.write("<td>"+k+"</td>");
		//     }
		// }
	}
}
















// var csvConvert = (function() {
// 	'use strict';
// 	return {
// 		init: function(str) {
// 			this.events = this.events.bind(this);
// 			this.events();
// 		},
// 		events: function() {
// 			console.log(str);
// 		}
// 	};
// })();
/* Call component init method. Note! This method should be placed
before </body> tag. */
// csvConvert.init('1');