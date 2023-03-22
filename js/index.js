let bozor = [
  { // марка год цена гарантия
  brand: "Gentra",
  year: 2012,
  price: 170000,
  guarantee: true
}, {
  brand: "Ferrari F244",
  year: 2000,
  price: 280000,
  guarantee: true
}, {
  brand: "Ferrari F100",
  year: 1990,
  price: 250000,
  guarantee: false
},
{
        brand: "Bugatti",
        year: 2004,
        price: 140000,
        guarantee: true
      }, {
        brand: "BMW",
        year: 2022,
        price: 280000,
        guarantee: true
      }, {
        brand: "Bently",
        year: 2023,
        price: 300000,
        guarantee: false
      }

]
console.log(bozor);

let b=["на букву Б"]
let staraya=["если машина ниже 2010 то старая и нет гарантии"]
let novaya=["если машина выше 2010 то новая и есть гарантия"]
let sort=["сортируем машины по ценам ниже 250000"]
let garant=["убираем гарантию"]
let udal=["удаленный G"]

for(let item of bozor){
  if(item.brand[0]=="B"){
   b.push(item);
  }
  if(item.year<=2010){
    item.srok="старая"
    item.guarantee="нет гарантии"
    staraya.push(item)
  }
  else if(item.year>=2010){
    item.srok="новая"
    item.guarantee="1 год гарантии"
    novaya.push(item)
  }
  
if(item.price<=250000){
  sort.push(item)
}
if(item.brand[0]=="G"){
 udal.push(item)
}

}
let udali=bozor.shift(0)
console.log(b);
console.log(staraya);
console.log(novaya);
console.log(sort);
console.log(udal);


















