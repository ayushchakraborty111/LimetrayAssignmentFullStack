export const InputField = ({ label, type = 'text', value, onChange, ...rest }) => {
  return (
    <div className="input-group">
      {label && <label htmlFor={rest.id}>{label}</label>}
      <input 
        type={type} 
        value={value} 
        onChange={onChange} 
        {...rest} 
      />
    </div>
  );
};
