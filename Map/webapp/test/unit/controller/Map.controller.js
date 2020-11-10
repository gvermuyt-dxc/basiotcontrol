/*global QUnit*/

sap.ui.define([
	"gve/iot/Map/controller/Map.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Map Controller");

	QUnit.test("I should test the Map controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
