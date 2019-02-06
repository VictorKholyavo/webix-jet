import {JetView} from "webix-jet";

export default class DataTable extends JetView{
  constructor(app,name,data){
    super(app, name);
    this._componentData = data;
  }
	config(){
		return {
      rows: [
        {
          view:"datatable",
          css: "button webix_shadow_medium",
          localId:"datatableCountries",
          editable: true,
          editaction:"dblclick",
          autoConfig:true,
          borderless: true,
          scroll:false,
          select: true,
        },
        {
          view: "toolbar",
          cols: [
            {},
            {
              view: "button",
              type: "form",
              value: "Add",
              width: 100
            },
            {
              view: "button",
              type: "form",
              value: "Delete",
              width: 100
            }
          ]
        },
      ]
    };
  }
	init(){
    this.$$("datatableCountries").parse(this._componentData);
	}
}
