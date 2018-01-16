(function() {
    let css = `
    @namespace url(http: //www.mozilla.org/keymaster/gatekeeper/there.is.only.xul);
    /* Colours - can't be read from chrome CSS. Setting on :root doesn't work. */
    :not(select):not(hbox) > scrollbar {
        --gnome-scrollbars-hover-bgcolor: rgba(192, 192, 192, 0.75);
        --gnome-scrollbars-hover-border-color: rgba(192, 192, 192, 0.75);
        --gnome-scrollbars-thumb-bgcolor: rgba(0, 0, 0, 0.32);
        --gnome-scrollbars-thumb-blend-mode: multiply;
        --gnome-scrollbars-thumb-outline: 1px solid rgba(255, 255, 255, 0.4);
        --gnome-scrollbars-thumb-hover-bgcolor: #75797a;
        --gnome-scrollbars-thumb-active-bgcolor: #5591d1;
    }
    `;
    let sss = Cc["@mozilla.org/content/style-sheet-service;1"].getService(Ci.nsIStyleSheetService);
    let uri = makeURI("data:text/css;charset=UTF=8," + encodeURIComponent(css));
    sss.loadAndRegisterSheet(uri, sss.AGENT_SHEET);
})();
