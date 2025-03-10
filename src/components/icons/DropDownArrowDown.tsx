const DropDownArrowDown = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.932 0.815674H1.06536C0.265359 0.815674 -0.134642 1.78234 0.432025 2.34901L4.74869 6.66567C5.44036 7.35734 6.56536 7.35734 7.25703 6.66567L8.89869 5.02401L11.5737 2.34901C12.132 1.78234 11.732 0.815674 10.932 0.815674Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DropDownArrowDown;
