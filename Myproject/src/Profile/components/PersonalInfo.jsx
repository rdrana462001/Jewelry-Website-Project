function PersonalInfo({
  formData,
  isEditing,
  onFieldChange,
}) {
  const fields = [
    {
      label: "Full Name",
      key: "name",
      type: "text",
    },
    {
      label: "Email",
      key: "email",
      type: "email",
    },
    {
      label: "Phone Number",
      key: "phone",
      type: "tel",
    },
    {
      label: "Date Of Birth",
      key: "dob",
      type: "date",
    },
    {
      label: "Gender",
      key: "gender",
      type: "select",
      options: ["Male", "Female", "Other"],
    },
    {
      label: "Address",
      key: "address",
      type: "text",
    },
    {
      label: "City",
      key: "city",
      type: "text",
    },
    {
      label: "Country",
      key: "country",
      type: "text",
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-200">

      <h2 className="text-2xl font-semibold mb-8">
        Personal Information
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        {fields.map((field) => (
          <div
            key={field.key}
            className={
              field.key === "address"
                ? "md:col-span-2"
                : ""
            }
          >

            <label className="block mb-2 text-sm text-gray-600">
              {field.label}
            </label>

            {field.type === "select" ? (
              <select
                value={formData?.[field.key] || ""}
                onChange={(e) =>
                  onFieldChange(
                    field.key,
                    e.target.value
                  )
                }
                disabled={!isEditing}
                className="
                  w-full
                  bg-gray-100
                  px-4
                  py-3
                  rounded-xl
                  outline-none
                "
              >
                {field.options.map((opt) => (
                  <option
                    key={opt}
                    value={opt}
                  >
                    {opt}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                value={formData?.[field.key] || ""}
                onChange={(e) =>
                  onFieldChange(
                    field.key,
                    e.target.value
                  )
                }
                disabled={!isEditing}
                className="
                  w-full
                  bg-gray-100
                  px-4
                  py-3
                  rounded-xl
                  outline-none
                "
              />
            )}
          </div>
        ))}

      </div>
    </div>
  );
}

export default PersonalInfo;