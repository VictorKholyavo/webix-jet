import {JetView} from "webix-jet";

export default class DataView extends JetView{
	config(){
		const _ = this.app.getService("locale")._;
		const lang = this.app.getService("locale").getLang();

		return {
      rows: [
        {
          view: "label",
          value: "Settings",
          css: "blue",
          height: 38,
					template:(obj) => {
		        return _ (obj.value)}
        },
        {
          view: "toolbar",
          css: "toolbar",
          cols: [
            {
              rows: [
                {
                  view: "segmented",
                  label: "Language",
                  width: 200,
									name: "lang",
                  options: [
                    {id: "en", value: "English" },
                    {id: "ru", value: "Russian" }
                  ],
									click:() => {
										const langs = this.app.getService("locale");
										const value = this.getRoot().queryView({ name:"lang" }).getValue();
										langs.setLang(value);
									},
                },
                {}
              ]
            }
          ]
        }
      ],
    };
  }
  init(){

  }
}
