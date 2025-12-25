export default function ShieldCheckIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3l7 3v5c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-3z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
