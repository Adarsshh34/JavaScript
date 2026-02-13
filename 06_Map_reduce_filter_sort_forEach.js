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

const users =[
    {name:"adarsh",age:20},
    {name:"sneha",age:20},
    {name:"raj",age:15}
    ];

// Example 2
const users =[
    {name:"adarsh",age:20},
    {name:"sneha",age:20},
    {name:"raj",age:19}
    ];
    
const ans = users.reduce((list, curr)=>{
    if(list[curr.age]){
        list[curr.age] = ++list[curr.age];
    }
    else{
        list[curr.age] = 1;
    }
    return list;
},{})
console.log(ans);

// Function chaining
const ans1 = users.filter((ele)=>{
    return ele.age > 18;
}).map((element)=>{
    return element.name;
})
console.log(ans1);

// Same example one liner
const ans1 = users.filter((ele)=> ele.age > 18 ).map((element)=>element.name);
console.log(ans1);

// Same question using reduce
const ans2 = users.reduce((list, curr)=>{
    if(curr.age > 18){
        list.push(curr.name);
    }
    return list;
},[]);
console.log(ans2);
