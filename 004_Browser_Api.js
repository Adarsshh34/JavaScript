DOM manipulation
document.getElementById("title");
document.querySelector(".btn");
document.querySelectorAll("li");

Event bubbling, capturing, delegation
Event Bubbling (Default behavior) -> Event starts from the target element and moves up to parent → document
Event Capturing (Trickling) -> Event starts from document → parent → child (Capturing phase is disabled by default)
Event Delegation -> Event delegation is a technique where you attach a single event listener to a parent element instead of multiple child elements, and handle child events using event bubbling.

To stop bubbling -> e.stopPropagation();
To Stop bubbling + capturing completely -> e.stopImmediatePropagation();
e.preventDefault() -> stops the browser’s default behavior associated with an event.
  

LocalStorage vs SessionStorage vs Cookies
LocalStorage -> stores data permanently in the browser (until manually cleared).
  Lifetime: Never expires
  Scope: Same origin
SessionStorage -> Stores data only for the current tab/session.
  Lifetime: Until tab/window is closed
  Scope: Same origin + same tab
Cookies -> Small key-value data sent automatically with every HTTP request.
  Lifetime: Configurable (expires, max-age)
  Scope: Domain & path based


Fetch API -> Fetch API is a modern JavaScript API used to make HTTP requests (GET, POST, PUT, DELETE)
  It is promise-based

CORS -> The browser blocks it, NOT the server.
How CORS Blocking Actually Works (Step-by-Step)
🔹 Case 1: Simple Cross-Origin Request (GET)
1️⃣ Frontend (http://siteA.com) makes request to backend (http://siteB.com)
2️⃣ Browser sends request to server
3️⃣ Server responds (200 OK)
4️⃣ Browser checks response headers:

Access-Control-Allow-Origin: http://siteA.com

✅ Header present → JS can read response

❌ Header missing → browser blocks response access

📌 Server is unaware of the block
