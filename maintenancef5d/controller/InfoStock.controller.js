sap.ui.define(["com/eramet/maintenanceF5D/controller/BaseController","com/eramet/maintenanceF5D/util/util","com/eramet/maintenanceF5D/util/formatter"],function(e,t,n){"use strict";return e.extend("com.eramet.depanneur.HATDepanneurApp.controller.InfoStock",{onInit:function(){this.getRouter().attachRoutePatternMatched(this._onRouteMatched,this)},_onRouteMatched:function(e){if(e.getParameter("name")==="InfoStock"){this._resetModel()}},backToHome:function(){this.getRouter().navTo("Home")},_resetModel:function(){var e=[{title:"Code art. 1",description:"Description 1",magasin:"Magasin 1",emplacement:"Emplacement magasin 1",quantity:"10",date:"21/10/2019",equipement:"Trousse de réparation",status:"Faible"},{title:"Code art. 2",description:"Description 2",magasin:"Magasin 2",emplacement:"Emplacement magasin 2",quantity:"5",date:"18/10/2019",equipement:"Verre coupé à la taille",status:"Moyenne"},{title:"Code art. 3",description:"Description 3",magasin:"Magasin 3",emplacement:"Emplacement magasin 3",quantity:"9",date:"17/10/2019",equipement:"Charpentier",status:"Majeure"},{title:"Code art. 4",description:"Description 4",magasin:"Magasin 4",emplacement:"Emplacement magasin 4",quantity:"20",date:"21/10/2019",equipement:"Mécanicien en chauffage",status:"Faible"},{title:"Code art. 5",description:"Description 5",magasin:"Magasin 5",emplacement:"Emplacement magasin 5",quantity:"3",date:"15/10/2019",equipement:"Serrurier",status:"Majeure"}];this.infoStockModel(e)},onOpenStockDialog:function(e){var t=sap.ui.xmlfragment("com.eramet.depanneur.HATDepanneurApp.view.fragment.stockSelector",this);this.getView().addDependent(t);this._resetModel();t.open()},onPressClose:function(){var e=sap.ui.getCore();e.byId("stockDialog").close();e.byId("stockDialog").destroy()},onPressPostTech:function(){this._openValueHelpDialog()},_openValueHelpDialog:function(e){var t=sap.ui.xmlfragment("com.eramet.depanneur.HATDepanneurApp.view.fragment.valueHelp",this);this.getView().addDependent(t);this._resetModel();t.open()},onPressCloseVH:function(){var e=sap.ui.getCore();e.byId("valueHelpDialog").close();e.byId("valueHelpDialog").destroy()},onPressAdd:function(){var e=sap.ui.getCore().byId("additionalBox"),t=sap.ui.getCore().byId("customList"),n=new sap.m.Label({text:this.getView().getModel("i18n").getResourceBundle().getText("valueHelpText1")}),a=new sap.m.Select({forceSelection:false,items:[new sap.ui.core.Item({text:"{i18n>valueHelpType1}",key:"1"}),new sap.ui.core.Item({text:"{i18n>valueHelpType2}",key:"2"}),new sap.ui.core.Item({text:"{i18n>valueHelpType3}",key:"3"}),new sap.ui.core.Item({text:"{i18n>valueHelpType4}",key:"4"}),new sap.ui.core.Item({text:"{i18n>valueHelpType5}",key:"5"}),new sap.ui.core.Item({text:"{i18n>valueHelpType6}",key:"6"})]}),i=new sap.m.Label({text:this.getView().getModel("i18n").getResourceBundle().getText("valueHelpText2")}),o=new sap.m.Select({forceSelection:false,items:[new sap.ui.core.Item({text:"{i18n>valueHelpFilter1}",key:"1"}),new sap.ui.core.Item({text:"{i18n>valueHelpFilter2}",key:"2"}),new sap.ui.core.Item({text:"{i18n>valueHelpFilter3}",key:"3"}),new sap.ui.core.Item({text:"{i18n>valueHelpFilter4}",key:"4"}),new sap.ui.core.Item({text:"{i18n>valueHelpFilter5}",key:"5"}),new sap.ui.core.Item({text:"{i18n>valueHelpFilter6}",key:"6"}),new sap.ui.core.Item({text:"{i18n>valueHelpFilter7}",key:"7"}),new sap.ui.core.Item({text:"{i18n>valueHelpFilter8}",key:"8"}),new sap.ui.core.Item({text:"{i18n>valueHelpFilter9}",key:"9"}),new sap.ui.core.Item({text:"{i18n>valueHelpFilter10}",key:"10"}),new sap.ui.core.Item({text:"{i18n>valueHelpFilter11}",key:"11"}),new sap.ui.core.Item({text:"{i18n>valueHelpFilter12}",key:"12"}),new sap.ui.core.Item({text:"{i18n>valueHelpFilter13}",key:"13"}),new sap.ui.core.Item({text:"{i18n>valueHelpFilter14}",key:"14"})]}),l=new sap.m.Label({text:this.getView().getModel("i18n").getResourceBundle().getText("valueHelpText3")}),p=new sap.m.Input({});e.addContent(n);e.addContent(a);e.addContent(i);e.addContent(o);e.addContent(l);e.addContent(p);t.addContent(e)}})});