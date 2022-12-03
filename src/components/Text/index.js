import React from "react";
const variantClasses = {
  h1: "font-light md:text-[48px] sm:text-[48px] text-[78.29px]",
  h2: "font-normal sm:text-[32.29px] md:text-[38.29px] text-[42.29px]",
  h3: "sm:text-[16.48px] md:text-[18.48px] text-[20.48px]",
  h4: "font-normal text-[19.54px]",
  h5: "font-bold text-[16.48px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
