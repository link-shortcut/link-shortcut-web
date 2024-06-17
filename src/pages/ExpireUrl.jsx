import Card from "../components/Card";
import RightArrow from "../assets/right_arrow.png";
import ExpireUrlForm from "../components/ExpireUrlForm";

export default function ExpireUrl() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="mt-10 text-3xl font-normal leading-normal text-gray-900 dark:text-white">
        유효한 단축 URL을 만료일이 되기 전에{" "}
        <span className="text-3xl font-bold">즉시 만료</span>할 수 있습니다
      </h2>
      <div className="flex py-3 pb-3 w-screen place-content-center">
        <div className="w-96">
          <ExpireUrlForm />
        </div>
      </div>
      <div className="my-4 text-lg font-bold">
        <p className="font-light dark:text-white">
          단축 URL 만료는{" "}
          <a
            href="/"
            className="font-normal underline underline-offset-4 decoration-white/30 hover:decoration-white"
          >
            단축 URL 생성
          </a>{" "}
          후 이용 가능합니다!
        </p>
      </div>
      <UsingGuide />
    </div>
  );
}

const UsingGuide = () => (
  <>
    <div className="flex h-36 gap-3 items-center">
      <Card
        title={"만료할 URL와 만료키를 입력하세요"}
        content={
          <>
            <div>
              유효한 단축 URL의 뒷부분과 단축 URL 생성할때 발급된 만료키를
              입력해주세요.
            </div>
          </>
        }
      />
      <img src={RightArrow} className="w-7 h-7" alt="오른쪽 화살표" />
      <Card
        title={"입력 버튼을 누르세요"}
        content={
          <div>단축 URL이 즉시 만료되며, 이후 접속이 불가능해집니다.</div>
        }
      />
    </div>
  </>
);
