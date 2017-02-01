'use strict';

describe('jDash.version module', function() {
  beforeEach(module('jDash.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
