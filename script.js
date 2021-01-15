window.onerror = function (msg, url, line, col, obj) {
  alert(msg + '->' + navigator.userAgent + ' -> ' + url + " : " + line + "," + col + " " + (obj ? obj.stack : obj));     
};
