## React Markdown Notes

This project is a note-taking app in which a user can create notes by using Markdown language.

## Technology

- Vite(js)
- React

## Packages

- @emotion/react: A library for writing CSS in JavaScript, enabling dynamic styling in React components.
- markdown-it: A Markdown parser that converts Markdown into HTML, allowing for customizable syntax and extensions.
- react-router-dom: A routing library for React, enabling navigation between components and syncing the UI with the URL.

## What I Learned & Mistakes

- The css prop is a special prop provided by Emotion. However, it's not recognized by React out of the box. To use the css prop in your React application, you need to set up a JSX Pragma at the top of your file. This tells the compiler to use the custom JSX function provided by Emotion instead of the default one provided by React.

  > ???? pragma is a feature of Babel's JSX transform, and it's not supported by esbuild. and ??? Vite projects don't use Babel for transforming JSX by default. Instead, they use esbuild

  ```
  /** @jsxImportSource @emotion/react */
  import { css } from '@emotion/react';
  import { useState } from 'react';

  function App() {
  ```

  > Note that: The /\*_ @jsxImportSource @emotion/react _/ pragma needs to be added to every file where you want to use the css prop from Emotion. It doesn't propagate down to child components or across different files.
  > If you want to avoid adding the pragma to every file, you can configure Babel to always use the JSX function from @emotion/react instead of React's.
  > Vite projects don't use Babel for transforming JSX by default. Instead, they use esbuild, which is faster. The JSX transform is configured in the vite.config.js file. If you want to use the @emotion/react JSX function for all your files, you can configure Vite to do so. However, this requires a custom plugin because Vite doesn't support custom JSX transforms out of the box.

- In the heading section I had two elements to be placed. One to be in the center, one to be in the end. To achive that I created 3 elments and used space-between. So there were 3 at the start, center, end. In order this to be work, the elments at the end and start have to have same size. Later i added css instruction to the one at the start.

  > If you want the button to be in the layout but not visible, you can use the visibility: hidden.
  > If you want to hide an element, you should use display: none;. This will hide the element and it will not take up any space in the layout.

- remove the outline of the textarea with ! "outline: none;" and "border: none;"
- Normally we write in middle of the textarea to display a text: `<textarea>Some text</textarea>`. In React, use the useState hook to manage the state of the textarea by:
  ```
    const [markdownText, setMarkdownText] = useState('');
    return (
    <textarea
    placeholder="Markdown note"
    value={markdownText} // Use the state variable as the value
    onChange={(e) => setMarkdownText(e.target.value)} // Update the state when the textarea changes
    css={css`
      width: 90%;
  ```
  > You can disable writing in a textarea by adding the "disabled" attribute.
- use markdown-it library to convert Markdown to HTML, you can use the dangerouslySetInnerHTML prop in React to insert the resulting HTML into your component. Note that using dangerouslySetInnerHTML can cause vulnerabilities check the react-markdown package it says it is "safe by default (no dangerouslySetInnerHTML or XSS attacks)"

  ```
  import MarkdownIt from 'markdown-it';
  const md = new MarkdownIt();
  <div
  contentEditable={false}
  css={css`    width: 90%;` }
  dangerouslySetInnerHTML={{ __html: md.render(markdownText) }}
  />
  ```

  > Note that, in order to html's built-in styling to be work there musn't be a overriding css codes like "css reset" or others in the index.css

- markdown-it by default follows the CommonMark spec, which doesn't treat single line breaks as <br>. You need to enable the breaks option in markdown-it to change this behavior.
  `const md = new MarkdownIt({ breaks: true }); // Enable line breaks`

- To access the form fields, you need to use the ref attribute in React OR access form fields using e.target.elements.name.value where name is the name attribute of the input field.
  ```
  //when on submit handled
  function handleSubmit(e) {
  e.preventDefault();
  console.log(e.target.elements.yourInputName.value);
  }
  ```
- when i try to make it grov it does not grov from center but it groves to the bootom.(width>higher width) By default, elements grow from the top-left corner. To make an element grow from the center, you can use the transform property with the scale() function. Also consider: To make an element grow from the center, you can use the transform-origin
  ```
  css={css`
  position: absolute;
  transition: transform 0.3s ease;
  &:hover {
  transform: scale(1.1);
  }
  `}
  ```
- To access the query parameters in a URL using react-router-dom. There is really good blog post:https://scientyficworld.org/how-to-use-query-parameters-with-react-router/ According to that, I used,

```
  import { useSearchParams, useNavigate } from "react-router-dom";

  let navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  // Get a specific query parameter
  const noteNameQuery = searchParams.get("name");

  navigate("/");//use to navigate
```

- The map function should return a value for each element in the array.
  ```
  const newNotes = notes.map((e) => {
  if (e.name == nameInput) {
    e.body = markdownText;
  }
  return e; // return the (possibly modified) element
  });
  ```
- use CSS media queries to change the width of the element based on the screen size.
  ```
  @media screen and (max-width: 600px) {
  width: 100%;
  }
  ```

## Getting Started

To run the portfolio project locally, follow these steps:

1. Clone the repository.
2. Install the necessary dependencies: `npm install`
3. Start the development server: `npm start`
4. Open your browser and navigate to `http://localhost:3000` to view the project.

## License

This project is licensed under the [MIT License](LICENSE).
