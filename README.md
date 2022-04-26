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

Choose following options:

`Choose from a list of recently updated sites`

`hover-corporate-website` o `develop-hover-corporate-website` depending where you are working

#### Automated deploys

Automatic deploys are made by doing `git push` on a certain set of branches.

## Suggested flow

`netlify link`

`netlify dev`

`netlify deploy --build` (previews deploy)

`git push` (deploys to develop-hover-corporate-website or vdepending on what was chosen in step 1)

## Notes

It is a good practice that we always check beforehand by doing a local build, so as not to make a deploy that will end up failing. For that, run the `netlify deploy --build` command, if it has no errors, do the deploy or push

It may be that the builds are broken when deploying (when viewing the page there are things that do not load), this is due to the cache of the previous build. To fix this, on the Netlify page go to the `Deploys` section and click `Trigger Deploy` -> `Clear cache and deploy site`

If we want to push changes from development branches to `master`, create a Pull Request. As with commits, pushing to main generates an automatic deploy to `hover-corporate-website`

In case a published build is broken on the production page, go to `Deploys` -> select the previous deploy that was working -> `Publish Deploy`. Usually this should be solved with the comments in the previous note, if not, ask for help to find what may be causing the problem.

## Resources

Docs [Netlify's CLI](https://docs.netlify.com/cli/get-started/)
