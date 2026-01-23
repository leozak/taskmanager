import type { ReactNode } from "react";

interface ModalBodyProps {
  children: ReactNode;
}

const ModalBody = ({ children }: ModalBodyProps) => {
  return <div>{children}</div>;
};

export default ModalBody;
