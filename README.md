# NOTES

---

## Routing in NextJS

### Making routes

- Add a folder.
- The route will be the folder name.
  > **Example:** If we have a folder named about, then we can go to `localhost:3000/about`. Therefore "about" becomes a route.

### Nested Routes

- We can add folders inside folders to make nested routes.
  > **Example:** We can have a folder structure that looks like this `about/info/page.js`. Now we have an about page and an info page which is nested in about page. So to navigate to this info page we can do something like this, `localhost:3000/about/info`.

### Navigation

- To navigate from one page to another we use the `Link` component from _NextJS_.
- It works like an _anchor tag_ in _HTML_.
