# ReactJS NextJS Boilerplate

This repo is a basic definition of a ReactJS project that we like to use at Zircon. Follow the instalation guide below and the [code guidelines](https://github.com/zircon-tech/reactjs-boilerplate/blob/master/GUIDELINES.md)

## Tech Stack

NextJs with Typescript + TailwindCss + DaisyUI

## Setup

This project uses node version "16.14.2"

Install Node Version Manager (nvm) to move between versions;

### Install yarn

`npm i -g yarn`

### Install dependencies

`yarn install`

### Netlify

#### Instal Netlify's CLI

`npm i -g netlify-cli`

#### Config Netlify's CLI

Log in using the following command, which will open Netlify's website for authorisation:

`netlify login`

(Make sure you are logged in with the right user. If not, log out and log back in.)

After loggin in, run the following command:

`netlify link`

#### Automated deploys

Automatic deploys are made by doing `git push` on a certain set of branches.

## Suggested flow

`netlify link`

`netlify dev`

`netlify deploy --build` (previews deploy)

`git push` (deploys to develop-hover-corporate-website or vdepending on what was chosen in step 1)
