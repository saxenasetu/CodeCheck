sap.ui.define(["sap/ui/core/UIComponent","com/eramet/maintenanceF5D/controller/BaseController","sap/ui/Device","com/eramet/maintenanceF5D/model/models"],function(e,t,n,i){"use strict";return e.extend("com.eramet.maintenanceF5D.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(i.createDeviceModel(),"device")},applyTheme:function(e){sap.ui.getCore().applyTheme(e)}})});