GET – Fetch data
  Purpose: Read / retrieve data from server
  No side effects (should not change data)
  Example :
  fetch("https://api.example.com/profile", {
      method: "GET",
      headers: {                             // this is only used we are using JWT token
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })

POST – Create new data
  Purpose: Send data to server to create something new
   fetch("https://api.example.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    })
  # Key characteristics
      Creates a new resource
      Server decides the ID
      Not idempotent -> (calling twice → creates two users)
  # Real-world uses
      Signup
      Create quiz  
      Login
      Logout
      Search with complex body

PUT – Replace entire resource
  Purpose: Update or replace a resource completely
  # Key characteristics
      Replaces entire object
      Missing fields may be overwritten / set to null
      Idempotent -> (calling multiple times → same result)
  
      Think of it as -> “Here is the full new version of this resource.”
      Example: -> put does not merge it replace entire thing.
      fetch("/users/1", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: "Adarsh Kumar",
          age: 26
        })
      });


PATCH – Partial update 
  # Key characteristics
      Updates only provided fields
      More efficient than PUT
      Usually not strictly 
      Idempotent -> (depends on implementation)
      Think of it as -> “Change only what I mention.”

DELETE – Remove data
  DELETE /users/123
  fetch("/api/users/123", {
    method: "DELETE",
    headers: {
      Authorization: "Bearer token"
    }
  });
  used to remove a resource from the server.
  Idempotent -> (calling multiple times → same result).
  soft delete vs hard delete
  we keep element id to be deleted in url
  does we add body in delete?
    Technically yes, HTTP allows a body in DELETE
    Practically almost no framework or client reliably supports it
    Browsers: fetch ignores DELETE body in some cases
    Axios: allows it, but not all servers accept it
    Spring Boot: will throw error unless you explicitly handle @RequestBody
  One Liner -> While the HTTP spec allows a body in DELETE, most clients, servers, and proxies do not reliably support it. Best practice is to either use query parameters or POST for batch deletion. DELETE should usually operate on a single, identified resource.

QUESTIONS:
1. Using GET with body will it act as POST
ANS :
  No, adding a body to a GET request does NOT make it behave like POST.
  Adding a body to a GET request usually does not throw a client-side error, but the body is typically ignored.

2. Using POST as GET
  POST requests can be sent without a body. Errors only occur if the backend explicitly requires a request body.
  Yes, POST can be used to fetch data, and many real-world systems use POST for complex searches. 
  However, GET should be preferred for simple, cacheable read operations, 
  while POST is better for searches requiring a complex request body or sensitive data.
    
  One Liner -> PUT can only create a resource if the client specifies the resource identifier in the URL. Sending just the data without an ID will not work, because PUT operates on a specific resource, not on a collection. That’s why POST is used for creation in most systems.

3. In Short
  POST → create
  PUT → replace
  PATCH → modify

4. can we achieve POST using PUT?
  Technically yes, post create new resource and put replaces it
  inorder to replace any data using put we should know resource id
  Just sending user data in a PUT request will NOT create a new resource.
  A PUT request must target a specific resource URI (with an ID).
    
