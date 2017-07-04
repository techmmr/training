const YES='y';
function generateTax(items) {
    let taxPercentage=0;
    let tax=0;
    let totalTax=0
    let total=0;
    for(let i=0;i<items.length;i++){
        if(items[i].imported==YES)
	       taxPercentage+=5;
        if(items[i].taxable==YES)
	       taxPercentage+=10;
    	tax=Math.round(items[i].cost*taxPercentage*20/100)/20;
        items[i].tax=Number(tax.toFixed(3));
        total+=items[i].cost+items[i].tax;
        totalTax+=items[i].tax;
    }
    console.log(`total cost : ${total} | total tax : ${totalTax}`);
}
export {generateTax}