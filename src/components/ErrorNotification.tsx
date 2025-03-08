import AttentionIcon from "./icons/AttentionIcon";

const ErrorNotification = () => {
  return (
    <div className="bg-dark-secondary w-full rounded-sm py-[17px] px-[24px] flex flex-nowrap whitespace-nowrap gap-[12px] items-center">
      <AttentionIcon />
      Ошибка: не удалось загрузить информацию
    </div>
  );
};

export default ErrorNotification;
