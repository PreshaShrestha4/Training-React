const h1Style = {
  color: "green",
  fontSize: "3rem",
  background: "black",
};

const App1 = () => {
  const num = 25;
  return (
    <div>
      <h1 style={h1Style}>Hello World</h1>
      <p>{num}</p>
      <button
        onClick={() => {
          // console.log("Button Click");
          alert("Hi...Whats up?");
        }}
      >
        click me
      </button>
    </div>
  );
};

export default App1;
