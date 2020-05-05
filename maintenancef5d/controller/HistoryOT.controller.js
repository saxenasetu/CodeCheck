sap.ui.define(["com/eramet/maintenanceF5D/controller/BaseController","com/eramet/maintenanceF5D/util/util","com/eramet/maintenanceF5D/util/formatter"],function(e,t,i){"use strict";return e.extend("com.eramet.maintenance.controller.HistoryOT",{onInit:function(){this.getRouter().attachRoutePatternMatched(this._onRouteMatched,this)},_onRouteMatched:function(e){if(e.getParameter("name")==="HistoryOT"){this._resetModel();this.getView().byId("date").setIcon("sap-icon://down");this.getView().byId("historyList").getBinding("items").sort(new sap.ui.model.Sorter("date",true,false))}},backToHome:function(){this.getRouter().navTo("Home")},onPressNavBack:function(){this.getRouter().navTo("WorkPage")},_resetModel:function(){var e=[{title:"N° OT 0000001",text:"Tube qui fuit",date:"21/10/2019",equipement:"Trousse de réparation",status:"Faible",prio:"Prio 1",codePoste:"code poste technique 1",description:"description courte 1",icon:"sap-icon://flag",type:"Type d'activité 1"},{title:"N° OT 0000002",text:"Verre brisé",date:"18/10/2019",equipement:"Verre coupé à la taille",status:"Moyenne",prio:"Prio 2",codePoste:"code poste technique 2",description:"description courte 1",icon:"",type:"Type d'activité 2"},{title:"N° OT 0000003",text:"Plateau cassé",date:"17/10/2019",equipement:"Charpentier",status:"Majeure",prio:"Prio 3",codePoste:"code poste technique 1",description:"description courte 2",icon:"sap-icon://flag",type:"Type d'activité 3"},{title:"N° OT 0000004",text:"Pas de chauffage",date:"21/10/2019",equipement:"Mécanicien en chauffage",status:"Faible",prio:"Prio 2",codePoste:"code poste technique 3",description:"description courte 3",icon:"",type:"Type d'activité 4"},{title:"N° OT 0000005",text:"Casier cassé",date:"15/10/2019",equipement:"Serrurier",status:"Majeure",prio:"Prio 1",codePoste:"code poste technique 4",description:"description courte 4",icon:"",type:"Type d'activité 5"}];this.historyModel(e)},onPressDate:function(){var e="";if(this.getView().byId("date").getIcon!==""){if(this.getView().byId("date").getIcon()==="sap-icon://up"){this.getView().byId("date").setIcon("sap-icon://down");e=true}else{this.getView().byId("date").setIcon("sap-icon://up");e=false}}else{this.getView().byId("date").setIcon("sap-icon://up");e=false}this.getView().byId("statut").setIcon("");this.getView().byId("type").setIcon("");this.getView().byId("historyList").getBinding("items").sort(new sap.ui.model.Sorter("date",e,false))},onPressStatut:function(){var e="";if(this.getView().byId("statut").getIcon!==""){if(this.getView().byId("statut").getIcon()==="sap-icon://up"){this.getView().byId("statut").setIcon("sap-icon://down");e=true}else{this.getView().byId("statut").setIcon("sap-icon://up");e=false}}else{this.getView().byId("statut").setIcon("sap-icon://up");e=false}this.getView().byId("date").setIcon("");this.getView().byId("type").setIcon("");this.getView().byId("historyList").getBinding("items").sort(new sap.ui.model.Sorter("status",e,false))},onPressType:function(){var e="";if(this.getView().byId("type").getIcon!==""){if(this.getView().byId("type").getIcon()==="sap-icon://up"){this.getView().byId("type").setIcon("sap-icon://down");e=true}else{this.getView().byId("type").setIcon("sap-icon://up");e=false}}else{this.getView().byId("type").setIcon("sap-icon://up");e=false}this.getView().byId("date").setIcon("");this.getView().byId("statut").setIcon("");this.getView().byId("historyList").getBinding("items").sort(new sap.ui.model.Sorter("type",e,false))},_resetIcons:function(){this.getView().byId("date").setIcon("");this.getView().byId("statut").setIcon("");this.getView().byId("type").setIcon("")},onPressClearFilter:function(){this._resetModel();this._resetIcons();this.getView().byId("date").setIcon("sap-icon://down");this.getView().byId("historyList").getBinding("items").sort(new sap.ui.model.Sorter("date",true,false))}})});