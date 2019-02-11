import {JetView} from "webix-jet";
import {contacts} from "models/contacts";
import {countries} from "models/countries";
import {statuses} from "models/statuses";

export default class FormView extends JetView{
	config(){
		const _ = this.app.getService("locale")._;
		const lang = this.app.getService("locale").getLang();

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
							options: {
								body:{
									template: "#Name#",
									data: countries
								}
							}
            },
            {
              view: "richselect",
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

		webix.promise.all ([
			contacts.waitData,
			countries.waitData,
			statuses.waitData
		]).then(() => {
			if (values) {
					form.setValues(values)
			}
		})
  }

}
