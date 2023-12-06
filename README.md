# NOTES

---

## Components Of Next.js

### Server Components

- By default all components in _Next.js_ are server components.
- For our own understanding we can explicitly define the top of our component as `use server`, to declare that this is a server component.

### Client Components

- To make a component as _client_ we can do the same: `use client`.
- They are used to provide the user with immediate feedback by using states, effect and event listeners.
- They are used to update the UI.
- Use of browser API

## Routing in NextJS

### Making routes

- Add a folder.
- The route will be the folder name.
  > **Example:** If we have a folder named about, then we can go to `localhost:3000/about`. Therefore "about" becomes a route.

### Nested Routes

- We can add folders inside folders to make nested routes.

  > **Example:** We can have a folder structure that looks like this `about/info/page.js`. Now we have an about page and an info page which is nested in about page. So to navigate to this info page we can do something like this, `localhost:3000/about/info`.

  ### Dynamic Routes

  - Using `[id]` folder name inside the folder where we want dynamic route.
  - By using `params` prop in the dynamic route component we can add routing function.

### Navigation

- To navigate from one page to another we use the `Link` component from _NextJS_.
- It works like an _anchor tag_ in _HTML_.
