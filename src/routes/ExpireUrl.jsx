import ExpireUrlForm from "../components/ExpireUrlForm";

export default function ExpireUrl() {
  return (
    <>
      <h2 className="mt-10 text-3xl font-semibold leading-normal text-gray-900 dark:text-white">
        단축 URL을 만료일이 되기 전에{" "}
        <span className="text-3xl underline decoration-wavy decoration-red-600/90">
          즉시 만료
        </span>
        할 수 있습니다.
      </h2>
      <div className="flex py-3 pb-5 w-screen place-content-center">
        <div className="w-96">
          <ExpireUrlForm />
        </div>
      </div>
      <div className="pb-7 font-bold">
        <p className="pb-6 font-light dark:text-white">
          <a
            href="/"
            className="font-normal underline underline-offset-4 decoration-white/30 hover:decoration-white"
          >
            단축 URL 생성
          </a>{" "}
          후 이용 가능합니다!
        </p>
        <ol className="space-y-2 text-lg dark:text-white">
          <li>
            1.{" "}
            <span className="underline decoration-dashed underline-offset-4 decoration-green-400/70">
              만료할 단축 URL을 입력
            </span>
            하세요
          </li>
          <li>
            2.{" "}
            <span className="underline decoration-dashed underline-offset-4 decoration-green-400/70">
              단축 URL 생성시 발급된 만료키를 입력
            </span>
            해주세요
          </li>
          <li>
            3.{" "}
            <span className="underline decoration-dashed underline-offset-4 decoration-green-400/70">
              입력 버튼을 누르세요
            </span>
          </li>
        </ol>
      </div>
    </>
  );
}
