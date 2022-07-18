import clsx from "clsx";

export default function Button(props) {
  const { children, outline, className, onButtonClick, ...rest } = props;

  const classNames = clsx(
    {
      btn: true,
      "btn-default": !outline,
      "btn-outline": outline,
    },
    className
  );

  return (
    <button className={classNames} onClick={onButtonClick} {...rest}>
      {children}
    </button>
  );
}
