import React, { useState } from "react";
import styles from "./InputField.module.css";
import CountrySelect from "./CountrySelect";

// ✅ Explicitly define the type of props
interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (name: string, value: string) => void;
  icon?: "phone" | "password";
  inputMode?: "numeric" | "text" | "tel" | "email";
  maxLength?: number;
}

// ✅ Apply the correct prop type to the component
const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  icon,
  inputMode,
  maxLength,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [countryCode, setCountryCode] = useState("+1");

  // Handle country code selection
  const handleCountryCodeChange = (newCode: string) => {
    setCountryCode(newCode);
    onChange(name, newCode + value.replace(/\D/g, "")); // Remove non-numeric characters
  };

  // Handle phone input
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let phoneNumber = e.target.value.replace(/\D/g, ""); // Remove all non-numeric characters
    if (phoneNumber.length > 10) return; // Limit to 10 digits
    onChange(name, countryCode + phoneNumber);
  };

  // Handle password input (limit between 6 and 20 characters)
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 20) return; // Limit to 20 characters
    onChange(name, e.target.value);
  };

  return (
    <div className={styles.fieldContainer}>
      <label className={styles.label}>{label}</label>
      <div className={styles.inputContainer}>
        {icon === "phone" && (
          <CountrySelect value={countryCode} onChange={handleCountryCodeChange} />
        )}
        <input
          type={icon === "password" && showPassword ? "text" : type}
          name={name}
          className={styles.input}
          placeholder={placeholder}
          value={icon === "phone" ? value.replace(countryCode, "") : value}
          onChange={
            icon === "phone"
              ? handlePhoneChange
              : icon === "password"
              ? handlePasswordChange
              : (e) => onChange(name, e.target.value)
          }
          inputMode="tel" // Ensures correct mobile keyboard for phone input
          maxLength={icon === "phone" ? 10 : maxLength}
        />
        {icon === "password" && (
          <button
            type="button"
            className={styles.togglePassword}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
