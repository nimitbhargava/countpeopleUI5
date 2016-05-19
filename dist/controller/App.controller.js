sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("CountPeople.controller.App", {
		onInit: function() {
			this.getView().byId('__text1').setText("");
		},

		setInput: function() {
			var text = this.getView().byId('__input0').getValue().trim();
			if (text !== "") {
				var array = text.split(";");
				sap.m.MessageToast.show("The total number of people in the text area -> " + array.length);
				// For optimization - commented
				// for (var i = 0; i < array.length; i++) {
				// 	var value = array[i];
				// 	console.log(value);
				// }
				this.getView().byId('__text1').setText(array.length);
			} else {
				sap.m.MessageToast.show("No person in the text area");
				this.getView().byId('__text1').setText("0");
			}
		},
		clearInput: function() {
			if (this.getView().byId('__input0').getValue() !== "") {
				this.getView().byId('__input0').setValue("");
				this.getView().byId('__text1').setText("");
				sap.m.MessageToast.show("Input cleared");
			} else {
				this.getView().byId('__text1').setText("");
				sap.m.MessageToast.show("Input is already clear");
			}
		},
		exCSV: function() {
		    sap.m.MessageToast.show("Yet to be implemented");
		},
		exTXT: function() {
            sap.m.MessageToast.show("Yet to be implemented");
		},
		exit: function() {
			window.close();
		}
	});
});