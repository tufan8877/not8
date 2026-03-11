interface LogoProps {
  className?: string;
}

export default function Logo({ className = "w-12 h-12" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 88 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="8" y="8" width="72" height="72" rx="18" stroke="currentColor" strokeWidth="4.5" />
      <path
        d="M28 56V32h6.5l9.5 12.5L53.5 32H60v24h-6V41.7l-10 12.8-10-12.8V56H28Z"
        fill="currentColor"
      />
      <path d="M24 66H64" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
    </svg>
  );
}
