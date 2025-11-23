# Frontend Technical Specification

- Create a static website that serves an html resume.

## Resume Format Considerations

I use my own resume template found on Canva. [See here](./docs/resume.png)

## My Resume Format Generation

I let GenAI generate my HTML and my CSS, and then I refactor the code manually if needed. I use AI because building a website is not what I want to mainly focus on.

Prompt to Gemini 3:

```text
Convert this resume format into html.
Please don't use a css framework.
Please use the least amount of css tags.
```

This is [generated output](./docs/resume-minimal.html) by Gemini.

## Styling

I use GenAI to do the CSS part. 