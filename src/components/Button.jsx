/* eslint-disable react/prop-types */
const Button = ({ name, className }) => {
  return (
    <>
      <button className={className}>{name}</button>
    </>
  );
};

export default Button;
