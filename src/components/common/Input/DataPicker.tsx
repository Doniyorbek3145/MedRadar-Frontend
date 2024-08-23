import dayjs from "dayjs";
import { DatePicker } from "antd";
import type { DatePickerProps } from "antd";

const DataPickerComponent = () => {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <DatePicker value={dayjs(`12-08-2021`, "DD-MM-YYYY")} onChange={onChange} />
  );
};

export default DataPickerComponent;
