const Button = ({ text, color, children }) => {
  //화살표함수에서 매개변수로 받음 , props는 프로퍼티약자
  //   console.log(props);
  const onClickButton = () => {
    console.log(text);
  };

  return (
    <button onClick={onClickButton} style={{ color: color }}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};
Button.defaultProps = {
  color: "black",
};
export default Button;
