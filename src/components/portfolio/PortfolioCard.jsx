import { Button } from "../ui/button";

const PortfolioCard = ({
  smallLogo,
  smallLogoAlt = "",
  bigLogo,
  bigLogoAlt = "",
  badgeText = "",
  description = "",
  features = [],
  btnText = "Visitar Site",
  href,
  onClick,
  iconClass = "",
  listClass = "",
  buttonClass = "",
}) => {
  // Botão como link (se tiver href) ou como botão (onClick)
  const ButtonWrap = ({ children }) =>
    href ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className="w-full">
        {children}
      </a>
    ) : (
      <div className="w-full" onClick={onClick}>
        {children}
      </div>
    );

  return (
    <div className={`w-full sm:w-[60%] lg:w-[35%] 2xl:w-[22%] rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 p-5`}>
      {/* Topo: logo pequeno + badge */}
      <div className="flex justify-between items-center">
        <img src={smallLogo} alt={smallLogoAlt} className="w-12 h-12 rounded-sm" />
        {badgeText ? (
          <div className={`text-xs px-2 py-1 rounded-full text-center ${iconClass}`}>
            {badgeText}
          </div>
        ) : null}
      </div>

      {/* Conteúdo */}
      <div className="mt-8 space-y-5">
        {bigLogo ? <img src={bigLogo} alt={bigLogoAlt} className="w-[120px]" /> : null}

        {description ? (
          <p className="text-md text-gray-400 max-w-[300px]">{description}</p>
        ) : null}

        {features?.length > 0 ? (
          <ul className={`list-disc list-inside text-sm marker:text-lg ${listClass} text-white space-y-1`}>
            {features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        ) : null}

        <div className="flex justify-center items-center">
          <Button className={`w-full text-white ${buttonClass}`}>
            <ButtonWrap>{btnText}</ButtonWrap>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
