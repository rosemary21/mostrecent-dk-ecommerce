import { ChangeEvent } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import PrimaryInput from "../general/PrimaryInput";

interface FormValues {
  state: string;
  zipCode: string;
  address: string;
  city: string;
  userName: string;
  lga: string;
}

export default function DeliveryDetailsForm() {
  const [formValues, setFormValues] = useLocalStorage<FormValues>(
    "delivery-details",
    {
      state: "",
      zipCode: "",
      address: "",
      city: "",
      userName: "",
      lga: "",
    }
  );
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  return (
    <div className="w-full grid grid-cols-2 gap-4">
      <PrimaryInput
        id="state"
        name="state"
        onChange={handleChange}
        value={formValues.state}
        placeholder="State"
      />
      <PrimaryInput
        id="zipCode"
        name="zipCode"
        onChange={handleChange}
        value={formValues.zipCode}
        placeholder="Zip code"
      />
      <PrimaryInput
        id="address"
        name="address"
        onChange={handleChange}
        value={formValues.address}
        placeholder="Address"
      />
      <PrimaryInput
        id="city"
        name="city"
        onChange={handleChange}
        value={formValues.city}
        placeholder="City"
      />
      <PrimaryInput
        id="username"
        name="username"
        onChange={handleChange}
        value={formValues.userName}
        placeholder="User name"
      />
      <PrimaryInput
        id="lga"
        name="lga"
        onChange={handleChange}
        value={formValues.lga}
        placeholder="Local Govt. Area"
      />
    </div>
  );
}
