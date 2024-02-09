import React, { useState, useEffect } from "react";

export const sideMap = {
  BODY_SIDE: "right",
  HEADER_SIDE: "left",
};

export const SplitLayout = ({ side, classlist, children, open }) => {
  const [classes, setClasses] = useState(classlist);

  const getHeaderClasses = () => {
    const staticClasses = "col-start-1 row-span-12";

    const newClasses = `${staticClasses} ${open ? "col-end-5" : "col-end-3"}`;
    setClasses(newClasses);
  };

  const getBodyClasses = () => {
    const staticClasses = "col-end-13 row-span-12 overflow-auto";

    const newClasses = `${staticClasses} ${
      open ? "col-start-5" : "col-start-3"
    }`;

    setClasses(newClasses);
  };

  const getClasses = (side) => {
    if (side === sideMap.BODY_SIDE) {
      getBodyClasses();
    } else {
      getHeaderClasses();
    }
  };

  useEffect(() => {
    getClasses(side);
  }, [open]);

  return <div className={classes}>{children}</div>;
};
