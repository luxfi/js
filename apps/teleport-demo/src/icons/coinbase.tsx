import { type LucideProps } from "lucide-react";

export const CoinbaseWalletIcon = ({ size = 24, ...rest }: LucideProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...rest}
    >
      <style>{".cb-st0{fill:#1b53e4}"}</style>
      <circle className="cb-st0" cx="12" cy="12" r="8.9" />
      <path
        d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10zm0-17.8c-4.3 0-7.8 3.5-7.8 7.8s3.5 7.8 7.8 7.8 7.8-3.5 7.8-7.8-3.5-7.8-7.8-7.8z"
        style={{ fill: "#FFFFFF" }}
      />
      <path
        d="M12.1 18c-3.3 0-5.9-2.6-5.9-5.9s2.6-5.9 5.9-5.9S18 8.9 18 12.1 15.3 18 12.1 18z"
        style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#FFFFFF" }}
      />
      <g>
        <path
          className="cb-st0"
          d="M10.2 11c0-.4.3-.8.8-.8h2.3c.4 0 .8.3.8.8v2.3c0 .4-.3.8-.8.8H11c-.4 0-.8-.3-.8-.8V11z"
        />
      </g>
    </svg>
  );
};
