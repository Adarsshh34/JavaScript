DOM manipulation

selecting single element
document.getElementById("title");
document.querySelector(".btn");
document.querySelectorAll("li");

selecting multiple element
document.getElementsByClassName("class")   // HTMLCollection
document.getElementsByTagName("div")       // HTMLCollection
document.querySelectorAll(".class")        // NodeList

child-parent element traversal
element.parentElement
element.children
element.firstElementChild
element.lastElementChild
element.nextElementSibling
element.previousElementSibling

creating element
document.createElement("div")
document.createTextNode("hello")
Example :
const div = document.createElement("div");
const text = document.createTextNode("hello");
div.appendChild(text);
document.body.appendChild(div);

parent.appendChild(child)  -> old method, support all browser
parent.append(child1, child2) -> new method, not support Internet Exporer
parent.prepend(child) -> new method
element.insertBefore(newNode, referenceNode) -> old method, precise
element.remove() -> new method
parent.removeChild(child) -> old method, precise, work for all browser

Event bubbling, capturing, delegation
Event Bubbling (Default behavior) -> Event starts from the target element and moves up to parent → document (child to parent)
Event Capturing (Trickling) -> Event starts from document → parent → child (Capturing phase is disabled by default) (parent to child)
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
