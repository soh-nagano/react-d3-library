import React from 'react';
var {Link} = require('react-router');

module.exports = React.createClass({
  render() {
    return (
      <div>
        <nav className="navbar">
        	<li><Link to="/">Home</Link></li>
        	<li><Link to="/bubbleChart">Bubble Chart</Link></li>
          <li><Link to="/radialTree">Radial Tree</Link></li>
          <li><Link to="/colorMesh">colorMesh</Link></li>
          <li><Link to="/bestCanidate">Best Canidate</Link></li>
          <li><Link to="/mergeSort">Merge Sort</Link></li>
        </nav>
      </div>
    )
  }
});

