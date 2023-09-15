import { useState } from "react";
import Button from "./Button";
import InputBox from "./InputBox";
import { createShortenUrl } from "../api/api";
import CustomDatepicker from "./CustomDatepicker";
import Modal from "./Modal";

export default function CreateUrlForm() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [expireDate, setExpireDate] = useState({
    startDate: null,
    endDate: null,
  });
  const [hasURLError, setHasURLError] = useState(false);
  const [hasExpireDateError, setHasExpireDateError] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [responseData, setResponseData] = useState({});

  const handleButton = () => {
    const createShortenUrlData = {
      originalUrl: originalUrl,
      expireDate: expireDate.endDate,
    };

    setHasURLError(false);
    setHasExpireDateError(false);

    createShortenUrl(createShortenUrlData)
      .then((response) => {
        setShowModal(true);
        setResponseData(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
        handleValidationError(error);
      });
  };

  const handleValidationError = (error) => {
    const errorResponseData = error.response.data;
    if (errorResponseData.code === "400-01") {
      setHasURLError(true);
    } else if (errorResponseData.code === "400-02") {
      setHasExpireDateError(true);
    }
  };

  const handleChange = (event) => {
    setOriginalUrl(event.target.value);
  };

  const showURLValidationError = () => {
    if (hasURLError) {
      return (
        <p className="text-sm text-red-600">
          단축할 URL은 반드시 http나 https로 시작해야하며 유효한 형식이어야
          합니다.
        </p>
      );
    }
  };

  const showExpireDateValidationError = () => {
    if (hasExpireDateError) {
      return (
        <h3 className="text-sm font-semibold text-red-600">
          만료일은 오늘보다 이전일 수 없으며 YYYY-MM-DD의 형식이어야 합니다.
        </h3>
      );
    }
  };

  return (
    <>
      <div className="flex flex-col border border-stone-500 border-1 rounded-lg bg-gray-500 m-4 drop-shadow-lg">
        <div className="flex flex-col space-y-2 mx-4 mt-4">
          <InputBox
            disabled={false}
            value={originalUrl}
            placeholder={"http(s):// 단축할 URL을 입력해주세요."}
            handleChange={handleChange}
          />
          {showURLValidationError()}
          <CustomDatepicker
            date={expireDate}
            setDate={setExpireDate}
            placeholder={"만료일을 선택해주세요. (YYYY-MM-DD)"}
          />
          {showExpireDateValidationError()}
        </div>
        <div className="m-3">
          <Button disabled={false} name={`입력`} handleClick={handleButton} />
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
