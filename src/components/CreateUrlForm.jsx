import { useState } from "react";
import Button from "./Button";
import InputBox from "./InputBox";
import { createShortenUrl } from "../api/api";
import CustomDatepicker from "./CustomDatepicker";
import Modal from "./Modal";
import Spinner from "./Spinner";

export default function CreateUrlForm() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [expireDate, setExpireDate] = useState({
    startDate: null,
    endDate: null,
  });
  const [showModal, setShowModal] = useState(false);
  const [responseData, setResponseData] = useState({});

  const [loading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const handleButton = () => {
    const createShortenUrlData = {
      originalUrl: originalUrl,
      expireDate: expireDate.endDate,
    };

    setLoading(true);
    setErrorMessage("");

    createShortenUrl(createShortenUrlData)
      .then((response) => {
        setShowModal(true);
        setResponseData(response.data);
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage(error.response.data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChange = (event) => {
    setOriginalUrl(event.target.value);
  };

  return (
    <>
      <div className="container p-4 min-w-[700px] border border-stone-500 border-1 rounded-md bg-gray-500 drop-shadow-lg">
        <div className="flex flex-col items-center gap-3">
          <InputBox
            disabled={false}
            value={originalUrl}
            placeholder={"http(s):// 단축할 URL을 입력해주세요."}
            handleChange={handleChange}
          />
          <CustomDatepicker
            date={expireDate}
            setDate={setExpireDate}
            placeholder={"만료일을 선택해주세요. (YYYY-MM-DD)"}
          />
          {!!errorMessage && (
            <h3 className="text-sm font-semibold text-red-600">
              {errorMessage}
            </h3>
          )}
          <Button
            disabled={loading}
            name={loading ? <Spinner /> : `입력`}
            handleClick={handleButton}
          />
        </div>
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        shortenURL={responseData.shortenUrl}
        expireKey={responseData.expireKey}
      />
    </>
  );
}
