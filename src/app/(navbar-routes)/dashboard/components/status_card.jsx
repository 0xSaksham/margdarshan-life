export default function StatCard({
  icon,
  title,
  value,
  titleColor,
  bgColor = "bg-white",
}) {
  return (
    <div
      className={`${bgColor} w-full sm:w-[270px] rounded-3xl shadow-lg shadow-gray-300 p-4 sm:p-6 flex flex-col items-center justify-center`}
    >
      <div className="text-3xl sm:text-4xl mb-2 sm:mb-4 bg-gray-100 p-2 sm:p-3 rounded-xl">
        {icon}
      </div>
      <h3 className={`${titleColor} text-base sm:text-lg font-medium mb-1 sm:mb-2`}>
        {title}
      </h3>
      <p className="text-2xl sm:text-3xl font-semibold">{value}</p>
    </div>
  );
}
