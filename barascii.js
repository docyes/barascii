(function (root, factory) {
    if (typeof exports === 'object') {
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        define(factory);
    } else {
        root.returnExports = factory();
    }
}(this, function () {
    function Chart(options) {
        options || (options = {});
        this.range = options.range || ['▁','▂','▃','▄','▅','▆','▇','█'];
    }
    Chart.prototype.plot = function(values, options) {
        options || (options = {});
        var m = Math.min.apply(null, values),
            n = (Math.max.apply(null, values) - m) / (this.range.length - 1),
            columns = [];
        for (var i = 0, l = values.length; i < l; i++) {
            columns.push(this.range[(values[i] - m) / n >> 0]);
        }
        return (options.stringify) ? columns.join('') : columns;
    };
    return Chart;
}));


