# vite-bundle-browser-library
Example, bundle library as ECMAScript / ES6 module using VITE,,,, to be used in web browsers

So we use third party library `axios` to consume a REST service.

We bundle our own code and all dependencies (yes only axios) into a cjs bundle.

**To fully undstand what is going on, why this work.**
- Try out the example
- Read paragraph "Library Mode" in the official documentations should https://vitejs.dev/guide/build.html#library-mode

## Install

Clone the git repo.

```
npm install
```

## Build
```
npm run build
```

## Test

In the projects working directory run 
```
npx serve
```
 

## Code

Load and use the library in the browser
``` 
<script type="module">

  import { getUsers } from "./dist/my-lib.js";

  const users = await getUsers();

  function printUser(user) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${user.first_name}</td><td>${user.last_name}</td><td>${user.email}</td>`;
    document.getElementById("tbody").appendChild(tr);
  }

  users.map(printUser);

</script>
```
