import { IAutoCompleteConfiguration } from "./IAutoCompleteConfiguration";

export const BaiduAutoCompleteConfiguration: IAutoCompleteConfiguration = {
    IsAsync: true,
    RequestType: "get",
    RequestUrl: "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",
    ResponseDataType: "jsonp",
    ResponseJsonpName: "cb",

    RequestDataBuilder: function (QueryString: string): any {
        return {
            wd: QueryString
        };
    },

    ResponseDataExtractor: function (Process: (result: string[]) => void): (ResponseObject: any) => void {
        return function (ResponseObject: any) {
            var DataArray = ResponseObject['s'];
            return Process(DataArray);
        }
    }
}

export const GoogleAutoCompleteConfiguration: IAutoCompleteConfiguration = {
    IsAsync: true,
    RequestType: "get",
    RequestUrl: "https://www.google.co.jp/complete/search",
    ResponseDataType: "jsonp",
    ResponseJsonpName: "callback",

    RequestDataBuilder: function (QueryString: string): any {
        return {
            client: 'chrome',
            q: QueryString
        };
    },

    ResponseDataExtractor: function (Process: (result: string[]) => void): (ResponseObject: any) => void {
        return function (ResponseObject: any) {
            var DataArray = ResponseObject['1'];
            return Process(DataArray);
        }
    }
}