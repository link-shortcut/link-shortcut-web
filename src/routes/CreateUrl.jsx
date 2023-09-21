import CreateUrlForm from "../components/CreateUrlForm";

export default function CreateUrl() {
  return (
    <>
      <h2 className="mt-10 mb-5 text-3xl font-semibold leading-normal text-gray-900 dark:text-white">
        Link Shortcut는 단축 URL를 만들어주는 서비스입니다.
      </h2>
      <ul className="space-y-1 text-lg dark:text-white">
        <li>
          <span className="underline decoration-wavy decoration-red-600/90">
            입력한 만료일 기준 다음날 0시 0분까지 사용 가능
          </span>
          한 단축 URL을 생성합니다.
        </li>
        <li>
          단축 URL 생성시 자동으로 생성된 만료키를 이용해 단축 URL을 만료일이
          되기 전에 즉시 만료시킬 수 있습니다.
        </li>
        <li className="italic font-light">
          유효한 단축 URL 뒤에 "/info"를 붙이면 해당 URL 정보를 확인할 수
          있습니다.
        </li>
      </ul>
      <div className="flex py-3 pb-4 w-screen place-content-center">
        <div className="w-1/2">
          <CreateUrlForm />
        </div>
      </div>
      <p className="pb-5 font-light dark:text-white">직접 한번 사용해보세요!</p>
      <div className="pb-7 font-bold">
        <ol className="space-y-2 text-lg dark:text-white">
          <li>
            1.{" "}
            <span className="underline decoration-dashed underline-offset-4 decoration-green-400/70">
              단축할 URL을 입력
            </span>
            하세요
          </li>
          <li>
            2. 생성될 URL의{" "}
            <span className="underline decoration-dashed underline-offset-4 decoration-green-400/70">
              만료일을 선택
            </span>
            하세요
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
