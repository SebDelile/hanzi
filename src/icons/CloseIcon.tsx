import { iconProps } from '../types/iconProps';

export function CloseIcon({ className }: iconProps): React.ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      className={`${className ?? ''}`}
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
      />
      <path
        fillRule="evenodd"
        d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
      />
    </svg>
  );
}
