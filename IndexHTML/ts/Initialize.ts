import $ = require("jquery");
import { ClockComponent } from "./ClockComponent";
import { AutoCompleteComponent } from "./AutoCompleteComponent";
import { BaiduAutoCompleteConfiguration, GoogleAutoCompleteConfiguration } from "./AutoCompleteConfiguration/AutoCompleteConfigurations"

function Initialize() {
    let clock = new ClockComponent("clockbox");
    let googleAutoComplete = new AutoCompleteComponent("GoogleSearch", GoogleAutoCompleteConfiguration);
    let baiduAutoComplete = new AutoCompleteComponent("BaiduSearch", BaiduAutoCompleteConfiguration);
    $(document).ready(function () {
        clock.Init();
        googleAutoComplete.Init();
        baiduAutoComplete.Init();
    });
}

Initialize();