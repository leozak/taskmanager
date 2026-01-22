interface ModalHeaderTitleProps {
  title: string;
}

const ModalHeaderTitle = ({ title }: ModalHeaderTitleProps) => {
  return (
    <h1 className="text-zinc-900 dark:text-zinc-200 text-base sm:text-xl font-bold mr-4 text-center">
      {title}
    </h1>
  );
};

export default ModalHeaderTitle;
