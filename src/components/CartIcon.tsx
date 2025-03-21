const CartIcon = ({ width = "40px", className = "cartIcon" }) => {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4.85795 8.84661C4.93811 7.80461 5.80699 7 6.85206 7H17.1479C18.193 7 19.0619 7.80461 19.142 8.84661L19.6687 15.6932C19.8474 18.0164 18.0105 20 15.6805 20H8.31951C5.98947 20 4.15259 18.0164 4.33129 15.6932L4.85795 8.84661Z"
        // stroke={color}
        strokeWidth="2"
      />
      <path
        d="M15 11V6C15 4.34315 13.6569 3 12 3V3C10.3431 3 9 4.34315 9 6V11"
        // stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CartIcon;
