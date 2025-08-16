const AboutCard = ({ icon, textIcon, description, className = "" }) => {
  return (
    <div
      className="w-60 h-60 rounded-2xl border-2 border-gray-600
                 bg-gradient-to-r from-gray-900 to-gray-800 p-4"
    >
      <div className="flex h-full w-full flex-col items-center justify-center text-center gap-2">
        <div className={`text-7xl ${className}`}>{icon}</div>
        <span className={`text-4xl font-semibold ${className}`}>{textIcon}</span>
        <p className="text-md overflow font-semibold text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default AboutCard;
