import React from "react";

const CheckContext = React.createContext({
 checks: [],
 handleBtnClick: () => console.log("checkContextclick")
});

export default CheckContext;
