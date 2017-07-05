import {generateTax} from './generateTax';
const readlineSync = require('readline-sync');
const TERMINATE = 'q'

let items = [];

console.log('Commands : \n 1) Add Item Details As {add ItemName ItemCost Imported(y/n) Taxable(y/n)} \n 2) generateList as {generate} \n 3) Exit interface as {exit}.\n');
readlineSync.promptCLLoop({
add: 		function(name, cost, imported, taxable) {
				items.push({itemName:name, cost:Number(cost), imported:imported, taxable:taxable});
				console.log('added');
			},
generate: 	function() {
				console.log('generating'); 
				generateTax(items);
				items=[];
			},
exit:		function() {
				console.log('exitting...');
				return true;
			}
});
