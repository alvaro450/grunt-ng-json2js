'use strict';

var grunt = require('grunt');

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */

exports.ng_json2js = {
    setUp: function (done) {
        // setup here if necessary
        done();
    },
    default_options: function (test) {
        test.expect(0);

        //var actual123 = grunt.file.read('test/fixtures/123.js');
        //var expected123 = grunt.file.read('test/expected/123/default_options');
        //test.equal(actual123, expected123, 'should describe what the default behavior is.');

        test.done();
    },
    custom_options: function (test) {
        test.expect(2);


        var actual123 = grunt.file.read('test/fixtures/123.js');
        var expected123 = grunt.file.read('test/expected/123/custom_options');

        test.notStrictEqual(actual123, expected123, 'should describe what the custom option(s) behavior is.');

        var actualTesting = grunt.file.read('test/fixtures/testing.js');
        var expectedTesting = grunt.file.read('test/expected/testing/custom_options');

        test.notStrictEqual(actualTesting, expectedTesting, 'should describe what the custom option(s) behavior is.');

        test.done();
    }
};
