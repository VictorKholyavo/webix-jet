import {JetView} from "webix-jet";
import {contacts} from "models/contacts";
import {countries} from "models/countries";
import {statuses} from "models/statuses";

export default class FormView extends JetView{
	config(){
		return {
      rows: [
        {
          view:"form",
          localId: "formForContacts",
          width: 800,
          css:"webix_shadow_medium form",
          elements:[
            { template:"User Name", type:"section"},
            { view:"text", name:"Name"},
            { template:"Email", type:"section"},
            { view:"text", name:"Email" },
            {
              view: "combo",
							localId: "countries",
              label: "Country",
              width: 200,
							name: "Country",
							value: 1,
							options: {
								body:{
									template: "#Name#",
									data: countries
								}
							}
            },
            {
              view: "richselect",
              value: 1,
              label: "Status",
              width: 200,
							name: "Status",
							options: {
								body:{
									template: "#Name#",
									data: statuses
								}
							}
            },
            {
              view: "button",
              type: "form",
              value: "Save",
              width: 300,
              click:() => {
                const filled = this.$$("formForContacts").getValues();
								if(filled.id && contacts.exists(filled.id))
									contacts.updateItem(filled.id, filled);
              }
            },
          ]
        },
        {		}
      ]
    }
  }

  init(){

  }
  urlChange(view,url) {
    var form = this.$$("formForContacts");
    var id = this.getParam("id", true);
    var values = contacts.getItem(id);
		if (values) {
        form.setValues(values)
    }
  }

}
