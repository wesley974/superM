import clsx from 'clsx';
export default function Input(props) {
  // Implement Input
  const {
    placeholder, 
    type, 
    className, 
    required, 
    ...rest
  } = props;

  const classes = clsx ({
      'input': true,
  }, className);

  return (
      <label className="label">
      {placeholder}
      {required ? (<span className="input-required">*</span>) : null}
      <div>
          <input 
          className={classes} 
          type={type ? type : 'text'} 
          placeholder={placeholder} 
          required={required} {...rest} />
      </div>
      </label>
  )
}

/*

USAGE

<Input placeholder="First name" />
<Input placeholder="Last name" onInput={handleLastNameInput} />
<Input placeholder="Email" type="email" required />

*/
