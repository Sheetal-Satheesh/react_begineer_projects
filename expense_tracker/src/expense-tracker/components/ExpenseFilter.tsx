import React from "react";
import { categories } from "../../App";

interface Props {
  onSelectCaategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCaategory }: Props) => {
  return (
    <select
      name=""
      id=""
      className="form-select"
      onChange={(event) => onSelectCaategory(event.target.value)}>
      <option value="">All Other Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
