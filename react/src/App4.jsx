import React from "react";

const DisplayProduct = (props) => {
  return (
    <div style={{ border: "1px solid black", padding: "1rem" }}>
      <img src={props.image} alt="Product image" height={250} width={250} />
      <h3>{props.title}</h3>
    </div>
  );
};
const App4 = () => {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <DisplayProduct
        image={
          "https://i0.wp.com/motoworldnepal.com/wp-content/uploads/2022/06/MT15-metallic-black.png?fit=834%2C491&ssl=1"
        }
        title={"MT-15 yamaha"}
      />

      <DisplayProduct
        image={
          "https://m.media-amazon.com/images/I/31aDWE4msZL._AC_UF1000,1000_QL80_.jpg"
        }
        title={"MI Tv"}
      />
      <DisplayProduct
        image={
          "https://www.lg.com/np/images/tvs/md07531468/gallery/Z01_Z1_V.jpg"
        }
        title={"Sony Tv"}
      />
    </div>
  );
};

export default App4;
