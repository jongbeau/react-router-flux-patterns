# react-router-flux-patterns
To build app:
```
npm install
npm run dev
```
Then visit: http://localhost:8080/

## Background
While working with react, react-router, and flux I've encountered some common patterns around async data loading. Since there isn't complete agreement in the community about how to handle async data, I'll build some simple examples to show how we have been doing this at GoCo.

## Patterns:
* Fetch data from API when a component loads
* Write data to API
* Read/Write API and redirect based on response 
* Handle API failures
* Authentication with redirect (not done)
* Delare data dependencies and block rendering until data arrives (not done)
