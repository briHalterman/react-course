import styles from './Button.module.css';

function Button({
  label = 'default',
  id,
  WhenButtonIsClicked: whenClicked,
  cheesecode = 'kraft',
  children,
}) {
  if (whenClicked) {
    whenClicked();
  }

  return (
    <button
      className={`${styles['my-button']} bg-green`}
      id={id}
    >
      {label}
    </button>
  );
}

export default Button;
