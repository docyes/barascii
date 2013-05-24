Bar ASCII
========

A JavaScript ASCII Bar Chart Generator 

<pre>
▅▂▅▂▄▅▂▁▂▄▅▂▅▂▂▄▁▂▄▅█▄▅▂▁▂▄▅▂▅██████▄▅▅▂▂▄▅▂▁▂▄▅▂▁▂▄▅▂▅▂▂▄
</pre>

## Browser (Classic)
```js
var chart = new BarASCII();
console.log(chart.plot([1, 4, 20, 10, 12, 13, 26, 17], {stringify: true}));
```

## Browser (AMD)
```js
define(['barascii'], function(BarASCII) {
  var chart = new BarASCII();
  console.log(chart.plot([1, 4, 20, 10, 12, 13, 26, 17], {stringify: true}));
});
```

## Server (Node.js)
```js
var BarASCII = require('./barascii.js');
var chart = new BarASCII();
console.log(chart.plot([1, 4, 20, 10, 12, 13, 26, 17], {stringify: true}));
```
