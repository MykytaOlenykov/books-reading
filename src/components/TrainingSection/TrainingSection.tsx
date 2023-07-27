import React, { useState, useEffect } from "react";
import { HiddenComponent } from "components/HiddenComponent";
import { Sidebar } from "components/Sidebar";
import { TimeSection } from "components/TimeSection";
import { Scoreboard } from "components/Scoreboard";
import { BooksList } from "components/BooksList";
import { StatisticsChart } from "components/StatisticsChart";
import { TimerBeforeStartTraining } from "components/TimerBeforeStartTraining";
import { FinishTrainingButton } from "components/FinishTrainingButton";
import { StatisticsSection } from "components/StatisticsSection";
import { Modal } from "components/Modal";
import { FinishedBookInfo } from "components/FinishedBookInfo";
import { EndTrainingInfo } from "components/EndTrainingInfo";
import {
  selectBooks,
  selectIsChangingStatus,
  selectStartDate,
  selectStatus,
} from "redux/planning/selectors";
import { selectUpdatedBook } from "redux/books/selectors";
import { clearUpdatedBook } from "redux/books/slice";
import { useResizeScreen, useAppSelector, useAppDispatch } from "hooks";
import { bookStatuses, planningStatuses } from "constants/";
import * as S from "./TrainingSection.styled";

export const TrainingSection: React.FC = () => {
  const { isDesktop } = useResizeScreen();
  const books = useAppSelector(selectBooks);
  const status = useAppSelector(selectStatus);
  const startDate = useAppSelector(selectStartDate);
  const updatedBook = useAppSelector(selectUpdatedBook);
  const isChangingStatus = useAppSelector(selectIsChangingStatus);
  const [isStartedTraining, setIsStartedTraining] = useState<boolean>(
    () => status !== planningStatuses.idle
  );
  const [isOpenBookInfoModal, setIsOpenBookInfoModal] = useState(false);
  const [isOpenTimeoverInfoModal, setIsOpenTimeoverInfoModal] = useState(
    status === planningStatuses.timeover
  );
  const [isOpenFinishedTrainingInfoModal, setIsOpenFinishedTrainingInfoModal] =
    useState(status === planningStatuses.finished);
  const dispatch = useAppDispatch();

  const isShowCancelTrainingButton =
    status === planningStatuses.active && !isChangingStatus;

  const isShowFinishTrainingButton =
    status === planningStatuses.timeover ||
    status === planningStatuses.finished;

  useEffect(() => {
    if (status === planningStatuses.active) {
      setIsStartedTraining(true);
    }

    if (status === planningStatuses.timeover) {
      setIsOpenTimeoverInfoModal(true);
    }

    if (status === planningStatuses.finished) {
      setIsOpenFinishedTrainingInfoModal(true);
    }
  }, [status]);

  useEffect(() => {
    if (!updatedBook) {
      return;
    }

    if (
      status === planningStatuses.active &&
      updatedBook.pagesTotal === updatedBook.pagesFinished
    ) {
      setIsOpenBookInfoModal(true);
    }

    dispatch(clearUpdatedBook());
  }, [status, updatedBook, dispatch]);

  const handleCloseBookInfoModal = (): void => {
    setIsOpenBookInfoModal(false);
  };

  const handleCloseTimeoverInfoModal = (): void => {
    setIsOpenTimeoverInfoModal(false);
  };

  const handleCloseFinishedTrainingInfoModal = (): void => {
    setIsOpenFinishedTrainingInfoModal(false);
  };

  return isStartedTraining ? (
    <S.Container>
      <div style={{ width: "100%" }}>
        <HiddenComponent>
          <h1>Сторінка тренування</h1>
        </HiddenComponent>

        <TimeSection />

        {isShowCancelTrainingButton && (
          <S.BtnContainer>
            <FinishTrainingButton
              styleType="secondary"
              text="Скасувати тренування"
            />
          </S.BtnContainer>
        )}

        {isShowFinishTrainingButton && (
          <S.BtnContainer>
            <FinishTrainingButton styleType="primary" text="Нове тренування" />
          </S.BtnContainer>
        )}

        {!isDesktop && <Scoreboard />}

        <BooksList status={bookStatuses.training} books={books} />

        <StatisticsChart />

        {!isDesktop && <StatisticsSection />}

        {isOpenBookInfoModal && (
          <Modal onCloseModal={handleCloseBookInfoModal}>
            <FinishedBookInfo onCloseModal={handleCloseBookInfoModal} />
          </Modal>
        )}

        {isOpenTimeoverInfoModal && (
          <Modal onCloseModal={handleCloseTimeoverInfoModal}>
            <EndTrainingInfo
              text="Ти молодчина, але потрібно швидше! Наступного разу тобі все вдасться)"
              onCloseModal={handleCloseTimeoverInfoModal}
            />
          </Modal>
        )}

        {isOpenFinishedTrainingInfoModal && (
          <Modal onCloseModal={handleCloseFinishedTrainingInfoModal}>
            <EndTrainingInfo
              isAccentIcon
              text="Ти молодчина, ти встиг все прочитати)"
              onCloseModal={handleCloseFinishedTrainingInfoModal}
            />
          </Modal>
        )}
      </div>

      {isDesktop && (
        <Sidebar>
          <Scoreboard />
          <StatisticsSection />
        </Sidebar>
      )}
    </S.Container>
  ) : (
    <TimerBeforeStartTraining startDate={startDate!} />
  );
};
