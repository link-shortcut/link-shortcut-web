import dayjs from "dayjs";
import Datepicker from "react-tailwindcss-datepicker";

export default function CustomDatepicker({ date, setDate, placeholder }) {
  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const getPeriod = ({ dayCount, timeUnit }) => {
    const now = dayjs();
    const nextDate = now.add(dayCount, timeUnit);

    return {
      start: nextDate.format("YYYY-MM-DD"),
      end: nextDate.format("YYYY-MM-DD"),
    };
  };

  const disabledDates = () => {
    const yesterday = dayjs().subtract(1, "d").format("YYYY-MM-DD");
    const firstDate = dayjs("0-1-1");

    return [{ startDate: firstDate, endDate: yesterday }];
  };

  return (
    <Datepicker
      i18n={"ko"}
      useRange={false}
      asSingle={true}
      showShortcuts={true}
      value={date}
      disabledDates={disabledDates()}
      onChange={handleDateChange}
      placeholder={placeholder}
      configs={{
        shortcuts: {
          today: "오늘",
          next7Days: {
            text: "일주일 뒤",
            period: getPeriod({ dayCount: 7, timeUnit: `d` }),
          },
          next1Month: {
            text: "한달 뒤",
            period: getPeriod({ dayCount: 1, timeUnit: `M` }),
          },
          next1Year: {
            text: "1년 뒤",
            period: getPeriod({ dayCount: 1, timeUnit: `y` }),
          },
        },
      }}
    />
  );
}
