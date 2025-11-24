# Frontend Technical Specification

- Create a static website that serves an html resume.

## Resume Format Considerations

I use my own resume template found on Canva.

## My Resume Format Generation

I let GenAI generate my HTML and my CSS, and then I refactor the code manually if needed. I use AI because building a website is not what I want to mainly focus on.

Prompt to Gemini 3:

```text
Convert this resume format into html.
Please don't use a css framework.
Please use the least amount of css tags.
```

## Styling

I use GenAI to do the CSS part. 

## Hosting Website Locally

I have a small server running [Dokploy](https://dokploy.com/) so whenever I push to my GitHub repository, it automatically pulls and deploys the latest version of my app.
I had to dockerize the app and split it into microservices. You can find a Dockerfile in the frontend directory. It was the best option that I had to host it locally.

Instead, I use 
```sh
# Compile Website in root directory
sudo npm i http-server -g
# Then run the server
cd frontend
http-server
```