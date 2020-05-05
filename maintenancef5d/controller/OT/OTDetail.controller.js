sap.ui.define(["com/eramet/maintenanceF5D/controller/BaseController","com/eramet/maintenanceF5D/util/util","com/eramet/maintenanceF5D/util/formatter","sap/m/MessageBox"],function(e,t,i,o){"use strict";return e.extend("com.eramet.maintenanceF5D.controller.OT.OTDetail",{onInit:function(){this.getRouter().attachRoutePatternMatched(this._onRouteMatched,this)},_onRouteMatched:function(e){if(e.getParameter("name")==="OTDetail"){this.getView().byId("breadcrumbs").setCurrentLocationText(t.oSelectedOT);var i=this.getView().getModel("i18n").getResourceBundle().getText("otDetailTextOfDetail");t.sTitleText=i+" "+t.oSelectedOT;this._resetModel();this.otDetailModel(t.oSelectedOTFull);this.setTitle()}},_resetModel:function(){var e={editable:false,icon:"sap-icon://edit"};this.otViewModel(e)},backToHome:function(){this.getRouter().navTo("Home")},onPressNavBack:function(){this.getRouter().navTo("Followup")},onPressNavToOperations:function(){this.getRouter().navTo("Operations")},onPressEdit:function(){var e=this.getView().getModel("otViewModel").getData().editable,t=e===true?"sap-icon://edit":"sap-icon://save",i={editable:!e,icon:t};if(t==="sap-icon://edit"){this._updateOT()}this.otViewModel(i)},_updateOT:function(){var e=com.eramet.maintenanceF5D.Component.getMetadata().getManifestEntry("sap.app").dataSources["ZUI5_GW_PM_ORDER_SRV"].uri,i=new sap.ui.model.odata.v2.ODataModel(e),a={OrderId:t.oSelectedOTFull.OrderId,FunctionalLocation:this.getView().byId("functionalLocation").getValue(),FinishDate:new Date(this.getView().byId("finishDate").getDateValue())},n=this;i.update("/OrderHeaderSet('"+t.oSelectedOTFull.OrderId+"')",a,{method:"PUT",success:function(e){var t=n;o.success("Successfully updated the OT",{styleClass:"sapUiSizeCompact",actions:["OK"],onClose:function(e){if(e==="OK"){t.backToHome()}}})}.bind(this),error:function(e){var t=""+JSON.stringify(e.responseText.split('"message"')[1].split('"value"')[1].split('"innererror"')[0]);t=t.split(":")[1].split("},")[0];var i=t.substring(2,t.length-2);var a=n;o.error(i,{styleClass:"sapUiSizeCompact",actions:["OK"],onClose:function(e){if(e==="OK"){a.backToHome()}}})}})}})});