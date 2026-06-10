function InputField(props) {

  return (

    <div>

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
        {props.label}
      </label>

      {/* Input */}

      <input
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        className="
        w-full
        border
        p-3
        rounded-lg
        mb-2
        outline-none
        focus:border-blue-500
        "
      />

      {/* Error */}

      {
        props.error && (

          <p
            className="
            text-red-500
            text-sm
            mb-2
            "
          >
            {props.error}
          </p>

        )
      }

    </div>

  );

}

export default InputField;