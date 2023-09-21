import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getShortenUrlStat } from "../api/api";
import { ReactComponent as LinkImg } from "../assets/link_icon.svg";

export default function GetUrlInfo() {
  const navigate = useNavigate();
  const [isFetching, setIsFetching] = useState(false);
  const { shortenPath } = useParams();
  const [urlInfo, setUrlInfo] = useState({
    originalUrl: "",
    expiredAt: "",
    createdAt: "",
    dailyAccessCount: 0,
    totalAcessCount: 0,
  });

  useEffect(() => {
    setIsFetching(true);
    getShortenUrlStat(shortenPath)
      .then((response) => {
        setIsFetching(false);
        setUrlInfo(response.data);
      })
      .catch((error) => {
        setIsFetching(false);
        console.error(error);
        alert(
          `해당 URL의 정보를 가져올 수 없습니다. 메인 화면으로 이동합니다.`
        );
        navigate("/", { replace: true });
      });
  }, []);

  const extractDate = (datetime) => datetime.slice(0, 10);

  return (
    <div className="flex m-4">
      <div className="md:container md:mx-auto p-8 rounded shadow-lg dark:bg-gray-800 dark:shadow-lg">
        <div className="space-y-2">
          <div className="flex space-x-1">
            <LinkImg className="dark:fill-white" />
            <h3 className="text-2xl font-semibold dark:text-white">
              단축 URL 정보
            </h3>
          </div>
          <div className="">
            {!isFetching && (
              <ul className="space-y-1 text-lg text-gray-600 dark:text-white/80">
                {/* TODO: 연결 URL 미리보기 기능 추가 */}
                <li>
                  연결 URL은{" "}
                  <a
                    href={urlInfo.originalUrl}
                    className="p-0.5 bg-black/30 rounded font-bold hover:underline hover:underline-offset-2 hover:text-white/60"
                  >
                    {urlInfo.originalUrl}
                  </a>{" "}
                  입니다.
                </li>
                <li>
                  URL 만료일은{" "}
                  <span className="underline decoration decoration-red-600 underline-offset-2 font-bold">
                    {extractDate(urlInfo.expiredAt)} 0시 0분
                  </span>{" "}
                  입니다.
                </li>
                <li>
                  URL 생성일은{" "}
                  <span className="italic font-bold">
                    {extractDate(urlInfo.createdAt)}
                  </span>{" "}
                  입니다.
                </li>
                <li>
                  오늘 접속한 인원은{" "}
                  <span className="italic font-bold">
                    {urlInfo.dailyAccessCount}명
                  </span>{" "}
                  이고, URL 생성 이후 지금까지 접속한 인원은{" "}
                  <span className="italic font-bold">
                    {urlInfo.totalAccessCount}명
                  </span>{" "}
                  입니다.
                </li>
                <div className="h-2" />
              </ul>
            )}
            {isFetching && (
              <div role="status" className="grid place-content-center">
                <svg
                  aria-hidden="true"
                  className="w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
