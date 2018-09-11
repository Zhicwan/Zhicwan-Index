export const TypeaheadDefaultOption: Twitter.Typeahead.Options = {
    highlight: true,
    hint: false,
    minLength: undefined,
    classNames: undefined
}

const RequireJsConfiguration: RequireConfig = {
    baseUrl: "js/",
    paths: {
        jquery: "https://cdn.bootcss.com/jquery/3.3.1/jquery.min",
        typeahead: "https://cdn.bootcss.com/typeahead.js/0.11.1/typeahead.jquery.min"
    }
};

function Initialize() {
    requirejs.config(RequireJsConfiguration);
    require(["./Initialize"]);
}

Initialize();