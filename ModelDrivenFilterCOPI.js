
function filterSizeLookup(executionContext) {

    forToFilter = "cr981_atribute"  // eav column schema name
    // ApplicableForm = Input target lookup colum schema name
    // FilterID = input choice column number id

    var eavFields = [
        {ApplicableForm: "", filterID: "64"} //Size
        {ApplicableForm: "", filterID: "65"} //Flavour
        {ApplicableForm: "", filterID: "66"} //Machine
        {ApplicableForm: "", filterID: "67"} //Quantity
    ]


    var formContext = executionContext.getFormContext();

    var sizeControl = formContext.getControl(ApplicableForm);

    if (sizeControl) {

        var fetchXml = `<filter type='and'> +
                       <condition attribute='${forToFilter}' operator='eq' value='${filterID}' /> +
                       </filter>`;

        sizeControl.addPreSearch(function () {
            sizeControl.addCustomFilter(fetchXml);
        });
    }
}
