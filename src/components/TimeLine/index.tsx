
const renderSVG = () => (
  <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
    <svg
      aria-hidden="true"
      className="w-3 h-3 text-blue-600 dark:text-blue-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
        clipRule="evenodd"
      ></path>
    </svg>
  </span>
);

const renderFirstStage = (cores: any) => {
  if (!cores) {
    return null;
  }
  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700">
      {cores.map((core: any, idx: number) => {
        return (
          <li key={idx} className="mb-10 ml-6">
            {renderSVG()}
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Flight - {core.flight}
              <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                Status: {core?.core?.status}
              </span>
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Reuse Count - {core?.core?.reuse_count}
            </time>
          </li>
        );
      })}
    </ol>
  );
};

const renderSecondStage = (cores: any) => {
  if (!cores) {
    return null;
  }
  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700">
      {cores.map((core: any, idx: number) => {
        return (
          <li key={idx} className="mb-10 ml-6">
            {renderSVG()}
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Payload
              <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
               Type: {core?.payload_type}
              </span>
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Payload Mass - {core?.payload_mass_kg} kg
            </time>
          </li>
        );
      })}
    </ol>
  );
};

interface ITimeLine {
  timeLineData: any
}

const TimeLine = ({timeLineData}: ITimeLine) => {
  if (timeLineData && Object.keys(timeLineData).length > 0) {
    return (
      <div className="flex flex-col p-4 max-w-xl">
        <h3 className="text-2xl my-4">
          {timeLineData?.rocket_name} - Cores
        </h3>
        {renderFirstStage(timeLineData?.first_stage?.cores)}
        <h3 className="text-2xl my-4">
          {timeLineData?.rocket_name} - Payloads
        </h3>
        {renderSecondStage(timeLineData?.second_stage?.payloads)}
      </div>
    );
  } else {
    return null;
  }
};

export default TimeLine;
