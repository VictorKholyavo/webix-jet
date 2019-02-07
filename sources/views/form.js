import {JetView} from "webix-jet";
import {contacts} from "models/contacts";

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
              view: "richselect",
              value: 1,
              label: "Country",
              width: 200,
              options: [
                {id: 1, value: "English" },
                {id: 2, value: "Russian"}
              ]
            },
            {
              view: "richselect",
              value: 1,
              label: "Status",
              width: 200,
              options: [
                { id: 1, value: "English" },
                {id: 2, value: "Russian"}
              ]
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
        {		},
      ]
    }
  }

  init(){

  }
  urlChange(view,url) {
    var form = this.$$("formForContacts");
    var id = this.getParam("id", true);
		//console.log(id);
    var values = contacts.getItem(id);
		if (values) {
        form.setValues(values)
    }
  }

}
