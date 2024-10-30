interface CheckboxIconProps {
    isChecked: boolean;
  }

function CheckboxIcon({isChecked}: CheckboxIconProps) {
  return (
    <svg
      className={`w-6 h-6 ${isChecked ? "block hover:scale-105" : "hidden"}`}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect width="24" height="24" rx="4.8" fill="#01B9C5" />
      <path
        d="M6 12.7579L10.5692 16.8L19.2 7.2"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CheckboxIcon;
