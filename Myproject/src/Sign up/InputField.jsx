function InputField({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  error,
}) {

  return (

    <div className="mb-5">

      {/* Label */}

      <label
        className="
        block
        text-zinc-700
        font-semibold
        mb-2
        ml-1
        "
      >
        {label}
      </label>

      {/* Input */}

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`
     w-full
px-5
py-4
rounded-2xl
border
border-[#d4af37]/30
bg-[#fffdf8]
outline-none
transition-all
duration-300
focus:border-[#d4af37]
focus:ring-4
focus:ring-[#d4af37]/15

        ${
          error
            ? "border-red-500"
            : "border-zinc-200 focus:border-pink-500"
        }
        `}
      />

      {/* Error */}

      {error && (

        <p
          className="
          text-red-500
          text-sm
          mt-1
          ml-1
          "
        >
          ⚠ {error}
        </p>

      )}

    </div>

  );

}

export default InputField;