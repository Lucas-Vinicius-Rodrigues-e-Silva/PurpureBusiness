interface iButton {
  type: any;
  text: string;
}
const Button = ({ type, text }: iButton) => {
  return (
    <>
      <button type={type}>{text}</button>
    </>
  );
};

export default Button;
