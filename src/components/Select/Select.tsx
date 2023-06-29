import React, { useMemo, useState } from "react";
import { useBooks } from "hooks";
import * as S from "./Select.styled";

export const Select: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [isShowList, setIsShowList] = useState(false);
  const { goingToRead } = useBooks();

  const visibledBooks = useMemo(() => {
    return goingToRead.filter(({ title }) => title.includes(inputValue));
  }, [goingToRead, inputValue]);

  const handleFocusInput = (): void => setIsShowList(true);

  const handleBlurInput = (): void => setIsShowList(false);

  const handleChooseBook = (id: string, title: string): void => {
    console.log(id, title);

    setInputValue(title);
    setIsShowList(false);
  };

  const handleChangeInputValue = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => setInputValue(e.target.value);

  return (
    <S.Container>
      <S.InputConainer>
        <S.Input
          type="text"
          value={inputValue}
          onChange={handleChangeInputValue}
          onFocus={handleFocusInput}
          placeholder="Обрати книги з бібліотеки"
        />

        <S.Icon $active={isShowList} />
      </S.InputConainer>

      {isShowList && (
        <S.List>
          {visibledBooks.map(({ _id, title }) => (
            <S.Item key={_id} onClick={() => handleChooseBook(_id, title)}>
              {title}
            </S.Item>
          ))}
        </S.List>
      )}
    </S.Container>
  );
};
