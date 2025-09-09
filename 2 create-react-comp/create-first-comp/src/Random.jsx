function Random() {
  let number = Math.floor(Math.random() * 100);
  return <h1 style={{'backgroundColor': "#7a3e45"}}>Random number is: {number}</h1>;
}

export default Random;
