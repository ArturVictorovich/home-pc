const Wrapper = (props) => {
  const styleFromWrapper = {
    backgroundColor: props.color,
    width: "250px",
    padding: "20px",
    margin: "20px auto",
  };
  return <div style={styleFromWrapper}>{props.children}</div>;
};

export default Wrapper;
