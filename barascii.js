var ticks = ['▁','▂','▃','▄','▅','▆','▇','█'];
function chart(){
    var m = Math.min.apply(null, arguments),
        n = (Math.max.apply(null, arguments) - m) / (ticks.length - 1),
        bars = [];
    for (t in arguments) {
        bars.push(ticks[(arguments[t]-m)/n >> 0]);
    }
    return bars;
}
