import { Tab } from "@headlessui/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const TabItem = ({ selected, onClick, children }) => {
    return (
      <Tab
        className={classNames(
          'px-3 py-2.5 outline-none text-sm',
          selected
            ? 'bg-white text-blue-500 border-b-2 border-blue-500'
            : 'text-gray-700'
        )}
        onClick={onClick}
      >
        {children}
      </Tab>
    );
  };

export default TabItem;
