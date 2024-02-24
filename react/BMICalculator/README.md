## BMI Calculator App

A user can add new to-do or delete it.

- Vite: npm create vite@latest, React-Javascript
- Styled-Compoents

## Learned & Worked On:

- I installed an extension called: 'vscode-styled-components' this helps with intelliSense of the css insinde the literals
- Even though i didint actively use the app.css file, it was applied to my component because it was imported in the component.
- I used the code: "react/prop-types": "off" in the .eslintrc.cjs file to cancel props validation requirements.
- Use onSubmit property with forms and onClick with buttons!
- when passing props either use {} or name={} you can not directly use name:name => name.
  <BMIForm setBmiResult={setBmiResult} /> or <BMIForm {setBmiResult} /> not: <BMIForm setBmiResult/>
- Do not change the previous state always create a new one:

```jsx
//WRONG
<BMIInput
  placeholder="Height(m)"
  value={formValues.height}
  onChange={(e) => setFormValues((prev) => (prev.height = e.target.value))}
/>
//CORRECT
<BMIInput
  placeholder="Height(m)"
  value={formValues.height}
  onChange={(e) => setFormValues((prev) => ({...prev, height:e.target.value}))}
/>
```

- It is not available to send props via react router dom thus i used a wrapper of the already availabile page, check app.jsx for that

- Image:
- ![proj_bmi](https://github.com/Can-tech/webdev-frontend/assets/61757250/d776137e-14c1-4f67-9ac8-76169ba5c3ba)

