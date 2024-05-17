export const LuxIcon = ({
  size = 24,
  backgroundFill,
  foregroundFill,
  ...rest
}: {
  size?: number;
  backgroundFill?: string;
  foregroundFill?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    {...rest}
  >
    <path
      d="M12 23c6.1 0 11-4.9 11-11S18.1 1 12 1 1 5.9 1 12s4.9 11 11 11z"
      style={{ fill: backgroundFill }}
    />
    <path
      d="M14.4 9.7c.1-.3.1-.5 0-.8-.1-.2-.2-.5-.5-.9l-1.2-2.1c-.2-.4-.4-.7-.5-.7-.2-.1-.4-.1-.5 0-.1.1-.3.3-.5.7l-5.5 9.7c-.2.4-.4.6-.4.8 0 .2.1.4.3.5.1.1.4.1.9.1h2.3c.6 0 .8 0 1.1-.1.3-.1.5-.2.7-.4.2-.2.3-.4.6-.9l2.8-4.9c.2-.6.3-.8.4-1zm4.3 5.8L17 12.7c-.2-.4-.4-.6-.5-.7-.2-.1-.4-.1-.5 0-.2.1-.3.3-.5.7l-1.7 2.8c-.2.4-.4.6-.4.8 0 .2.1.4.3.5.1.1.4.1.9.1H18c.5 0 .7 0 .9-.1.2-.1.3-.3.3-.5-.1-.1-.2-.4-.5-.8z"
      style={{ fill: foregroundFill }}
    />
  </svg>
);

export const LuxColorIcon = ({
  size,
  ...rest
}: {
  size?: number;
  backgroundFill?: string;
  foregroundFill?: string;
}) => {
  return (
    <LuxIcon
      size={size}
      backgroundFill="#E84142"
      foregroundFill="#FFFFFF"
      {...rest}
    />
  );
};
