import {JetView} from "webix-jet";
import {countries} from "models/countries";
import {statuses} from "models/statuses";
import DataTable from "./datatable.js";

export default class DataView extends JetView{
	config(){
		return {
			rows: [
				{
					view: "template",
					template: "Data",
					height: 40,
					css: "blue",
				},
				{
					cols: [
						{
							view: "list",
							css: "menu",
							localId:"list",
							select: true,
							scroll: false,
							width: 200,
							on:{
								onAfterSelect:function(id){
									$$(id).show();
								}
							},
							data: ["Countries", "Statuses"],
						},
						{
							animate: false,
							cells: [
								{ id:"Countries", cols:[ new DataTable (this.app, "", countries) ]},
								{ id:"Statuses", cols: [ new DataTable (this.app, "", statuses) ]},
							]
						}
					],
				}
			]
		};
	}
	init(){
		this.$$("list").select("Countries");
		//view.parse(countries);
	}
}
