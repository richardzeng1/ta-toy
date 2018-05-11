# ta-toy

> Toy application to learn how to use Vue.js

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Task

Working together, you will create a one-page Vue.js app that acts like an oversimplified
TA feedback application. The app's default page wills show a list of classes. Upon clicking a class,
a list of TAs for that class will be displayed. Upon clicking a TA, a list of tutorial/lecture sections
assigned to that TA will be displayed. In all, there are four views:

1. A parent view which provides consistent navigation for the child views.
2. A view that allows the user to select a course.
3. A view that allows the user to select a TA provided a course is selected.
4. A view that displays all tutorial/lecture sections taught provided a course and TA are selected.

## What's Provided

An `index.html` which loads the needed javascript libraries. The container app is in `js/app.js` and 
stubs for the three other components are in `js/component-...js`. As well, `get_info.php` is provided
which supplies dummy data for populating the app.

## Getting Data

A dummy php script `get_info.php` is provided with some data. To get a list of courses

	get_info.php

To get a list of TAs

	get_info.php?course=THECOURSE

To get a list of sections

	get_info.php?course=THECOURSE&ta=THETA

Every query returns a JSON object with a `TYPE` attribute which is either `courses`, `tas`, `sections`, or `error`.

## What's Next

After you get an app working with the dummy data from `get_info.php`, you can tackle getting a mariadb instance
set up and having a php script gather information from a database.

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
