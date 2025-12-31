### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
React Router is a library used to "fake" server-side routing on the client side for a single page application. It allows us to define multiple routes in our application and render different components based on the current URL, without requiring a full page reload.

- What is a single page application?
A single page application is a web app that loads a single HTML page and then dynmically updates the content based on the user's interactions using components and client-side routhing, rather than loading full pages from a server. This should make the user experience faster. 

- What are some differences between client side and server side routing?
The difference between the two is where routing takes place. Clients-side routing is handled by the broswer using JavaScript, while server-side routing is handled by the server (ex. HTTP GET requests). 

- What are two ways of handling redirects with React Router? When would you use each?
React Router provides a few ways to handle redirects. There is the "Navigate" component, useNavigate hook, and there is the "Link" component (which can stand in as a sort of replacement for the "a" element in HTML). The "Navigate" component is used when with logical conditions are met or not met, and you want to redirect the user to a specific route ( return << Navigate to="/home" /> ). The useNavigate hook is used when you want to programmatically navigate to a different route in response to an event ( ex. button click). The "Link" component is used when you want to create a clickable link that navigates to a different route without reloading the page.

- What are two different ways to handle page-not-found user experiences using React Router? 
Inside of the a "Routes" component you could define a route like this: < < Route path="*" element={< h 2>404: Page Not Found</ h 2>} /> . It should be the last route defined so it catches all unmateched routes. Another way is to create a dedicated NotFound component and use it in the same way: < < Route path="*" element={< < NotFound / >} /> .

- How do you grab URL parameters from within a component using React Router?
You can use the useParams hook from React Router to grab URL parameters within a component. For example, if you have a route defined as < Route path="/user/:id" element={< UserProfile />} />, you can access the id parameter in the UserProfile component like this: const { id } = useParams(); .

- What is context in React? When would you use it?
THe Context API is a feature built into React that allows you to share data across the component tree without manually passing props down throught the children components (prop drilling). You use this approach when you have data that needs to be used by many components. This shouldn't be overused because sometimes props are a better option. To set this all up you will need Context, Provider, and consumer parts.

- Describe some differences between class-based components and function
  components in React.
  Class-based components are an outdated way of component creations in React and had multiple issues such as managing and sharing state between compoents, and lifecycle methods were more complex. Functional Components are the modern way of creating components in React, and the use hooks to manage state and side effects. It is easier than a class-based approach. 

- What are some of the problems that hooks were designed to solve?
Hooks were designed to help manage state, side effects, and make functional components more powerful.  