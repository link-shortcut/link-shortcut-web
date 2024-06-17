import CreateUrlForm from "../components/CreateUrlForm";
import RightArrow from "../assets/right_arrow.png";
import Card from "../components/Card";

export default function CreateUrl() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="mt-10 mb-3 text-3xl font-normal leading-normal text-gray-900 dark:text-white">
        <span className="font-bold">Link Shortcut</span>는 단축 URL를 만들어주는
        서비스입니다
      </h2>
      <div className="flex pt-8 pb-7 w-1/2 place-content-center">
        <CreateUrlForm />
      </div>
      <UsingGuide />
      <ul className="mt-7 text-lg dark:text-white">
        <li className="italic font-light">
          유효한 단축 URL 뒤에 "/info"를 붙이면 해당 URL 정보들을 확인할 수
          있습니다.
        </li>
      </ul>
    </div>
  );
}

const UsingGuide = () => (
  <>
    <p className="pb-1 text-lg font-light dark:text-white">
      직접 한번 사용해보세요!
    </p>
    <p className="pb-5 text-lg font-light dark:text-white">
      3단계로 간편하게 단축 URL을 생성할 수 있습니다!
    </p>
    <div className="flex h-48 gap-3 items-center">
      <Card
        title={"단축할 URL을 입력하세요"}
        content={"긴 URL을 입력 필드에 복사하여 붙여넣기합니다."}
      />
      <img src={RightArrow} className="w-7 h-7" alt="오른쪽 화살표" />
      <Card
        title={"만료일을 선택하세요"}
        content={
          <>
            <div>날짜를 선택하거나, 형식에 맞춰 입력해주세요.</div>
            <div>
              <span className="font-bold dark:text-slate-300">
                선택한 만료일의 다음날 0시 0분까지 유효
              </span>
              한 단축 URL이 생성됩니다.
            </div>
          </>
        }
      />
      <img src={RightArrow} className="w-7 h-7" alt="오른쪽 화살표" />
      <Card
        title={"입력 버튼을 누르세요"}
        content={
          <>
            <div>
              바로 접속 가능한{" "}
              <span className="font-bold dark:text-slate-300">단축 URL</span>과
              <span className="font-bold dark:text-slate-300"> 만료키</span>가
              생성됩니다.
            </div>
            <div>
              만료키를 이용해 유효한 단축 URL을 즉시 만료시킬 수 있습니다.
            </div>
          </>
        }
      />
    </div>
  </>
);
