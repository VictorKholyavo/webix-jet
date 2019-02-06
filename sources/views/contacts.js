import {JetView} from "webix-jet";
import {contacts} from "models/contacts";

export default class StartView extends JetView{
	config(){

		return {
			cols: [
				{
					rows: [
						{
							view: "template",
							template: "Contacts",
							height: 48,
							css: "blue"
						},
						{
							view:"list",
							localId:"listForContacts",
							type: {
								height: 65,
								template: "<div class='overall'><div class='title'>#Name#<span class='webix_icon wxi-close'></span></div><div class='year'>#Email#</div> </div>",
							},
							autoConfig:true,
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
						}
					],
				},
				{
					view: "toolbar",
					cols: [
						{
							view:"form",
							id: "formForContacts",
							css:"webix_shadow_medium",
							width: 300,
							elements:[
								{ template:"User Name", type:"section"},
								{ view:"text", name:"Name"},
								{ template:"Email", type:"section"},
								{ view:"text", name:"Email" },
							]
						},
						{

						}
					]
				}
			]
		};
	}
	init(){
		this.$$("listForContacts").parse(contacts);
	}
}
