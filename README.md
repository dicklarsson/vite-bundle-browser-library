# vite-bundle-browser-library
This is what we want, a simple library with external dependencies (axios) that

- Can be consumed as ECMScript module by a browser with dependencies bundled
- Can be consumed as ECMScript module in Node.js WITHOUT dependencies bundled.

 * Parcel is great for bundling a lib WITHOUT dependencies
 * VITE is great for bundling a lib WITH dependencies
 Lets use both

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

    import { getUsers } from "./dist/my-lib-browser.js";

    const users = await getUsers();

    function addUser(user) {
      const tr = document.createElement("tr");

      tr.innerHTML = `  <td>${user.first_name}</td>    
                        <td>${user.last_name}</td>    
                        <td>${user.email}</td>`;

      document.getElementById("tbody").appendChild(tr);
    }

    users.map(addUser);

  </script>
```
