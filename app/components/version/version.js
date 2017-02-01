'use strict';

angular.module('jDash.version', [
  'jDash.version.interpolate-filter',
  'jDash.version.version-directive'
])

.value('version', '0.1');
