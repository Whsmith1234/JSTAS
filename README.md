# JSTAS
stats with js in a notebook format
https://wizardly-aryabhata-d58f6e.netlify.app

## Printing to the page
```js
printf("Hello World!");
```
## Input
```js
function continue(input){
  printf("Hello "+ input);
}
input("Enter your name","continue");
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
