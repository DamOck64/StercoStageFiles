function filterSizeLookup(executionContext) {
    console.log("filterSizeLookup function called");
    
    var formContext = executionContext.getFormContext();
    
    // Get the size lookup control
    var sizeControl = formContext.getControl("cr981_cheese_size");
    
    if (sizeControl) {
        console.log("Size control found, applying filter");
        
        // Define the FetchXML filter
        var fetchXml = "<filter type='and'>" +
                      "<condition attribute='cr981_atribute' operator='eq' value='569070002' />" +
                      "</filter>";
        
        // Apply the custom filter
        sizeControl.addCustomFilter(fetchXml);
        console.log("Filter applied successfully. FetchXML: ", fetchXml);
    } else {
        console.log("Size control NOT found - check field name cr981_cheese_size");
    }
}