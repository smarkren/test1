sap.ui.define([
    'jquery.sap.global',
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel'
], function (jQuery, Controller, JSONModel) {
    "use strict";

    var PageController = Controller.extend("com.blum.fas001.view.Main", {

        onInit: function (oEvent) {
            // set explored app's demo model on this sample
            var oModel = new JSONModel();
            this.getView().setModel(oModel);

            sap.ui.getCore().attachValidationError(function (oEvent) {
                oEvent.getParameter("element").setValueState(ValueState.Error);
            });

            var field1 = this.byId("field1");
            sap.ui.getCore().getMessageManager().registerObject(field1, true);

            var field2 = this.byId("field2");
            sap.ui.getCore().getMessageManager().registerObject(field2, true);
        },

        PasswordType: sap.ui.model.SimpleType.extend("com.blum.fas001.type.Password", {
            formatValue: function (oValue) {
                return oValue;
            },
            parseValue: function (oValue) {
                return oValue;
            },
            validateValue: function (oValue) {
                if (!/\d+/.test(oValue)) {
                    throw new sap.ui.model.ValidateException("Must contain a number");
                } else if (!/[A-Z]+.*/.test(oValue)) {
                    throw new sap.ui.model.ValidateException("Must contain at least on Uppercase letter");
                } else if (!/[a-z]+.*/.test(oValue)) {
                    throw new sap.ui.model.ValidateException("Must contain at least on Lowercase letter");
                } else if (oValue.length < 8) {
                    throw new sap.ui.model.ValidateException("Must be at least 8 characters long");
                }
                return oValue;
            }
        })


    });


    return PageController;

});
