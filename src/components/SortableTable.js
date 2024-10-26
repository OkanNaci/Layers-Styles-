import Table from "./Table";
import useSort from "../hooks/use-sort";
import { HiMiniChevronUp, HiMiniChevronDown } from "react-icons/hi2";

function SortableTable({ config, fruits }) {
  const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(
    config,
    fruits
  );

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) return column;

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return (
    <Table
      fruits={sortedData}
      config={updatedConfig}
      keyFn={(fruit) => fruit.name}
    />
  );
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <HiMiniChevronUp />
        <HiMiniChevronDown />
      </div>
    );
  } else if (sortOrder === "asc") {
    return <HiMiniChevronUp />;
  } else if (sortOrder === "desc") {
    return <HiMiniChevronDown />;
  }
}

export default SortableTable;
