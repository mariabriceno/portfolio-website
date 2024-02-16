import React, { useState, useEffect } from "react";

export const sideMap = {
  BODY_SIDE: "right",
  HEADER_SIDE: "left",
};

export const SplitLayout = ({ side, classlist, children, open }) => {
  const [classes, setClasses] = useState(classlist);

  const getHeaderClasses = () => {
    const staticClasses = "md:col-start-1 md:row-span-12 col-span-full";

    const newClasses = `${staticClasses} ${
      open ? "md:col-end-5" : "md:col-end-3"
    }`;
    setClasses(newClasses);
  };

  const getBodyClasses = () => {
    const staticClasses =
      "md:col-end-13 md:row-span-12 col-span-full overflow-auto";

    const newClasses = `${staticClasses} ${
      open ? "md:col-start-5" : "md:col-start-3"
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
