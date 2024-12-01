// CommonInput.jsx
import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import PropTypes from "prop-types";

const CommonInput = ({
  name,
  label,
  type = "text",
  rules = {},
  placeholder = "",
  defaultValue = "",
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="w-full mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field }) => (
          <input
            id={name}
            type={type}
            placeholder={placeholder}
            className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              errors[name] ? "border-red-500 focus:ring-red-500" : "border-gray-300"
            }`}
            {...field}
          />
        )}
      />
      {errors[name] && (
        <span className="text-sm text-red-500 mt-1">{errors[name]?.message}</span>
      )}
    </div>
  );
};

CommonInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  rules: PropTypes.object,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
};

export default CommonInput;
