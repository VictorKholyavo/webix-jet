import {JetView} from "webix-jet";
import {contacts} from "models/contacts";
import FormView from "./form.js"

export default class StartView extends JetView{
	config(){
		const _ = this.app.getService("locale")._;
		const lang = this.app.getService("locale").getLang();

		return {
			 cols: [
			 	{
					cols: [
						{
							rows: [
								{
									view: "label",
									value: "Contacts",
									height: 48,
									labelPosition: "top",
									css: "blue",
									template:(obj) => {
						        return _ (obj.value)
									}
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
									onClick: {
										"wxi-close": (e, id) => {
											contacts.remove(id);
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
		              label: "Add",
									click: () => {
										var user = {"Name":"Daniel Craig","Email":"daniel@gmail.com","Status":2,"Country":1};
										contacts.add(user);
									},
									value:(obj) => {
						        return _ (obj.label)
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
		const list = this.$$("listForContacts");
		contacts.waitData.then(() => {
			var id = contacts.getFirstId();
			list.select(id);
		})
	}

	urlChange(view){
	 	 	const list = this.$$("listForContacts");
	   	var id = this.getParam("id");
			id = id || contacts.getFirstId();
			if (id && list.exists(id)) {
				this.setParam("id", id, true);
			}
		}
  }
