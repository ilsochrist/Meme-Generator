# Meme-Generator

This a project develope to generator memes, used to study Docker, Docker compose, 
can use this project in any system that you like and it was developed first in Linux.

<h3>## Used tools:</h3>
<ul>
<li>JavaScript</li>
<li>Docker Compose</li>
<li>Node.js</li>
<li>Linux</li>
</ul>

## Available Scripts

In the project directory, first you have to install node modules in terminal:

### `npm i`

You have to check your dockerfile, need to use your current version of node:

### FROM node:x-slim

And you have to check your docker-compose.yml, need to use your current version of docker-compose:

### version: 'X.X.X'

Now you can run and generator your meme:

### docker-compose up --build
