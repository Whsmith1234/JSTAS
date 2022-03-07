# JSTAS
stats with js in a notebook format
https://jstas.netlify.app

## Printing to the page
```js
printf("Hello World!");
show();
```
## Input
```js
function continueProgram(input){
  printf("Hello "+ input);
  show();
}
input("Enter your name","continueProgram");
show();
```
## Line graph
```js
var x = [1,2,3];
var y = [1,2,3];
line(x,y);
```
## Histogram
```js
var x = [1,2,3,3,4,2,3,2,1];
histogram(x);
```
## Show results on page
```js
show();
```
