interface LogoProps {
  className?: string;
}

export default function Logo({ className = "w-12 h-12" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M50 8L10 40V90C10 92.5 12 95 15 95H85C88 95 90 92.5 90 90V40L50 8Z"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M30 55L45 70L70 40"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
