import { React, useState, useRef } from "react";
import CytoscapeComponent from "react-cytoscapejs";
import "./App.css";

function App() {
  const [showChildren, setShowChildren] = useState(true);

  const baseNodes = [
    { data: { id: "one", label: "Node 1" }, position: { x: 30, y: 50 } },
    { data: { id: "two", label: "Node 2" }, position: { x: 100, y: 100 } },
  ];

  const childNodes = [
    { data: { id: "three", label: "Node 3" }, position: { x: 200, y: 100 } },
    { data: { id: "four", label: "Node 4" }, position: { x: 300, y: 200 } },
    { data: { id: "five", label: "Node 5" }, position: { x: 400, y: 300 } },
  ];

  const baseEdges = [
    {
      data: { source: "one", target: "two", label: "Edge from Node1 to Node2" },
    },
  ];

  const childEdges = [
    {
      data: {
        source: "two",
        target: "three",
        label: "Edge from Node2 to Node3",
      },
    },
    {
      data: {
        source: "two",
        target: "four",
        label: "Edge from Node2 to Node4",
      },
    },
    {
      data: {
        source: "two",
        target: "five",
        label: "Edge from Node2 to Node5",
      },
    },
  ];

  // Compose visible elements depending on state
  const elements = {
    nodes: [...baseNodes, ...(showChildren ? childNodes : [])],
    edges: [...baseEdges, ...(showChildren ? childEdges : [])],
  };

  // Keep a ref to the cytoscape instance
  const cyRef = useRef(null);

  // Event handler to toggle children
  function handleCy(cy) {
    cyRef.current = cy; // save reference

    // To avoid adding multiple listeners, remove old ones first
    cy.off("tap", "node");

    cy.on("tap", "node", (event) => {
      const node = event.target;
      if (node.data("id") === "two") {
        setShowChildren((prev) => !prev);
      }
    });
  }

  const stylesheet = [
    {
      selector: "node",
      style: {
        width: 20,
        height: 20,
        shape: "rectangle",
      },
    },
    {
      selector: "edge",
      style: {
        width: 1,
      },
    },
  ];

  return (
    <>
      <p>RDA visualisation app</p>
      <CytoscapeComponent
        elements={CytoscapeComponent.normalizeElements(elements)}
        style={{ width: "100vw", height: "100vh" }}
        cy={handleCy}
        autolock={true}
        stylesheet={stylesheet}
      />
    </>
  );
}

export default App;
