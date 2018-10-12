# Ionic workshop app

The idea of this project is to serve as a framework for a very basic 
workshop about creating, testing and deploying a shopping list app using 
the [Ionic](https://ionicframework.com/) framework.



### Structure

This workshop was thought to be structured in X different "steps" or 
modules, and this project is also structured the same way using branches:
- **[step-1]()** This is the very basic structure that comes out of executing
`ionic start MyIonicProject tutorial`
- **[step-2]()** This step finished with creating a new page, structured
with the grid system, and with template variables
- **[step-3]()** The purpose of this step is to teach how the inputs in
the page interact with the component code and the rest of the template.
Also, how to create dynamic events from component data (ngIf, ngFor, etc)
- **[step-4]()** In this step we add classes and data models to ensure
consistency of data. From there, we add more functionality such as 
quantity and price
- **[step-5]()** Here we add navigation, passing data to new pages,working 
with the navController and such
- **[step-6]()** In this step we refactor our shopping list and create a 
reusable component 



### See it in action

At this point you should have the **ionic cli** already installed, but 
if not, you can do so by running `npm i -g ionic`

The only thing you have to do is run: `ionic serve -c`
 
By doing that, the ionic cli will take care of everything, install 
dependencies and everything you need, and the app should appear in your
browser in port :8100

Also, if you have the [Ionic DevApp](https://ionicframework.com/docs/pro/devapp/)
you should see it in there.
