export interface IAutoCompleteConfiguration {
    IsAsync: boolean;
    RequestType: string;
    RequestUrl: string;
    RequestDataBuilder: (QueryString: string) => object;

    ResponseDataType: string;
    ResponseJsonpName: string;
    ResponseDataExtractor: (Process: (result: string[]) => void) => (ResponseObject: any) => void;
}