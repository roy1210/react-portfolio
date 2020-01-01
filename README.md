# React portfolio

## Description

Portfolio website built with React and Redux. <br/>
Be able to run from docker container without installing Node.js in local environment.

**_DEMO:_**

<img src="./src/img/ReactProjects/190713ScreenShot.jpg" width="80%">

## Usage / Install

Clone repo, cd into folder and run:

```console
$ npm install
$ npm start
```

Also, be able to install this app and run as Progressive Web App

## Usage / Install (Docker)

Install docker [here](https://docs.docker.com/docker-for-mac/install/) <br/>
Clone repo, cd into folder and run:

### Run from Dockerfile:

```console
$ docker build -t [container-name] .
$ docker run -it -p 3000:3000 [container-name]
$ npm start
```

Then open [localhost:3000](http://localhost:3000)

### Run from docker-compose:

```console
$ docker-compose build
$ docker-compose up
```

Then open [localhost:3000](http://localhost:3000)

※ Run `$ docker-compose build` only for the first time.

## Requirement

- npm
- Node (If not using docker)
- Docker (Optionally)

## Tools

- Create-react-app cli
- Redux
- Reselect
- React MDL material design
- Semantic UI React
- React Router v5
- React-Helmet
- Ress.css (Customized in html tag)
- Enzyme
- Redux DevTools

## Licence

[MIT](./LICENSE.txt)

## Author

[Shoe Kure](https://github.com/roy1210)

## References

[404page -Codepen](https://codepen.io/salehriaz/pen/erJrZM)
