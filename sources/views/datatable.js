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
          on:{
            onAfterSelect: (id) => {
              this.setParam("id", id, true);
            }
          },
        },
        {
          view: "toolbar",
          cols: [
            {},
            {
              view: "button",
              type: "form",
              value: "Add",
              width: 100,
              click: () => {
                var country = {"Name":"Spain"};
                this._componentData.add(country);
              }
            },
            {
              view: "button",
              type: "form",
              value: "Delete",
              width: 100,
              click: (id) => {
                var id = this.getParam("id");
                id = id || this._componentData.getFirstId();
                if (id && this.$$("datatableCountries").exists(id)) {
                  this._componentData.remove(id)
                  if (this._componentData.getFirstId()) {
                    this.$$("datatableCountries").select(this._componentData.getFirstId())
                  }
                }
              }
            }
          ]
        },
      ]
    };
  }
	init(){
    this.$$("datatableCountries").parse(this._componentData);

	}
  urlChange(view){
      const datatable = this.$$("datatableCountries");
      var id = this.getParam("id");
      id = id || this._componentData.getFirstId();
      this._componentData.waitData.then(() => {
        if (id && datatable.exists(id)) {
          datatable.select(id);
          this.setParam("id", id, true);
        }
      })
    }
}
