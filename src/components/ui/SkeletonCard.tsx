const SkeletonCard = () => {
  return (
    <div className="flex gap-[12px] flex-col">
      <div className="w-full bg-dark-secondary rounded-sm px-[36px] py-[16px] animate-skeleton h-[87px]"></div>
      <div className="w-full bg-dark-secondary rounded-sm px-[36px] py-[16px] animate-skeleton h-[87px]"></div>
      <div className="w-full bg-dark-secondary rounded-sm px-[36px] py-[16px] animate-skeleton h-[87px]"></div>
    </div>
  );
};

export default SkeletonCard;
