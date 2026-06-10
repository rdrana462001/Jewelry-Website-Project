import { useState, useEffect } from "react";

function useProfileForm(user) {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [isModified, setIsModified] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        dob: user.dob || "",
        gender: user.gender || "",
        address: user.address || "",
        city: user.city || "",
        country: user.country || "",
        bio: user.bio || "",
        notes: user.notes || "",
      });
    }
  }, [user]);

  const updateField = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
    setIsModified(true);
    // Clear error for this field
    setErrors((prev) => ({
      ...prev,
      [key]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Name validation
    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    // Phone validation (if provided)
    if (formData.phone && !/^[\d\s\-+()]+$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    setErrors(newErrors);
    return newErrors;
  };

  const resetForm = () => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        dob: user.dob || "",
        gender: user.gender || "",
        address: user.address || "",
        city: user.city || "",
        country: user.country || "",
        bio: user.bio || "",
        notes: user.notes || "",
      });
    }
    setErrors({});
    setIsModified(false);
  };

  return {
    formData,
    errors,
    isModified,
    updateField,
    resetForm,
    validateForm,
  };
}

export default useProfileForm;