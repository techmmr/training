function createList() {
    let  items = [];
    items.push({itemName:"name1", cost:40, imported:'y', taxable:'y'});
    items.push({itemName:"name2", cost:50, imported:'n', taxable:'y'});
    return items;
}
export {createList}