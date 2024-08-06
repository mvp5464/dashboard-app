const DashboardInfoSection = ({
  logo,
  title,
  number,
  percentage,
}: {
  logo: JSX.Element;
  title: string;
  number: string;
  percentage: string;
}) => {
  return (
    <>
      <div className="flex justify-between items-center bg-neutral-900 rounded-xl p-3 hover:bg-neutral-900/80 duration-300">
        <div className="">{logo}</div>
        <div>
          <div className=" text-cyan-400">{title}</div>
          <div>
            <span className="font-bold text-neutral-200 mr-2">{number}</span>
            <span className=" text-cyan-400">{percentage}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardInfoSection;
