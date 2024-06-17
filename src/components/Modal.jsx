import Backdrop from "./Backdrop";
import InputBox from "./InputBox";
import CopyButton from "./CopyButton";
import CloseIcon from "../assets/close_icon.svg";

export default function Modal({
  showModal,
  setShowModal,
  shortenURL,
  expireKey,
}) {
  const ModalHeader = () => (
    <div className="flex justify-between mb-4">
      <div className="flex items-start justify-center">
        <h3 className="text-2xl font-medium dark:text-white">
          단축 URL / 만료키
        </h3>
      </div>
      <div className="w-auto">
        <button className="w-9 h-9" onClick={() => setShowModal(false)}>
          <img src={CloseIcon} alt="창닫기" />
        </button>
      </div>
    </div>
  );

  const bodyRow = ({ text }) => (
    <div className="flex space-x-3">
      <InputBox disabled={true} text={text} />
      <CopyButton text={text} />
    </div>
  );

  return (
    <>
      {showModal && (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="flex container w-auto mx-auto max-w-3xl">
              <div className="p-5 border-0 rounded-md relative flex flex-col w-full bg-white outline-none focus:outline-none dark:bg-slate-600">
                <ModalHeader />
                <div className="relative w-80 space-y-5 flex-auto">
                  {bodyRow({ text: shortenURL })}
                  {bodyRow({ text: expireKey })}
                </div>
              </div>
            </div>
          </div>
          <Backdrop />
        </>
      )}
    </>
  );
}
