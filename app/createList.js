const prompt = require('prompt');
const TERMINATE = 'q'
function createList() {
//	const rl = readline.createInterface({
//		input: process.stdin,
//		output: process.stdout
//	});
	prompt.start();
	let items = [];
	console.log('Enter Item Details As {ItemName ItemCost Imported(y/n) Taxable(y/n)} and \'q\' to finish entering : \n');
	// rl.on('line', (answer) => {
	// 	if(answer==TERMINATE){
	// 		console.log('terminated');
	// 	}
	// 	else{
	// 		let result=answer.split(" ");
	// 		items.push({itemName:result[0], cost:Number(result[1]), imported:result[2], taxable:result[3]});
	// 	}
	// 	rl.close();
	// });
	prompt.get(['itemName', 'ItemCost', 'imported', 'taxable'], function (err, result) {
		items.push({itemName:result.itemName, cost:Number(result.ItemCost), imported:result.imported, taxable:result.taxable});
  });
	return items;
}
export {createList}