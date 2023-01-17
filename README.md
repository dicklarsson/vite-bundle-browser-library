# vite-bundle-browser-library
Example, bundle library as ECMAScript module using VITE,,,, to be used in web browsers

So we use third party library `axios` to consume a REST service.

We bundle our own code and all dependencies (yes only axios) into a cjs bundle.

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

In the projects working directory run ```
npx serve
´´´
 

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
