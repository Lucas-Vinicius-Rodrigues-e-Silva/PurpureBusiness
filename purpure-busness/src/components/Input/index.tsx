import { UseFormRegister } from "react-hook-form";

interface iInput {
  id: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<any>;
  keyName: string;
}
const Input = ({ id, type, placeholder, register, keyName }: iInput) => {
  return (
    <>
      <label htmlFor={id}>{id}</label>
      <input type={type} placeholder={placeholder} {...register(keyName)} />
    </>
  );
};

export default Input;
