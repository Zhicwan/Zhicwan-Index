import $ = require("jquery");
import "typeahead";
import { IAutoCompleteConfiguration } from "./AutoCompleteConfiguration/IAutoCompleteConfiguration";
import { TypeaheadDefaultOption } from "./Config"

export class AutoCompleteComponent {
    private AutoCompleteComponentElement: JQuery;
    private AutoCompleteConfiguration: IAutoCompleteConfiguration;
    private DisplayLimit: number;

    public constructor(AutoCompleteComponentID: string, Configuration: IAutoCompleteConfiguration, DisplayLimit: number = 8) {
        let autoCompleteComponentSelector = `#${AutoCompleteComponentID}`;
        this.AutoCompleteComponentElement = $(autoCompleteComponentSelector);
        this.AutoCompleteConfiguration = Configuration;
        this.DisplayLimit = DisplayLimit;
    }

    public Init: () => void =
        () => {
            let DataSet: Twitter.Typeahead.Dataset<string> = {
                source: this.DataSourceProcess,
                async: this.AutoCompleteConfiguration.IsAsync,
                limit: this.DisplayLimit
            };
            this.AutoCompleteComponentElement.typeahead(TypeaheadDefaultOption, DataSet);
        }

    private DataSourceProcess:
        (queryString: string, SyncProcess: (result: string[]) => void, AsyncProcess?: (result: string[]) => void) => void =
        (queryString: string, SyncProcess: (result: string[]) => void, AsyncProcess?: (result: string[]) => void) => {
            let ProcessFunc = SyncProcess;
            if (this.AutoCompleteConfiguration.IsAsync && AsyncProcess != undefined)
                ProcessFunc = AsyncProcess;
            $.ajax({
                type: this.AutoCompleteConfiguration.RequestType,
                async: this.AutoCompleteConfiguration.IsAsync,
                url: this.AutoCompleteConfiguration.RequestUrl,
                data: this.AutoCompleteConfiguration.RequestDataBuilder(queryString),
                dataType: this.AutoCompleteConfiguration.ResponseDataType,
                jsonp: this.AutoCompleteConfiguration.ResponseJsonpName,
                success: this.AutoCompleteConfiguration.ResponseDataExtractor(ProcessFunc)
            });
        }
}

