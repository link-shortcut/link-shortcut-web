export default function Menu({ id, isSelected, linkTo, menuName }) {
  const getStyle = () => {
    return isSelected
      ? "p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
      : "p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 dark:text-gray-300";
  };

  return (
    <a href={linkTo} id={id} className={getStyle()}>
      {menuName}
    </a>
  );
}
