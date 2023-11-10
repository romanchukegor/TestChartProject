import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import styles from './styles.module.css';

const ProductsCharts = ({ productsData }) => {
  const svgRef = useRef();

  useEffect(() => {
    const w = 600;
    const h = 350;
    const svg = d3
      .select(svgRef.current)
      .attr('width', w)
      .attr('height', h)
      .style('overflow', 'visible')
      .style('margin-top', '75px');

    const xScale = d3
      .scaleBand()
      .domain(productsData.map((val, i) => val.month))
      .range([0, w])
      .padding(0.7);

    const yScale = d3.scaleLinear().domain([0, h]).range([h, 0]);

    const xAxis = d3.axisBottom(xScale).ticks(productsData.length);
    const yAxis = d3.axisLeft(yScale).ticks(5);

    svg.append('g').call(xAxis).attr('transform', `translate(0, ${h})`);
    svg.append('g').call(yAxis);

    svg
      .selectAll('rect')
      .data(productsData)
      .join('rect')
      .attr('x', (v, i) => xScale(v.month))
      .attr('y', yScale)
      .attr('width', xScale.bandwidth())
      .attr('height', (val) => h - yScale(val[1].total))
      .attr('fill', () => d3.color('red'));
  }, [productsData]);
  return (
    <div className={styles.productsCharts}>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default ProductsCharts;
