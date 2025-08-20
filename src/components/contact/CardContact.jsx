import { Card } from "../ui/card";


const CardContact = ({icon, title, text}) => {
  return (
    <Card className="rounded-2xl bg-gray-900 px-2 py-3 w-full border border-gray-800">
      <div className="flex items-center gap-2">
        <div
          className="bg-gradient-to-r from-blue-500 to-green-500
                 hover:from-blue-600 hover:to-green-600 text-gray-200 text-lg flex justify-center items-center w-12 px-2 py-3 rounded-lg gap-4 "
        >
          {icon}
        </div>
        <div>
          <h2 className="text-lg text-white">{title}l</h2>
          <p className="text-gray-400 text-xs sm:text-sm">
            {text}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default CardContact;

