/*
 * ThreePointEstimation
 * https://github.com/sholsinger/tpe
 *
 * Copyright (c) 2015 Steve Holsinger
 * Licensed under the MIT license.
 */

'use strict';

/*
Confidence level in E value +/- SD is approximately 68%
Confidence level in E value +/- 1.645 × SD is approximately 90%
Confidence level in E value +/- 2 × SD is approximately 95%
Confidence level in E value +/- 3 × SD is approximately 99.7%
source: https://en.wikipedia.org/wiki/Three-point_estimation
*/

exports.createEstimate = function (best, worst, realistic) {
	var stdDeviation = (worst - best) / 6,
			weightedAverage = (best + 4 *realistic + worst) / 6;
	//console.log("Std Dev: %d, weightedAverage: %d", stdDeviation, weightedAverage);
	return weightedAverage + 2 * stdDeviation;
};
