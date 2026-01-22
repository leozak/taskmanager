import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { PiUserCircleBold } from "react-icons/pi";
import { Modal } from "../Modal";

const SidebarUser = () => {
  const [showUserEdit, setShowUserEdit] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errorName, setErrorName] = useState<string | null>(null);

  const handleModalClose = () => {
    setShowUserEdit(false);
  };

  useEffect(() => {
    const name = localStorage.getItem("name");
    setName(name as string);
    setErrorName("Erro do nome");
  }, [showUserEdit]);
  return (
    <>
      <button
        onClick={() => setShowUserEdit(true)}
        className="hover:cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-300 dark:text-zinc-400"
      >
        <PiUserCircleBold className="w-7 h-7" />
      </button>

      {showUserEdit && (
        <Modal.Root>
          <Modal.Header>
            <Modal.Title title="Informações do Usuário" />
            <Modal.Close callbackClose={handleModalClose} />
          </Modal.Header>
          <Modal.Body>
            <Modal.InputText
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Entre com um nome"
              title="Nome do usuario"
              error={errorName}
            />
            <Modal.InputPassword
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Entre com uma nova senha"
              title="Nova senha"
            />
            <Modal.InputPassword
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirme a nova senha"
              title="Confirmar senha"
            />
          </Modal.Body>

          <div>
            <p>Nome: {name}</p>
            <p>Nova senha: </p>
            <p>Confirmar senha: </p>
          </div>
        </Modal.Root>
      )}
    </>
  );
};

export default SidebarUser;
