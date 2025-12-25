export default function SparklesIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M5 8l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M17 2l1.2 2.8L21 6l-2.8 1.2L17 10l-1.2-2.8L13 6l2.8-1.2L17 2z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
