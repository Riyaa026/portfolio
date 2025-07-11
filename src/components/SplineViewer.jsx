import React, { useRef, useEffect } from "react";

const SplineViewer = (props) => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current && props.url) {
      ref.current.setAttribute("url", props.url);
    }
  }, [props.url]);

  return React.createElement("spline-viewer", {
    ref,
    style: props.style,
    ...props,
  });
};

export default SplineViewer; 