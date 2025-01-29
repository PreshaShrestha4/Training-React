import React from "react";

const Card = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "400px",
        boxShadow:
          "rgba(0, 0, 0, 0.2) 0px 4px 8px, rgba(0, 0, 0, 0.1) 0px 2px 4px",
        padding: "10px",
        alignItems: "center",
      }}
    >
      <h1>Product Card</h1>
      <img
        src="https://i0.wp.com/motoworldnepal.com/wp-content/uploads/2022/06/MT15-metallic-black.png?fit=834%2C491&ssl=1"
        alt="Product Name"
        height={300}
        width={500}
      />
      <h3>Yamaha MT-15</h3>

      <p>
        Carrying the legacy of MT series, the new MT-15 Ver 2.0 brings more
        aggression and agility with its Upside Down front forks, Aluminium
        Swingarm, 155cc LC 4V FI engine and other exciting features.
      </p>
      <button
        style={{
          padding: "10px",
          background: "aqua",
          border: "none",
          cursor: "pointer",
        }}
      >
        see more
      </button>
    </div>
  );
};

const App2 = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        margin: "4rem",
      }}
    >
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default App2;

//rafce = react arrow function component with export
