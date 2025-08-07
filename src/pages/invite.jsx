import React, { useEffect } from "react";

function Invitation() {
  useEffect(() => {
    window.location.href =
      "https://www.fantasygems17.com/#/register?invitationCode=67717105959";
  }, []);

  return (
    <div>
      <h1>Redirecting...</h1>
    </div>
  );
}

export default Invitation;
