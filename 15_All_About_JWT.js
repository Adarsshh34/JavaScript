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

  
