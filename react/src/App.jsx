import React from "react";

const Card = (props) => {
  return (
    <div
      style={{
        border: "1px solid black",
        width: "400px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>{props.name}</h1>
      <p>{props.description} </p>
    </div>
  );
};
const App = () => {
  const person1 = [
    {
      id: 1,
      name: "Rohil",
      description: "He is an engineer",
    },
    {
      id: 2,
      name: "Raush",
      description: "He is a student",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
      }}
    >
      {/* Alternative3 */}
      {personList.map((item) => {
        return (
          <Card key={item.id} name={item.name} description={item.description} />
        );
      })}
    </div>
  );
};

export default App;
