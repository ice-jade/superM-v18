import clsx from "clsx";

export default function Button(props) {
  const { children, outline, className, onButtonClick, round,  ...rest } = props;

  const classNames = clsx(
    {
      btn: true,
      "btn-default": !outline,
      "btn-outline": outline,
      "btn-round": round,
    },
    className
  );

  return (
    <button className={classNames} onClick={onButtonClick} {...rest}>
      {children}
    </button>
  );
}

function ButtonPlus(props) {
  const { children, outline, className, onButtonClick, round, ...rest } = props;
  console.log(round)

  const classNames = clsx(
    {
      btn: true,
      "btn-default": !outline,
      "btn-outline": outline,
      // "btn-round": round,
    },
    className
  );

  return (
    <button className={classNames} onClick={onButtonClick} {...rest}>
      {children}
    </button>
  );
}

export { ButtonPlus };