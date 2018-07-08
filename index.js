'use strict';
const isPositiveInt = require('is-positive-int');

/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */
module.exports = function(number, locale) {
	return isPositiveInt(number) ? number.toLocaleString(locale) : 0;
};
