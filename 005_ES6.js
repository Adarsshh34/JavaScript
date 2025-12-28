Template literals
`string text ${expression}`

Optional chaining (?.) -> allows you to safely access nested object properties or methods without throwing an error if something is null or undefined.
console.log(user.profile.address.city); // ❌ Error
console.log(user.profile.address?.city); // undefined (correct way)


Nullish coalescing (??) -> Nullish coalescing (??) is an operator that returns the right-hand value only if the left-hand value is null or undefined.
const result = value ?? defaultValue;
Problem with || (Logical OR)
const count = 0;
const result = count || 10;
console.log(result); // 10 ❌ (wrong)

Why?
Because || treats these as falsy:
0
false
""
