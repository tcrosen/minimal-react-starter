# Version.js

Displays the current application version from reading `package.json` file at build time.

> **Tip**: In React terminology, this is considered a *dumb* or *presentation* component.

> **Tip**: Note that the version data is not retrieved by the Version component, but rather it is *propogated* down from a top-level component, in this case `<App/>`.  In React, you are encouraged to manage state in as few places as possible (eg. the top of the application).  
