type Props = {
  children: string;
  className: string;
};

const rectStroke = {
  stroke: 'currentColor',
  strokeWidth: '1',
};

const lineStroke = {
  ...rectStroke,
  strokeDasharray: '1, 4',
};

export function HanziGrid({ children, className }: Props) {
  return (
    <div className={`relative ${className ?? ''}`}>
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        className="absolute inset-0 text-gray-400 -z-10"
        fill="none"
        viewBox="0 0 256 256"
      >
        <rect x="0" y="0" width="256" height="256" {...rectStroke} />
        <line x1="0" x2="256" y1="0" y2="256" {...lineStroke} />
        <line x1="0" x2="256" y1="256" y2="0" {...lineStroke} />
        <line x1="0" x2="256" y1="0" y2="256" {...lineStroke} />
        <line x1="0" x2="256" y1="128" y2="128" {...lineStroke} />
        <line x1="0" x2="256" y1="0" y2="256" {...lineStroke} />
        <line x1="128" x2="128" y1="0" y2="256" {...lineStroke} />
      </svg>
    </div>
  );
}
