import type { ReactNode } from "react";

interface ModalRootProps {
  children: ReactNode;
}

const ModalRoot = ({ children }: ModalRootProps) => {
  return (
    <>
      <div className="fixed flex z-10 inset-0 justify-center items-center opacity-90 transition-colors bg-black/90 backdrop-blur-sm"></div>
      <div className="fixed flex inset-0 z-20 justify-center items-center">
        <div className="relative text-zinc-700 dark:text-zinc-300/85 bg-zinc-200 dark:bg-zinc-700 m-5 sm:m-20 rounded-2xl shadow-xl shadow-black p-6">
          {children}
        </div>
      </div>
    </>
  );
};

export default ModalRoot;
