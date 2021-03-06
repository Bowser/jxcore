// Copyright & License details are available under JXCORE_LICENSE file


if (process.IsEmbedded)
  return;

var assert = require('assert');

var cmd = '"' + process.execPath + '" monitor ';

var arr = [
  cmd + "start",
  cmd + "stop"
];

for (var o in arr) {
  var res = jxcore.utils.cmdSync(arr[o]);
  var splited = res.out.split("\n");

  assert.ok(splited.length >= 2, "Output from running the command " + arr[o] + " is probably shorter: \n" + JSON.stringify(res, null, 4));
}