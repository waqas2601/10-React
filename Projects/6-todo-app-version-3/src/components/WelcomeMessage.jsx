const WelcomeMessage = ({ todoItems }) => {
  return todoItems.length === 0 && <p className="welcome">Enoy Your Day</p>;
};

export default WelcomeMessage;
