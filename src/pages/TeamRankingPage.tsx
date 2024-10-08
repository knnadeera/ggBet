import React from "react";
import RightWidgets from "../components/RightWidgets";
import { useParams } from "react-router-dom";
import TeamRankingList from "../components/teamRanking/centerWidgets/TeamRankingList/TeamRankingList";
import "./commonPage.scss";
import LeftWidgets from "../components/LeftWidgets";
// import Filters from "../components/teamRanking/leftWidgets/Filters";
// import BetCard from "../components/betCard/BetCard";
// import moment from "moment";
// import { months } from "../utils/enumsNModals/filers";
// import RankingFilter from "../components/teamRanking/centerWidgets/RankingFilter";
// import partnerImg from "../assets/images/TjraHuDQ-yp57zA3xG7JFZ.webp";
// import { rankingFilterBtnsData } from "../utils/enumsNModals/teamRanking";
// import { Image } from "react-bootstrap";

const TeamRankingPage = () => {
  const { year, month, day } = useParams();

  // const date = new Date();
  // const thisYear = moment(date).format("YYYY");
  // const thisMonth = moment(date).format("MMMM");
  // const thisDay = moment(date).format("D");

  // const [selectedYear, setSelectedYear] = useState(year ?? "");
  // const [selectedMonth, setSelectedMonth] = useState(month ?? "");
  // const [selectedDay, setSelectedDay] = useState(day ?? "");

  // const [selectedRanking, setSelectedRanking] = useState("World ranking");

  // const navigate = useNavigate();

  // const selectedYearHandler = (val: string) => {
  //   setSelectedYear(val);
  //   if (val === thisYear) {
  //     setSelectedMonth(thisMonth);
  //     setSelectedDay(thisDay);
  //     const newPath = `/ranking/teams/${val}/${thisMonth}/${thisDay}`;
  //     navigate(newPath);
  //   } else {
  //     setSelectedMonth("December");
  //     setSelectedDay(
  //       months.find((val) => val.name === "December")?.dayCount.toString() ??
  //         "31"
  //     );
  //     const newPath = `/ranking/teams/${val}/December/31`;
  //     navigate(newPath);
  //   }
  // };

  // const selectedMonthHandler = (val: string) => {
  //   setSelectedMonth(val);
  //   if (val === thisMonth && selectedYear === thisYear) {
  //     setSelectedDay(thisDay);
  //     const newPath = `/ranking/teams/${selectedYear}/${val}/${thisDay}`;
  //     navigate(newPath);
  //   } else {
  //     const day =
  //       months.find((mon) => mon.name === val)?.dayCount.toString() ?? "31";
  //     setSelectedDay(day);
  //     const newPath = `/ranking/teams/${selectedYear}/${val}/${day}`;
  //     navigate(newPath);
  //   }
  // };

  // const selectedDayHandler = (val: string) => {
  //   setSelectedDay(val);
  //   const newPath = `/ranking/teams/${selectedYear}/${selectedMonth}/${val}`;
  //   navigate(newPath);
  // };

  // const selectedFilterHandler = (val: string) => {
  //   setSelectedRanking(val);
  // };

  return (
    <>
      <div className="pageContent">
        <div className="pageLeft">
          <LeftWidgets>
            {/* <BetCard /> */}
            {/* <Filters
              year={selectedYear}
              month={selectedMonth}
              day={selectedDay}
              setYear={(val) => selectedYearHandler(val)}
              setMonth={(val) => selectedMonthHandler(val)}
              setDay={(val) => selectedDayHandler(val)}
            /> */}
            <div>Recent Activity</div>
          </LeftWidgets>
        </div>
        <div className="pageCenter">
          {/* <RankingFilter
            data={rankingFilterBtnsData}
            selected={selectedRanking}
            onClick={(val) => {
              selectedFilterHandler(val);
            }}
          /> */}
          {/* <Image src={partnerImg} alt="partner" className="w-100 mt-4" /> */}
          <TeamRankingList date={`${year}-${month}-${day}`} />
        </div>
        <div className="pageRight">
          <RightWidgets>
            <div>Recent Activity</div>
          </RightWidgets>
        </div>
      </div>
    </>
  );
};

export default TeamRankingPage;
