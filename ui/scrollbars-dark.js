(function() {
    let css = `
    @namespace url(http: //www.mozilla.org/keymaster/gatekeeper/there.is.only.xul);
    /* Colours - can't be read from chrome CSS. Setting on :root doesn't work. */
    :not(select):not(hbox) > scrollbar {
        --gnome-scrollbars-hover-bgcolor: rgba(29, 30, 31, 0.75);
        --gnome-scrollbars-hover-border-color: rgba(13, 17, 18, 0.75);
        --gnome-scrollbars-thumb-bgcolor: rgba(252, 254, 251, 0.58);
        --gnome-scrollbars-thumb-blend-mode: screen;
        --gnome-scrollbars-thumb-outline: 1px solid rgba(0, 0, 0, 0.4);
        --gnome-scrollbars-thumb-hover-bgcolor: #d4d5d4;
        --gnome-scrollbars-thumb-active-bgcolor: #5591d1;
    }
    `;
    let sss = Cc["@mozilla.org/content/style-sheet-service;1"].getService(Ci.nsIStyleSheetService);
    let uri = makeURI("data:text/css;charset=UTF=8," + encodeURIComponent(css));
    sss.loadAndRegisterSheet(uri, sss.AGENT_SHEET);
})();
