#! /usr/bin/env node

'use strict';

var params = process.argv.slice(2),
		ThreePointEstimation = require('../lib/ThreePointEstimation.js');

if (params.length !== 3) {
	console.error('Incorrect number of arguments. Found: %s', JSON.stringify(params));
	process.exit(9);
}

function main (params) {
	var points = params.map(function(el) {
								return parseInt(el, 10);
							}),
			estimate = ThreePointEstimation.createEstimate.apply(process, points);

	console.log("95% confidence estimate: %d", Math.round(estimate));
	process.exit(0);
}

main.call(this, params);
