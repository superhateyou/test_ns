import React, { useCallback, useState } from "react";
import getRandomId from "./utils/getRandomId";
import TUser from "./types/types";
import receiveRandomUser from "./api/api";

import useThrottle from "./hooks/useThrottle";
import useDebounce from "./hooks/useDebounce";

import CustomButton from "./components/CustomButton";
import UserInfo from "./components/UserInfo";
import FetchError from "./types/types";

function App(): JSX.Element {
  const [items, setItems] = useState<Record<number, TUser> | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const { isBlocked, setBlock } = useThrottle(300);

  const handleButtonClick = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.stopPropagation();

    const randomId = getRandomId();
    if (items && randomId in items) {
      setBlock()
      return;
    }

    await receiveRandomUser(randomId)
      .then((result:TUser) => {
        setItems((prev) => ({ [randomId]: result, ...prev }));
      })
      .catch((error) => {
        setError(error);
        setTimeout(() => setError(null), 5000);
      })
      .finally(() => setBlock());
  };

  const debouncedHandleButtonClick = useCallback(
    useDebounce(handleButtonClick, 300),
    [items],
  );
  const handleButtonClickCallback = useCallback(handleButtonClick, [items]);

  return (
    <div>
      {error ? `Error occured: ${error.message}` : "No errors"}
      <header>Get a random user</header>
      <CustomButton
        onClick={debouncedHandleButtonClick}
        disabled={isBlocked}
        method={"debounce"}
      />
      <CustomButton
        onClick={handleButtonClickCallback}
        disabled={isBlocked}
        method={"throttle"}
      />
      <UserInfo user={items} />
    </div>
  );
}

export default App;
