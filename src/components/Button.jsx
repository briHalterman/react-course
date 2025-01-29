function Button({
  label,
  id,
  WhenButtonIsClicked: whenClicked,
  cheesecode = 'gooey',
  children,
}) {
  // const label = props.label ?? 'default';
  // const id = props.id;
  // // const whenClicked = props.WhenButtonIsClicked;

  if (whenClicked) {
    whenClicked();
  }

  // console.log(props);

  return (
    <button id={id}>
      {/* {label}
      {cheesecode} */}
      {children}
    </button>
  );
}

// function sum(num1, num2) {
//   return num1 + num2;
// }

// sum(10, 50);
// sum(100, 1000);

// Button({})

export default Button;
