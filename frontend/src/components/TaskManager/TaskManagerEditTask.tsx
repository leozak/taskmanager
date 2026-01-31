import { useEffect, useState } from "react";

import { Modal } from "../Modal";

import { useTaskUpdate } from "../../hooks/useTasks";

interface TaskManagerEditTaskProps {
  id: number;
  title: string;
  description: string;
  tags: string;
  done: boolean;
  date: string;
  closeCallback: () => void;
}

const TaskManagerEditTask = ({
  id,
  title,
  description,
  tags,
  done,
  date,
  closeCallback,
}: TaskManagerEditTaskProps) => {
  const [_title, set_Title] = useState<string>(title);
  const [_description, set_Description] = useState<string>(description);
  const [_tags, set_Tags] = useState<string[]>(
    tags.length === 0 ? [] : tags.split(","),
  );
  const [_done, set_Done] = useState<boolean>(done);
  const [_date, set_Date] = useState<string>(date.substring(0, 10));

  const [errorTitle, setErrorTitle] = useState<string | null>(null);

  const [closeConfirm, setCloseConfirm] = useState<boolean>(false);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== "") setErrorTitle(null);
    set_Title(event.target.value);
  };

  const { mutateUpdate, dataUpdate, isPendingUpdate, isSuccessUpdate } =
    useTaskUpdate();

  const handleSubmit = () => {
    console.log("ModalSave");
    if (
      _title === title &&
      _description === description &&
      _tags.join(",") === tags &&
      _done === done &&
      _date === date.substring(0, 10)
    ) {
      closeCallback();
      return;
    }
    mutateUpdate({
      id,
      title: _title,
      description: _description,
      tags: _tags.join(","),
      done: _done,
      date: _date,
    });
  };

  const handleClose = () => {
    console.log("ModalClose");
    console.log(_date === date);
    if (
      _title === title &&
      _description === description &&
      _tags.join(",") === tags &&
      _done === done &&
      _date === date
    ) {
      closeCallback();
    } else {
      setCloseConfirm(true);
    }
  };

  useEffect(() => {
    console.log(dataUpdate);
    if (dataUpdate?.success) closeCallback();
  }, [dataUpdate, isSuccessUpdate]);

  return (
    <Modal.Root>
      <Modal.Header>
        <Modal.Title title="Editar Tarefa" />
        <Modal.Close callbackClose={handleClose} />
      </Modal.Header>
      <Modal.Body>
        <Modal.InputText
          value={_title}
          onChange={handleTitleChange}
          placeholder="Título"
          error={errorTitle}
        />
        <Modal.TextArea
          value={_description}
          onChange={(e) => set_Description(e.target.value)}
          placeholder="Descrição"
          className="mt-2 h-auto max-h-30"
        />
        <Modal.InputTags
          placeholder="Etiquetas"
          tags={_tags}
          setTags={set_Tags}
        />
        <Modal.InputDate
          value={_date}
          onChange={(e) => set_Date(e.target.value)}
          className="mt-2"
        />
        <Modal.InputCheckbox
          label="Tarefa concluida"
          checked={_done}
          onChange={(e) => set_Done(e.target.checked)}
          className="mt-2"
        />
      </Modal.Body>
      <Modal.Actions>
        <Modal.Cancel onClick={handleClose} />
        <Modal.Confirm
          text={isPendingUpdate ? "Salvando..." : "Salvar"}
          disabled={isPendingUpdate || title === ""}
          onClick={handleSubmit}
        />
      </Modal.Actions>
      {closeConfirm && (
        <Modal.CloseConfirm>
          <Modal.Cancel text="Não" onClick={() => setCloseConfirm(false)} />
          <Modal.Confirm text="Sim" onClick={closeCallback} />
        </Modal.CloseConfirm>
      )}
    </Modal.Root>
  );
};

export default TaskManagerEditTask;
