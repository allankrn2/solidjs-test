import { splitProps } from 'solid-js';

/**
 * The button component will render a clickable button
 */
export const Button = (props) => {
  const [, rest] = splitProps(props, ['href', 'children']);

  return (
    <>
      {props.href ? (
        <a class={""} href={props.href} {...rest}>
          {props.children}
        </a>
      ) : (
        <button class={""} {...rest}>
          {props.children}
        </button>
      )}
    </>
  );
};

Button.defaultProps = {
  href: undefined,
};
