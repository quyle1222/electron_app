import './input.css';

type Props = {
  text: string | undefined;
  onChange: (text: string) => void;
};

const Input = ({ text, onChange }: Props) => {
  const handleChange = ({ target }: any) => {
    const { value }: { value: string } = target;
    onChange(value);
  };

  return (
    <>
      <input className="input" value={text} onChange={handleChange} />
    </>
  );
};

export default Input;
