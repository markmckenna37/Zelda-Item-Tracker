import React from "react";

const CheckContext = React.createContext({
 checks: [],
 handleChecks: () => {}
});

export default CheckContext;
