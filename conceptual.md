### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  React Router lets you change pages or views in a React app without reloading the whole page.

- What is a single page application?
  A single page app loads one main HTML file and uses JavaScript to update the page as you click around.

- What are some differences between client side and server side routing?
  Client-side routing changes pages in the browser using JavaScript, while server-side routing asks the server for a new page every time.

- What are two ways of handling redirects with React Router? When would you use each?
  1.  Use the <Navigate> (or older <Redirect>) component when you want React to automatically move users to another page.
  2.  Use useNavigate() (or history.push()) in code when you want to redirect after something happens, like form submission or login.
- What are two different ways to handle page-not-found user experiences using React Router?
  1.  Add a “catch-all” route at the bottom that shows a 404 page when no other routes match.
  2.  Redirect users to a /not-found page if something doesn’t exist.
- How do you grab URL parameters from within a component using React Router?
  Use the useParams() hook to read dynamic parts of the URL, like /products/:id.

- What is context in React? When would you use it?
  Context lets you share data like a theme or logged-in user across many components without passing props each time.

- Describe some differences between class-based components and function components in React.
  Class components use this.state and lifecycle methods, while function components use hooks and are usually simpler to write.

- What are some of the problems that hooks were designed to solve?
  Hooks let function components use state and side effects, and make it easier to reuse logic without classes or complex setups.
