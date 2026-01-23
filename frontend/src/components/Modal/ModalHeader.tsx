import type { ReactNode } from "react";

interface ModalHeaderProps {
  children: ReactNode;
}
const ModalHeader = ({ children }: ModalHeaderProps) => {
  return (
    <div className="flex flex-row py-2 -mt-4 mb-1 sm:mb-2 items-center justify-between">
      {children}
    </div>
  );
};

export default ModalHeader;
