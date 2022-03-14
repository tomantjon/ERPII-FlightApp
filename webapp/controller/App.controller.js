sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, MessageBox) {
        "use strict";

        return Controller.extend("com.hogent.flightdemo.flightdemo.controller.App", {
            onInit: function () {
                var oFlight = {
                    Carrid : "",
                    Connid : "",
                    Fldate : null
                }
                var oModel = new JSONModel(oFlight);
                this.getView().setModel(oModel,"form");
            },
            handleSavePress: function() {
                var oForm = this.getView().getModel("form").getData();
                oForm.Fldate = new Date(oForm.Fldate);

                var odatamodel = this.getView().getModel();

                odatamodel.create("/flightSet", oForm, {
                    success: function(data, response ) {
                        MessageBox.success("Data was created successfully");
                    },
                    error: function(error) {
                        MessageBox.error("Error while creating the data");
                    }
                });
            }
        });
    });
