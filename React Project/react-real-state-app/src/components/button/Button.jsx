const Button = ({ children }) => {
  return (
    <button
      className={`${children === "Sign up" ? "bg-[#fece51] hover:bg-[#ebae11]" : "bg-[#e9e6e4] hover:bg-[#e0d7d2]"} btn-auth`}
    >
      {children}
    </button>
  );
};

export default Button;
