import clsx from 'clsx'; /* gestion class */

export default function Button(props){
  const {children, outline, className, ...rest} = props;
  const classes = clsx({
      'btn': true,
      "btn-outline": outline === true,
      'btn-default': outline !== true
  }, className)
  return <button className={classes} {...rest}>{children}</button>
}

/*

USAGE

<Button>Normal</Button>
<Button outline>Outline</Button>
<Button className="extra-class" onClick={handleButtonClick}>Customizable</Button>

*/
