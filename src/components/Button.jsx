const Button = (props) => {
  return (
    <button
      className={`  ${props.variant} custom-button`}
      type="submit"
      onClick={props}
    ></button>
  );
};

export default Button;
