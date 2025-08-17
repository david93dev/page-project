const ServicesCard = ({ icon, title, description, items = [], className }) => {
  return (
    <div
      className={`flex flex-col h-full min-h-[360px] sm:min-h-[420px]
                  border-2 rounded-2xl border-gray-600 
                  bg-gradient-to-r from-gray-900 to-gray-800 
                  px-6 py-5 hover:shadow-[0_0_9px_green]`}
    >
      {/* conteúdo */}
      <div className="space-y-4 flex-1">
        <div className={`text-blue-500 text-4xl ${className}`}>{icon}</div>
        <h3 className="text-lg text-white font-bold">{title}</h3>
        <p className="text-md text-gray-300 max-w-[300px]">{description}</p>

        {items.length > 0 && (
          <ul className={`list-disc pl-3 text-sm marker:text-lg marker:text-blue-500 ${className}`}>
            {items.map((item, index) => (
              <li key={index} className="text-gray-400">{item}</li>
            ))}
          </ul>
        )}
      </div>

      {/* opcional: rodapé/alinhamento */}
      {/* <div className="pt-4">...</div> */}
    </div>
  );
};

export default ServicesCard;
