module.exports = function reverse (n) {
    let result = [];
    let str = String(n);
    let narr = str.split('');
    result = (narr[0]=='-') ? (narr.splice(0,1), narr.reverse()): (narr.reverse());
    return result.join('');
}
