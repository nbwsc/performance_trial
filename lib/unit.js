/*
    unit transformer
*/
let time_units_us = {
    scale: 1000,
    base: "us",
    units: ["ms", "s", null]
},

    time_units_s = {
        scale: 60,
        base: "s",
        units: ["m", "h", null]
    },

    binary_units = {
        scale: 1024,
        base: "",
        units: ["k", "m", "g", "t", "p", null]
    },

    metric_units = {
        scale: 1000,
        base: "",
        units: ["k", "m", "g", "t", "p", null]
    };
/**
 * @param  {} obj
 * @return function 
 * To Unite unit
 */
function unit(obj) {
    return function (t) {
        try {
            let i = obj.units.indexOf(t.split(/[\d.]+/).pop().toLowerCase());
            return parseFloat(t) * Math.pow(obj.scale, i + 1);
        } catch (error) {
            throw new Error('unit parse error: ' + t);
        }

    }
}
module.exports = {
    /**
     * @param  {} String:time_units_us
     * @return number
     */
    t_us: unit(time_units_us),
    t_s: unit(time_units_s),
    binary_units: unit(binary_units),
    metric_units: unit(metric_units),
}