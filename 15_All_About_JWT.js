https://chatgpt.com/c/697a7549-202c-8323-b0c2-72c2e4d1bd41

JWT is a stateless, self-contained token used for authentication and authorization.
  A JWT has 3 parts, separated by .
  HEADER.PAYLOAD.SIGNATURE

Header : {"alg": "HS256","typ": "JWT"}
Payload : {"sub": "adarsh","role": "ADMIN","iat": 1700000000,"exp": 1700003600 }
Signature : HMACSHA256( base64(header) + "." + base64(payload) , secret)

Q) Difficulty faced while implementing JWT

1. Saving JWT in cookies instead of localstorge 
to prevent from XSS ( Cross Site Scripting) in this attach, using JS attacker can get your token stored in localstorage. eg const token = localStorage.getItem("token");
Recommended way -> store token in HttpOnly Cookies
    JS cannot directly access it like localstorage
    token send automaically in every call

# need to set below flag for secure cookie storage
Set-Cookie: jwt=token_here;
HttpOnly; Secure; SameSite=Strict

what is http Cookies ? -> HttpOnly cookies are normal cookies with an additional security flag that prevents JavaScript access

"withCredentials: true" -> tells the browser to include cookies and authentication credentials in cross-origin HTTP requests. (this flag should be included in every call).


2. Handling Token Expiration & Auto Logout
Problem -> when JWT expire : BE returns 401 : if frontend does nothing -> Bad UX

Option A (Simpler) -> Expire token → auto logout user

Option B (Production-grade) -> access token expires → refresh token generates new one
------------------------------------------------------------------------------------
Token	          |  Purpose	             |  Lifetime	     |      Storage          |
Access Token	  | API authorization	     |   5–15 min	     |   HttpOnly cookie     |
Refresh Token	  | Get new access token	 |   Days / Weeks	 |   HttpOnly cookie     |
------------------------------------------------------------------------------------
  
When Access token expire -> server give 401 -> ui catches it and send request to get new access token using /auth/refresh -> server receive refresh token (validate it)
-> server send new access token to ui -> now ui uses new access token.


3. CORS & Cookie Issues (Very Real 😄)
When:
Frontend (React) → http://localhost:3000
Backend (Spring Boot) → http://localhost:8080
JWT stored in HttpOnly cookies
Cookies silently don’t get sent
Solution : 
Frontend must send credentials -> axios.post("http://localhost:8080/login", data, { withCredentials: true, });
Backend must allow credentials -> config.setAllowCredentials(true);


4. how to attend authorization
Question need to see

how to attend authorization like different profile
admin has different authorization user has different authorization 
Payload : {"sub": "adarsh","role": "ADMIN","iat": 1700000000,"exp": 1700003600 } 
* JWT payload is taken out by BE using below code
---------------------------------------------------------
private Claims extractAllClaims(String token) {
        return Jwts.parser()
                .verifyWith(getKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }
--------------------------------------------------------
* JWT token is created by BE by below code
---------------------------------------------------
Map<String, Object> claims = new HashMap<>();
claims.put("role", "ADMIN");
String token = Jwts.builder()
        .setClaims(claims)
        .setSubject(username)
        .setIssuedAt(new Date())
        .setExpiration(expiry)
        .signWith(secretKey)
        .compact();
-----------------------------------------------------------
how we enforces authorization from UI or BE ? which is best way -> BE
like Admin can only access admin panel User cannot access admin panel : so where do we restrict it at ui or be 
-> BE should restrict like /admin routes
User manually types /admin in browser -> UI may redirect -> But backend still validates role from JWT -> If role ≠ ADMIN → returns 403 Forbidden

