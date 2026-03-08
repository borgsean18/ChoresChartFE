import './formComponents.scss';

export function InputField({ type, placeholder, value, onChange, error }) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`login-input${error ? ' input-error' : ''}`}
      />
      {error && <p className="field-error">{error}</p>}
    </div>
  );
}

export function Button({type, className, children}) {
    return (
        <button type={type} className={className}>
            {children}
        </button>
    );
}