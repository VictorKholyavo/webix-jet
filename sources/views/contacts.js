import {JetView} from "webix-jet";
import {contacts} from "models/contacts";
import FormView from "./form.js"

export default class StartView extends JetView{
	config(){
		return {
			 cols: [
			 	{
					cols: [
						{
							rows: [
								{
									view: "label",
									label: "Contacts",
									height: 48,
									labelPosition: "top",
									css: "blue"
								},
								{
									view:"list",
									localId:"listForContacts",
									editable: true,
									type: {
										height: 65,
										template: "<div class='overall'><div class='title'>#Name#<span class='webix_icon wxi-close'></span></div><div class='year'>#Email#</div> </div>",
									},
									autoConfig:true,
									width: 400,
									select: true,
									borderless: true,
									css:"webix_shadow_medium",
									scroll: false,
									onClick: {
										"wxi-close":function(e ,id) {
											this.remove(id);
											return false;
										}
									},
									on:{
										onAfterSelect: (id) => {
											this.setParam("id", id, true);
										}
									},
								},
								{
		              view: "button",
		              type: "form",
		              value: "Add",
									click: () => {
										var user = {"Name":"Daniel Craig","Email":"daniel@gmail.com","Status":1,"Country":2};
										contacts.add(user)
									}

		            },
							]
						},
						{
							rows: [
								FormView
							]
						}
					]
			 	}
			 ]
		};
	}
	init(view, url){
		this.$$("listForContacts").sync(contacts);
		this.app.attachEvent("onDataEditStop", (filled) => {
			var id = this.getParam("id", true);
<<<<<<< HEAD
=======
			//contacts.config.data[id+1] = filled;
>>>>>>> 3088a386173863701bf6674d0562c6e924c435a8
			contacts.remove(id)
			contacts.add(filled)
			console.log(contacts);
			this.$$("listForContacts").parse(contacts);
		});
	}

	urlChange(view){
	 	 	const list = this.$$("listForContacts");
	   	var id = this.getParam("id");
			if (id) {
		    if (id && list.exists(id)){
		        list.select(id);
		    }
			}
		}
  }
