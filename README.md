Firefox GNOME Theme 3.26 add-on
===============================


Description
===========

An add-on to <https://github.com/kurogetsusai/firefox-gnome-theme> with light
and dark themes for GNOME 3.26, with additional, optional styling additions/
improvements:

* Make the auto-complete dropdown width match the URL bar width.
* GNOME-style auto-hiding scrollbars.
* Use some additional stock icons.
* Hide the tab bar when only one tab is open.
* Use a white background for blank new tabs/windows.
* CSD and number of window controls auto-detected (just need to select the
  Firefox version).

This add-on is designed to sit alongside `firefox-gnome-theme`, and add to/
override it as necessary.

Tested on Fedora 27/Firefox 57/GNOME 3.26.


Prep.
=====

* Set your theme via GNOME Tweaks to either Adwaita, or Adwaita-dark. "Global
  Dark Theme" *doesn't* work, and is being removed in GNOME 3.28. Alternatively,
  you can run Firefox with a specific variant without changing the global theme
  by supplying the GTK_THEME variable like this:

  ```sh
  # For the dark theme
  GTK_THEME=Adwaita:dark firefox
  ```

  ```
  # For the light theme
  GTK_THEME=Adwaita:light firefox
  ```

* If using the <u>default</u> set of enabled features, you will need to:
  * Move Firefox's "new tab" button to the nav. bar first (since it's hidden
    when only one tab is open by the default-enabled "hide-single-tab.css".
  * Set `browser.stopReloadAnimation.enabled` to `false` in about:config (since
    the stop/reload buttons are replaced with the stock GNOME icons by the
    default-enabled "stock-icons.css".


Installation
============

* In a terminal, go to the `chrome` directory inside your Firefox profile
  directory. **IMPORTANT:** this is **NOT** the same approach
  as firefox-gnome-theme. Instead this approach doesn't "take over" your primary
  userChrome/userContent files.
* Clone the `firefox-gnome-theme` and `firefox-gnome-theme-3.26-addon` repos to
  their own subdirectories inside the `chrome` directory:

  ```sh
  git clone 'https://github.com/kurogetsusai/firefox-gnome-theme.git'
  git clone 'https://github.com/smithfred/firefox-gnome-theme-3.26-addon.git'
  ```

* If you don't have `userChrome.css` and  `userContent.css` files, create them
  in the `chrome` directory. These can be used for any other arbitrary style
  changes you want to add later as well.

* You will now have the following in the `chrome` directory:

  ```
  firefox-gnome-theme/
  firefox-gnome-theme-3.26-addon/
  userChrome.css
  userContent.css
  ```

* At the **very** top of your `userChrome.css`, add:

  ```css
  @import "firefox-gnome-theme-3.26-layer/userChrome.css";
  ```

* At the **very** top of your `userChrome.css`, add:

  ```css
  @import "firefox-gnome-theme/userContent.css";
  ```

* Open `firefox-gnome-theme-3.26-addon/userChrome.css` with your favourite text
  editor and follow the instructions there to enable one of the theme variants.
  You can also enable extra features there.

* You can also edit `firefox-gnome-theme/userContent.css` as needed.
