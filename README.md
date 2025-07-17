[![Vue build](https://github.com/gyk4j/vue-app/actions/workflows/build.yml/badge.svg)](https://github.com/gyk4j/vue-app/actions/workflows/build.yml)

# vue-app

## System setup

Prerequisites:

1. [Yarn v1.22.22](https://classic.yarnpkg.com/) (NOTE: Yarn 1 Classic has been replaced by Yarn 2+)
2. [Vue 2](https://v2.vuejs.org/) (NOTE: Vue 2 has reached EOL)
3. [vue-cli](https://cli.vuejs.org/) (NOTE: Superceded by [vite](https://vite.dev/) from Vue 3)

### Install Yarn package manager

```console
$ npm install -g yarn@1.22.22
$ yarn --version
```

### Install Vue 2 and CLI

```console
$ yarn global add vue@^2
$ yarn global add @vue/cli
$ vue --version
```

### Create empty project using template

```console
$ vue create vue-app -p "Default (Vue 2)"
$ cd vue-app
$ yarn set version classic
```

## Project setup
```console
yarn install
```

### Compiles and hot-reloads for development
```console
yarn serve
```

### Compiles and minifies for production
```console
yarn build
```

### Lints and fixes files
```console
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
