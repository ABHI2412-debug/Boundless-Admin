function HelpCard({ icon, title }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 
                    p-12 flex flex-col items-center justify-center 
                    h-64 text-center">
      <div className="mb-6 text-gray-600">
        {icon}
      </div>

      <h3 className="text-xl font-medium text-gray-800 leading-tight">
        {title}
      </h3>
    </div>
  );
}

export default HelpCard;
