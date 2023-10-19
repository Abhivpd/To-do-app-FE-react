interface PropType {
  type: string;
  placeholder: string;
  value: string;
  state: React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({ type, placeholder, value, state }: PropType) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        state(e.target.value);
      }}
    />
  );
};

export default InputField;
