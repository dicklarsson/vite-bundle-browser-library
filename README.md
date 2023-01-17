# vite-bundle-browser-library
Example, bundle library using VITE to be used in web browsers

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

Open the `test.html` file in the root folder

## Code

Load and use the library in the browser
```
  <script src="./dist/my-lib.umd.cjs"></script>

  <script type="module">
    
    const users = await MyLib.getUsers();
    function printUser(user) {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${user.first_name}</td><td>${user.last_name}</td><td>${user.email}</td>`;
      document.getElementById("table").appendChild(tr);
    }
    users.map(printUser);

  </script>
```
