import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const GmailIconAnimation = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current)
      .append('svg')
      .attr('width', '100%')  // Use percentage to make the SVG responsive
      .attr('height', '100%') // Use percentage to make the SVG responsive
      .attr('viewBox', '0 0 700 500') // viewBox to control visible area
      .style('background-color', 'white');

    const data = [
      { x: 100, y: 200, text: 'Initiate Check' },      // icon 1
      { x: 400, y: 50, text: 'RTW Check' },       // icon 2
      { x: 400, y: 200, text: 'Identity Check' }, // icon 3
      { x: 400, y: 350, text: 'DBS Check' }       // icon 4
    ];

    const shadowFilter = svg.append('defs')
      .append('filter')
      .attr('id', 'shadow')
      .attr('x', '-50%')
      .attr('y', '-50%')
      .attr('width', '200%')
      .attr('height', '200%');

    shadowFilter.append('feDropShadow')
      .attr('dx', '2')
      .attr('dy', '4')
      .attr('stdDeviation', '3');

    const drawBlueIcon = (x, y, id, text) => {
      const group = svg.append('g').attr('id', id);

      // draw the rectangle
      group.append('rect')
        .attr('x', x)
        .attr('y', y)
        .attr('width', 180)
        .attr('height', 80)
        .attr('fill', 'blue')
        .attr('filter', 'url(#shadow)');

      // add the text
      group.append('text')
        .attr('x', x + 90)
        .attr('y', y + 40)
        .attr('dominant-baseline', 'middle')
        .text(text)
        .attr('font-family', 'sans-serif')
        .attr('font-size', '20px')
        .attr('text-anchor', 'middle') // to align text in the middle
        .attr('fill', 'white');
    };

    const drawBlackIcon = (x, y, id, text) => {
      const group = svg.append('g').attr('id', id);

      // draw the rectangle
      group.append('rect')
        .attr('x', x)
        .attr('y', y)
        .attr('width', 180)
        .attr('height', 80)
        .attr('fill', 'none')
        .attr('stroke', 'black')
        .attr('filter', 'url(#shadow)');

      // add the text
      group.append('text')
        .attr('x', x + 90)
        .attr('y', y + 40)
        .attr('dominant-baseline', 'middle')
        .text(text)
        .attr('font-family', 'sans-serif')
        .attr('font-size', '20px')
        .attr('text-anchor', 'middle') // to align text in the middle
        .attr('fill', 'black');
    };

    const removeOldIcon = (id) => {
      return new Promise((resolve) => {
        const oldIcon = svg.select('#' + id);
        if (!oldIcon.empty()) {
          oldIcon.remove();
          resolve(true);
        } else {
          resolve(false);
        }
      });
    };

    const animateLines = () => {
      // remove existing lines before starting new animation
      svg.selectAll('path').remove();

      // remove existing icons before starting new animation
      for (let i = 0; i < data.length; i++) {
        svg.select('#icon' + i).remove();
        drawBlackIcon(data[i].x, data[i].y, 'icon' + i, data[i].text);
      }

      const [startX, startY] = [data[0].x + 180, data[0].y + 40]; // starting coordinates

      // color the first icon before starting the animation
      svg.select('#icon0').remove();
      drawBlueIcon(data[0].x, data[0].y, 'icon0', data[0].text);

      data.slice(1).forEach((d, i) => {
        const [endX, endY] = [d.x, d.y + 40]; // ending coordinates

        // define the line
        const diagonal = d3.linkHorizontal()
          .x(function (d) { return d.x; })
          .y(function (d) { return d.y; });

        // draw the line
        const path = svg.append("path")
          .attr("d", diagonal({ source: { x: startX, y: startY }, target: { x: startX, y: startY } }))
          .style('stroke', 'blue')
          .style('stroke-width', 2)
          .style('fill', 'none');

        // animate the line
        path.transition()
          .duration(1000)
          .attr("d", diagonal({ source: { x: startX, y: startY }, target: { x: endX, y: endY } }))
          .on('end', () => {
            svg.select('#icon' + (i + 1)).remove();
            drawBlueIcon(d.x, d.y, 'icon' + (i + 1), data[i + 1].text);
            if (i === data.length - 2) { // if it's the last line
              d3.timeout(() => {
                animateLines(); // restarts the animation
              }, 2000); // restarts the animation after a delay of 2000ms (2 seconds)
            }
          });
      });
    };


    // Initially, draw all icons as outlined
    for (let i = 0; i < data.length; i++) {
      drawBlackIcon(data[i].x, data[i].y, 'icon' + i, data[i].text);
    }

    animateLines();


    return () => {
      svg.remove();
    };
  }, []);

  return <div ref={svgRef} />;
};

export default GmailIconAnimation;