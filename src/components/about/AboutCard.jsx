const AboutCard = ({ icon, textIcon, description, className = "" }) => {
  return (
    <div
      className="w-full h-30 sm:h-65 rounded-2xl border-2 border-gray-600
                 bg-gradient-to-r from-gray-900 to-gray-800"
    >
      <div className="flex h-full w-full flex-col items-center justify-center text-center gap-2">
        <div className="flex flex-col justify-center items-center">
          <div className={`text-5xl ${className}`}>{icon}</div>
          <span className={`text-3xl font-semibold ${className}`}>
            {textIcon}
          </span>
          <p className="text-xs sm:text-lg font-semibold text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
