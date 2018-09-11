export const TypeaheadDefaultOption: Twitter.Typeahead.Options = {
    highlight: true,
    hint: false,
    minLength: undefined,
    classNames: undefined
}

const RequireJsConfiguration: RequireConfig = {
    baseUrl: "js/",
    paths: {
        "jquery": "https://cdn.bootcss.com/jquery/3.3.1/jquery.min",
        "typeahead": "libs/typeahead.jquery.min"
    }
};

function Initialize() {
    requirejs.config(RequireJsConfiguration);
    require(["./Initialize"]);
}

Initialize();