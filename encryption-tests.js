// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by encryption.js.
import { name as packageName } from "meteor/encryption";

// Write your tests here!
// Here is an example.
Tinytest.add('encryption - example', function (test) {
  test.equal(packageName, "encryption");
});

Tinytest.add('encryption - example', function (test) {
  test.equal(packageName, "encryption");
});
