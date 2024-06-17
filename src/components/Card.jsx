const Card = ({ icon, title, content }) => (
  <div class="max-w-sm p-6 h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    {icon && (
      <img
        src={icon}
        alt="icon"
        className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3"
      />
    )}
    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
      {title}
    </h5>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">{content}</p>
  </div>
);

export default Card;
