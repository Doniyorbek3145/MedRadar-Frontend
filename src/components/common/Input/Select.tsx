import { Select } from "antd";
import { useState } from "react";

const SelectComponent = () => {
  const [lang, setLang] = useState("uz");

  type optionsType = {
    value: string;
    label: React.ReactNode;
  };

  const options: optionsType[] = [
    { value: "uz", label: `Uz` },
    { value: "ru", label: "Ru" },
    { value: "en", label: "En" },
  ];

  return (
    <Select
      value={lang}
      options={options}
      onChange={setLang}
      defaultValue={lang}
      style={{ width: 100 }}
    />
  );
};

export default SelectComponent;
