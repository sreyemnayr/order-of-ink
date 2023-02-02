import React, { useEffect, useState } from "react";
import WhatsIncludedContext from "./WhatsIncludedContext";

function WhatsIncludedProvider({ children }) {
  const [firstSecondIncluded, setFirstSecondIncluded] = useState(false)
  const [thirdIncluded, setThirdIncluded] = useState(false)
  
  return (
    <WhatsIncludedContext.Provider value={{ firstSecondIncluded, setFirstSecondIncluded, thirdIncluded, setThirdIncluded }}>
      {children}
    </WhatsIncludedContext.Provider>
  );
}

function useWhatsIncluded() {
  const context = React.useContext(WhatsIncludedContext);
  if (context === undefined) {
    throw new Error("useMoralisDapp must be used within a MoralisDappProvider");
  }
  return context;
}

export { WhatsIncludedProvider, useWhatsIncluded };