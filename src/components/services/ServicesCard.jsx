const ServicesCard = ({icon, title, description, items = [], className}) => {
  return (
    <div
      className={`border-2 rounded-2xl border-gray-600 bg-gradient-to-r from-gray-900
             to-gray-800 w-sm space-y-5 px-6 py-5 hover:shadow-[0_0_9px_white]`}
    >
      <div className={`text-blue-500 text-7xl ${className}`} >
        {icon}
      </div>
      <h3 className="text-2xl text-white font-bold">{title}</h3>
      <p className="text-lg text-gray-400">{description}</p>

      {items.length > 0 && (
        <ul className={`list-disc list-inside space-y-2 marker:text-2xl marker:text-blue-500 ${className}`}>
          {items.map((item, index) => (
            <li key={index} className="text-gray-400">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServicesCard;
