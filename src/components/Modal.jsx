import Backdrop from "./Backdrop";
import InputBox from "./InputBox";
import CopyButton from "./CopyButton";

export default function Modal({
  showModal,
  setShowModal,
  shortenURL,
  expireKey,
}) {
  const bodyRow = ({ text }) => (
    <div className="flex space-x-3">
      <InputBox disabled={true} text={text} />
      <CopyButton text={text} />
    </div>
  );

  const cancelButton = () => (
    <button
      className="text-red-500 min-w-fit background-transparent font-bold uppercase px-6 py-1 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      type="button"
      onClick={() => setShowModal(false)}
    >
      닫기
    </button>
  );

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none drop-shadow-lg focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none dark:bg-black">
                {/*header*/}
                <div className="flex items-start justify-center p-5 border-b border-solid border-slate-600 rounded-t">
                  <h3 className="text-2xl font-semibold dark:text-white">
                    단축 URL / 만료키
                  </h3>
                </div>
                {/*body*/}
                <div className="relative w-96 p-6 space-y-5 flex-auto">
                  {bodyRow({ text: shortenURL })}
                  {bodyRow({ text: expireKey })}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-start p-5 border-t border-solid border-slate-600 rounded-b">
                  {cancelButton()}
                </div>
              </div>
            </div>
          </div>
          <Backdrop />
        </>
      ) : null}
    </>
  );
}
