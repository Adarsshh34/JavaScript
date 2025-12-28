const companies =[
    {name:"Apple",category:"Product base",year:1998},
    {name:"TCS",category:"Service base", year:1995},
    {name:"Amazon",category:"Product base", year:2000}
]

for(var i=0;i<companies.length;i++){
    console.log(companies[i]);
}
// ForEach
companies.forEach((comp)=>{
    console.log(comp)
})

// Filter - true/false need to be return and entire ans is retured in as list

const a =companies.filter((comp)=>{
    return comp.category === "Product base";
})
console.log(a);


// Map

const a =companies.map((comp)=>{
    return comp.name
})
console.log(a);


// Sort

const b = companies.sort((comp1,comp2)=>{
    if(comp1.year > comp2.year) return 1;
    else return -1;
});
console.log(b);


// Reduce
let total = 0;
let c = companies.reduce((total, comp)=>{
    return  total + comp.year;
},0);
console.log(c);
