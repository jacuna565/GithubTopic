# GITHUB topics
About this project:
- consume from [Github Graphql API](https://docs.github.com/en/graphql)
- Display topics related with "react" (by default)
- Show how many stargazer each topic has.
- When click on a topic displays the topics related with that topic and also show how many stargazers they have
- search input allows to search by topics when hit ENTER

**Future Improvements:**
Right now im loading 15 registers by default (first: 15) i could be nice to have a dinamic loading button to load by 15 each time the user clicks on it!

note: in order to run this project you must add into your `.env` file your github token: `REACT_APP_GITHUB_TOKEN=your_token_here`

## Dependencies:
- [@apollo/client](https://www.apollographql.com/docs/react/) state management library that enables you to manage both local and remote data with [GraphQL](https://graphql.org/)
- [prop-types](https://www.npmjs.com/package/prop-types) to verify the component prop types
- [styled-components](https://styled-components.com/) for Css in JS


## Available Scripts

In the project directory, you can run:

### `yarn`
to install all dependencies

### `yarn start`
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `yarn test`

Launches the test runner in the interactive watch mode.


Author: [Jan Acuna](https://www.linkedin.com/in/jan-acuna/)