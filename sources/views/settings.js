import {JetView} from "webix-jet";

export default class DataView extends JetView{
	config(){
		return {
      rows: [
        {
          view: "template",
          template: "Settings",
          css: "blue",
          height: 38
        },
        {
          view: "toolbar",
          css: "toolbar",
          cols: [
            {
              rows: [
                {
                  view: "richselect",
                  value: 1,
                  label: "Language",
                  width: 200,
                  options: [
                    { id: 1, value: "English" },
                    {id: 2, value: "Russian"}
                  ]
                },
                {}
              ]
            }
          ]
        }
      ]
    };
  }
  init(){
    
  }
}
