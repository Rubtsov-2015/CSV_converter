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

		parent.appendChild(table);
		var SYMBOL_ENTER = 10,
			SYMBOL_COMMA = 44,
			timeLine = '';

		parent.getElementsByTagName('td')[0];

		createRow();
		for(let i = 0; i < textareaCsvString.length; i++){
			if(textareaCsvString[i].charCodeAt() != SYMBOL_COMMA && textareaCsvString[i].charCodeAt() != SYMBOL_ENTER){
				timeLine = timeLine + textareaCsvString[i];
			}else if(textareaCsvString[i].charCodeAt() == SYMBOL_COMMA){
				createCol(timeLine);
			}else if(textareaCsvString[i].charCodeAt() == SYMBOL_ENTER){
				createRow();
			}
			console.log(textareaCsvString[i].charCodeAt() );
		}

		function createCol(line){
			var td = document.createElement('td');
			td.innerHTML = line;

			timeLine = '';
			var tablesTr = table.getElementsByTagName('tr');
			var lastTr = tablesTr[tablesTr.length-1];;
			lastTr.appendChild(td);
		}
		function createRow(){
			var tr = document.createElement('tr');
			table.appendChild(tr);
		}
		
		function toArray(obj){ return [].slice.call(obj) }

	}
}