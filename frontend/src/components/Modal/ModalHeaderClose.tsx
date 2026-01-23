import { IoClose } from "react-icons/io5";

interface ModalHeaderCloseProps {
  callbackClose?: () => void;
}

const ModalHeaderClose = ({ callbackClose }: ModalHeaderCloseProps) => {
  return (
    <button
      onClick={callbackClose}
      className="-mr-2 dark:text-zinc-400 hover:text-zinc-500 dark:hover:text-zinc-300 hover:cursor-pointer active:scale-90"
    >
      <IoClose className="w-5 h-5 sm:w-7 sm:h-7" />
    </button>
  );
};

export default ModalHeaderClose;
