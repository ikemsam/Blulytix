const Card = ({ icon, title, text }: any) => {
  return (
    <div className="flex flex-col p-4 transition-all duration-300 border  rounded-lg hover:bg-primary hover:text-secondary hover:shadow-lg max-h-[400px] h-full">
      {/* Replace 'icon' with appropriate icon element */}
      <div className="w-8 h-8 mb-2">{/* Icon element */}</div>
      <div className="flex flex-col justify-start">
        <strong className="mb-2">{title}</strong>
        <p className="text-sm font-normal tracking-wider leading-8">{text}</p>
      </div>
    </div>
  );
};

export default Card;
