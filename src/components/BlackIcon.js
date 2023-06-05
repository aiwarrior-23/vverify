// BlackIcon.js
import React, { useEffect } from 'react';
import * as d3 from 'd3';

function BlackIcon() {
  useEffect(() => {
    const svg = d3.select("#blackIcon");

    svg.append("rect")
       .attr("x", 10)
       .attr("y", 10)
       .attr("width", 180)
       .attr("height", 80)
       .attr("fill", "none")
       .attr("stroke", "black");

    svg.append("text")
       .attr("x", "50%")
       .attr("y", "50%")
       .attr("dominant-baseline", "middle")
       .text("Initiate Check")
       .attr("font-family", "sans-serif")
       .attr("font-size", "20px")
       .attr("text-anchor", "middle")
       .attr("fill", "black");
  }, []);

  return <svg id="blackIcon" width="200" height="100" />;
}

export default BlackIcon;
