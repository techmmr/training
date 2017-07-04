import {generateTax} from './generateTax';
const readline = require('readline');
const TERMINATE = 'q'

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

let items = [];
console.log('Enter Item Details As {ItemName ItemCost Imported(y/n) Taxable(y/n)} and \'q\' to finish entering : \n');
rl.on('line', (answer) => {
	if(answer==TERMINATE){
	generateTax(items);
	items = [];
	}
	else{
		let result=answer.split(" ");
		items.push({itemName:result[0], cost:Number(result[1]), imported:result[2], taxable:result[3]});
	}
});