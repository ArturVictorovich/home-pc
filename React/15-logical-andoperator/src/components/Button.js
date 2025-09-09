function Button({onClick}) {
  console.log("btn rendered");
  return <button onClick={onClick}>Click me!!</button>;
}
export default Button;
