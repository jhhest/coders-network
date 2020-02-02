# Project briefing: building a social network for developers

To practice using Redux in ever larger React apps, we're going to work on a project during the week.

## What are we building?

We're going to build a **Social network for developers**. Imagine Twitter, Facebook, or the like, but then customized for us: developers! An excellent example of a social network for developers (mostly front-enders in fact) is [`dev.to`](https://dev.to/), so you can take that as inspiration too.

## The API

Following the traditional front-end vs back-end split, we're going to _consume_ an existing API. The teachers have "prepared" a basic API for you to use. Everybody will be using this same API, which is fun, because then you'll be able to see each other's articles show up, comment on them, even document and share your own learnings on the network!

_Fun side-note: you'll be able to make an API like this in just a few weeks as well_ 😄

The API itself, as well as it's documentation, can be found here:

- https://codaisseur-coders-network.herokuapp.com/

## Features that we will be building

#### Profile page

On their profile page, a developer can describe themselves: their favorite programming languages, tools, libraries, etc.

Also, the most recent posts and comments that that developer made will show up on their profile page.

#### Updating your profile

Of course the developers on this social network will want to update their profiles, so we'll be adding this functionality too.

#### Login functionality

Because we don't want everybody to be able to change everybody else's profile, we're going to let developers log in to their account first.

#### Writing articles and comments on these articles

Developers will be able to write articles, say about what they learned or made. These articles can be organized with tags. Also, other developers can add comments to articles.

#### A feed of articles

A feed of articles that people wrote will be shown on the homepage.

## Learning Objectives

- Setting up Redux
- Connecting your components with Redux state
- Dispatching actions from your components to the Redux store to change its state
- Writing reusable actions (action creators - functions that return actions)
- Using thunk actions to "orchestrate" asynchronous operations and dispatching normal actions
- If you refresh any page your app shouldn't crash (each component should be able to fetch its own data)

## Getting started

### Ideation

_(Take some time to brainstorm and scale up the project)_

1. What is this social network going to look like?
2. What features are you going to build?
3. Draw some simple designs on a piece paper (a.k.a. a wireframe)

Wireframe example:

![Wireframe](https://p18.f3.n0.cdn.getcloudapp.com/items/6quDqWlZ/Image+2019-11-20+at+11.58.05+PM.png)

### Programming

1. Make a new react app using create-react-app
2. Setup the redux store together with your teammate - including

   - A `src/store` folder with an `reducer.js` that combines multiple sub-reducers with `combineReducers()` -- this way you can add more sub-reducers when/if your app grows bigger
   - A main store file `src/store/index.js` which makes a store from this root reducer. Don't forget Redux DevTools and `redux-thunk`
   - At least 1 sub-reducer with an initial state
   - Wrapping your app in the `<Provider>` component in index.js
   - npm start your app and check redux-devtools to see if you've got an initial state

3. Make a new repository on GitHub and add it as a remote to your react app
4. Push to the master branch of GitHub
5. Make a new branch **`development`** and push it to GitHub as well
6. Add your teammate as a collaborator (in the settings of your repository)
7. On Github in settings/branches make the **`development`** your default branch
8. Make a branch an start making small components, actions & reducers
9. When you've finished a part of the app - push your branch to github
10. Make a pull request to **`development`** to merge your work
11. When you have a working version, test development locally. Then make a pull request from development to master to ship your new version

## Rough planning

You will not get around to implementing all the features described, and that's totally fine. Here's a rough sketch of what we're hoping you should be able to make after each day:

#### Wednesday

We'll be _setting up the project_ and _designing the Redux state_ today. That means deciding which state we're probably going to have, in which shape we're going to store it, etc. This doesn't have to be a definitive design, but rather just a good start.

We except you to be able to do some data fetching, storing the data in Redux state, and displaying them in the app. The app should have multiple pages, say, one for the feed and one for the profile page.

#### Thursday

We're going to add login functionality. After having logged in, the app gets an "access token", which can be used to call authenticated API methods.

You can make a "Write a post" page, where the logged in user can add a new post. Alternatively, a comment box for existing posts. Or, a like/unlike button for existing posts.

It's OK if refreshing the page automatically logs you out. If you want to, you can store the access token in _local storage_ te keep logged in, but this is not required.

#### Friday

- A registration page
- Adding more functionality (likes, comments, ...)
- Making things beautiful with CSS (maybe use a CSS library like Bootstrap or Bulma)
- Finishing things up.
