import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const PasswordValidator = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const evaluateStrength = (password) => {
    let score = 0;
    if (password.length >= 8) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;

    switch (score) {
      case 1:
        setStrength('Your Password is Good');
        break;
      case 2:
        setStrength('Your Password is Very Good');
        break;
      case 3:
        setStrength('Your Password is Strong');
        break;
      case 4:
        setStrength('Your Password is Excellent');
        break;
      default:
        setStrength('');
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setPassword(value);
    evaluateStrength(value);
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border-2 border-gray-300 rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Password Strength Checker</h2>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={handleChange}
          placeholder="Enter your password"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <span className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={toggleShowPassword}>
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
        </span>
      </div>
      {strength && <div className={`text-lg font-semibold p-2 rounded-lg ${strength.toLowerCase()}`}>{strength}</div>}
    </div>
  );
};

export default PasswordValidator;
