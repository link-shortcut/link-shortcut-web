import { useState } from "react";
import Button from "./Button";
import InputBox from "./InputBox";
import { expireShortenUrl } from "../api/api";
import Spinner from "./Spinner";

export default function ExpireUrlForm() {
  const [shortenPath, setShortenPath] = useState("");
  const [expireKey, setExpireKey] = useState("");
  const [hasError, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleButton = () => {
    const expireShortenUrlData = {
      shortenPath: shortenPath,
      expireKey: expireKey,
    };

    setLoading(true);
    setError(false);

    expireShortenUrl(expireShortenUrlData)
      .then((response) => {
        alert(
          `단축 URL "${process.env.REACT_APP_SERVER_HOST}/${shortenPath}" 가 만료되었습니다.`
        );
      })
      .catch((error) => {
        console.error(error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChange = (setState) => (event) => {
    setState(event.target.value);
  };

  const showError = () => {
    if (hasError) {
      return (
        <h3 className="text-sm font-semibold text-red-600">
          유효하지 않는 URL이거나 만료키가 일치하지 않습니다.
        </h3>
      );
    }
  };

  return (
    <>
      <div className="flex flex-col border border-stone-500 border-1 rounded-md bg-gray-500 my-4 drop-shadow-lg">
        <div className="flex flex-col gap-3 p-4">
          <div className="flex gap-2 align-middle">
            <p className="mt-1 ml-1 antialiased tracking-wide text-xl drop-shadow-xl align-middle font-semibold dark:text-slate-100">{`${process.env.REACT_APP_SERVER_HOST}/`}</p>
            <InputBox
              disabled={false}
              value={shortenPath}
              placeholder={"ex) AAAAAAA"}
              handleChange={handleChange(setShortenPath)}
            />
          </div>
          <InputBox
            disabled={false}
            value={expireKey}
            placeholder={"만료키를 입력해주세요."}
            handleChange={handleChange(setExpireKey)}
          />
          {showError()}
          <div className="flex w-full justify-center content-center">
            <Button
              disabled={loading}
              name={loading ? <Spinner /> : `입력`}
              handleClick={handleButton}
            />
          </div>
        </div>
      </div>
    </>
  );
}
