import "./styles/app.css";
import {JetApp, EmptyRouter, HashRouter, plugins } from "webix-jet";

export default class MyApp extends JetApp{
	constructor(config){
		const defaults = {
			id 		: APPNAME,
			version : VERSION,
			router 	: BUILD_AS_MODULE ? EmptyRouter : HashRouter,
			debug 	: !PRODUCTION,
			start 	: "/top/contacts?id=1"
		};

		super({ ...defaults, ...config });
	}
	init(){
		this.use(plugins.UrlParam, ["mode"]);

		var mode = this.getParam("mode");
		if (mode){
			this.$$("ms").setValue(mode);
		}
	}
}

if (!BUILD_AS_MODULE){
	webix.ready(() => new MyApp().render() );
}
