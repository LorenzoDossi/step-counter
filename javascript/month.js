
const radiusScale = d3.scaleSqrt()
  .domain([0, 30000])
  .range([5,50])

const monthSvg = d3.select("svg.month");

const monthGroup = monthSvg
  .selectAll("g")
  .data(monthData)
  .enter()
  .append("g")
  .attr("transform", (d, i) => { 
      const x = (i % 7) * 120 + 50;
      const y = (Math.floor(i / 7) * 140 + 50);
      return `translate(${x}, ${y})`
   })

monthGroup
   .append("circle")
   .attr("cx", 0)
   .attr("cy", 0)
   .attr("r", radiusScale(10000))
   .attr("class", "ring")

monthGroup
   .append("circle")
   .attr("cx", 0)
   .attr("cy", 0)
   .attr("r", radiusScale(20000))
   .attr("class", "ring")

monthGroup
    .append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 5)
    .attr("class", "actual")
    .transition()
    .duration(2000)
    .delay((d,i) => {return i * 20 + 300})
    .attr("r", (d, i) => { return radiusScale(d)})
    
monthGroup
    .append("text")
    .attr("class", "day")
    .attr("x", 0)
    .attr("y", 70)
    .text((d, i) => { return i + 1})

monthGroup
   .append("text")
   .attr("class", "steps")
   .attr("x", 0)
   .attr("y", 70)
   .text((d, i) => { return d})