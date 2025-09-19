function Hello() {
  const myName = "Waqas";
  const fullName = () => {
    return "M Waqas";
  };
  return <h3>Hello this is the future speaking {fullName()} </h3>;
}

export default Hello;
