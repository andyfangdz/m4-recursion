/**
 * Created by andy on 9/24/16.
 */

import React from "react";

export default class SortViz extends React.Component {
  componentDidMount() {
    var width = 960,
      height = 600;

    var tree = d3.tree()
      .size([920, 550]);

    var svg = d3.select("#sortviz-graph").append("svg")
      .attr("width", width)
      .attr("height", height);

    var nextId = (function () {
      var i = 0;
      return function () {
        return i++;
      };
    })();

    function choosePivot(node) {
      node.pivot = node.arr[0],
        node.pivot_index = 0;
    }

    var slice = [].slice;

    function partition(node) {
      var arr = node.arr,
        pivot = node.pivot;

      node.lesser = arr.filter((x) => x < node.pivot);
      node.greater = arr.filter((x) => x > node.pivot);
    }

    window.SortVizControl = {
      start() {
        console.log("started");
      }
    };
  }

  render() {
    return (
      <div id="sortviz-graph"></div>
    )
  }
}