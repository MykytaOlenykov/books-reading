import { createPortal } from "react-dom";
import { Tutorial } from "components/Tutorial/Tutorial";
import * as S from "./TutorialModal.styled";

const modalRoot = document.getElementById("modal-root")!;

interface IProps {
  onCloseModal: () => void;
}

export const TutorialModal: React.FC<IProps> = ({ onCloseModal }) =>
  createPortal(
    <S.Modal>
      <Tutorial onCloseModal={onCloseModal} />
    </S.Modal>,
    modalRoot
  );
