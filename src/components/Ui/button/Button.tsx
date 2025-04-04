import React from "react";

function Button({ name = "Enter name" }) {
  return (
    <>
      <a
        className="inline-block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden"
        href="#"
      >
        {name}
      </a>
    </>
  );
}

export default Button;
