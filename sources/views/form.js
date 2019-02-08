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
							localId: "Country",
              label: "Country",
              width: 200,
							//template: "#Name#",
							value:1,
							options: countries
            },
            {
              view: "richselect",
              value: 1,
              label: "Status",
              width: 200,
              options: statuses
            },
            {
              view: "button",
              type: "form",
              value: "Save",
              width: 300,
              click:() => {
                const filled = this.$$("formForContacts").getValues();
								this.app.callEvent("onDataEditStop", [filled]);
              }
            },
          ]
        },
        {		}
      ]
    }
  }

  init(){
		this.$$("formForContacts").parse(contacts);
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
