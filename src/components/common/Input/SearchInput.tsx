import { useState } from "react";
import { AutoComplete, Input } from "antd";
import type { AutoCompleteProps } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const getRandomInt = (max: number, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const searchResult = (query: string) =>
  new Array(getRandomInt(5))
    .join(".")
    .split(".")
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>
              найденный {query} на{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://s.taobao.com/search?q=${query}`}
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} результаты</span>
          </div>
        ),
      };
    });

const SearchInput = () => {
  const [options, setOptions] = useState<AutoCompleteProps["options"]>([]);

  const handleSearch = (value: string) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value: string) => {
    console.log("onSelect", value);
  };

  return (
    <AutoComplete
      size="large"
      options={options}
      onSelect={onSelect}
      style={{ width: 300 }}
      onSearch={handleSearch}
      popupMatchSelectWidth={252}
    >
      <Input
        size="large"
        prefix={<SearchOutlined className="search-input" />}
        placeholder="Поиск ..."
      />
    </AutoComplete>
  );
};

export default SearchInput;
