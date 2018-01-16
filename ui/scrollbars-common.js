(function() {
    let css = `
    @namespace url(http: //www.mozilla.org/keymaster/gatekeeper/there.is.only.xul);

    /* All states */
    :not(select):not(hbox) > scrollbar {
        position: relative;
        -moz-appearance: none !important;
        border-style: solid;
    }
    :not(select):not(hbox) > scrollbar[orient="vertical"] {
        border-width: 0 0 0 1px;
        -moz-margin-start: -13px;
    }
    :not(select):not(hbox) > scrollbar[orient="horizontal"] {
        border-width: 1px 0 0 0;
        margin-top: -13px;
    }
    :not(select):not(hbox) > scrollbar thumb {
        -moz-appearance: none !important;
        mix-blend-mode: var(--gnome-scrollbars-thumb-blend-mode);
        /* Make handle edge-grabbable */
        border: 3px solid transparent;
        background-clip: padding-box;
        border-radius: 6px;
    }
    :not(select):not(hbox) > scrollbar[orient="vertical"] thumb {
        min-height: 44px;
    }
    :not(select):not(hbox) > scrollbar[orient="horizontal"] thumb {
        min-width: 44px;
    }

    /* Unhovered */
    :not(select):not(hbox) > scrollbar {
        background-color: transparent;
        border-color: transparent;
    }
    :not(select):not(hbox) > scrollbar[orient="vertical"] {
        padding: 0 1px 0 5px;
        margin-right: -3px;
        width: 0px;
    }
    :not(select):not(hbox) > scrollbar[orient="horizontal"] {
        padding: 5px 0 1px 0;
        margin-bottom: -3px;
        height: 16px;
    }
    :not(select):not(hbox) > scrollbar thumb {
        background-color: var(--gnome-scrollbars-thumb-bgcolor);
        outline: var(--gnome-scrollbars-thumb-outline);
        outline-offset: -3px;
        -moz-outline-radius: 3px;
    }

    /* Hovered scrollbar */
    :not(select):not(hbox) > scrollbar:hover {
        background-color: var(--gnome-scrollbars-hover-bgcolor);
        border-color: var(--gnome-scrollbars-hover-border-color);
    }
    :not(select):not(hbox) > scrollbar:hover thumb {
        outline-width: 0;
    }
    :not(select):not(hbox) > scrollbar[orient="vertical"]:hover {
        padding: 0 1px 0 0;
        margin-right: -1px;
        width: 14px;
    }
    :not(select):not(hbox) > scrollbar[orient="horizontal"]:hover {
        padding: 0 0 1px 0;
        margin-bottom: -1px;
        height: 14px;
    }

    /* Hovered thumb */
    :not(select):not(hbox) > scrollbar:hover thumb:hover {
        background-color: var(--gnome-scrollbars-thumb-hover-bgcolor);
    }

    /* Grabbed thumb */
    :not(select):not(hbox) > scrollbar:hover thumb:active {
        background-color: var(--gnome-scrollbars-thumb-active-bgcolor);
        mix-blend-mode: normal;
    }
    `;
    let sss = Cc["@mozilla.org/content/style-sheet-service;1"].getService(Ci.nsIStyleSheetService);
    let uri = makeURI("data:text/css;charset=UTF=8," + encodeURIComponent(css));
    sss.loadAndRegisterSheet(uri, sss.AGENT_SHEET);
})();
