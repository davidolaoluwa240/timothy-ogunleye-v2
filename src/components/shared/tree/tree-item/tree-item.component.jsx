export const TreeItem = ({ role, org, year, isLastItem }) => {
  return (
    <div className="relative flex flex-col gap-6 mx-3">
      <p>{role}</p>
      <p className="text-white/80 text-sm italic">{org}</p>

      {!isLastItem && (
        <div className="absolute top-[69%] -right-[28%] -translate-y-1/2 flex items-center flex-col">
          <p className="border-5 rounded-full border-white/20">
            <small className="w-4 h-4 rounded-full block bg-blue" />
          </p>
          <p className="font-medium text-lg">{year}</p>
        </div>
      )}
    </div>
  );
};
