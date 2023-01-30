const clothing_store = {
    "store_name": "Nacs clothing",
    "year_created": "2022",
    "arr_item":["Blue T-shirt" , "Pink shirt " , "Slippers" , "Rubber shoes" , "Yellow shorts"]
}
clothing_store.store_name = "CRN clothing";
clothing_store.arr_item.push("White T-shirt");
console.log("This is "+clothing_store.store_name);
console.log("Year created: "+clothing_store.year_created);
for(item in clothing_store.arr_item){
    console.log(clothing_store.arr_item[item]);
}
console.log("I want to buy "+clothing_store.arr_item[3]);
