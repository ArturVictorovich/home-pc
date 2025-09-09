const FormatResult = (item) => {
  return (
    <>
      <span
        style={{
          display: 'block',
          marginBottom: '15px',
          textAlign: 'left',
          cursor: 'pointer',
        }}
      >
        {item.name}
      </span>
    </>
  );
};

export default FormatResult;
