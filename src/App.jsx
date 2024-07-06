import Navbar from "./components/Navbar";
import {
  ColouredRevenueCard,
  SimpleRevenueCard,
} from "./components/RevenueCard";
import Sidebar from "./components/Sidebar";
import Transaction from "./components/Transaction";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <div className="flex">
      <RecoilRoot>
        <Sidebar />
        <div className="flex-1 min-w-0 lg:ml-[210px] sm:overflow-hidden">
          <Navbar />
          <div className="px-5 sm:px-10 pt-7 mt-16">
            <div className="flex justify-between items-center mb-7">
              <p className="font-medium text-2xl">Overview</p>
              <div className="flex border px-3 py-1.5 gap-3 bg-white">
                <button className="text-[#4D4D4D]">This Month</button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
            <div className="flex gap-5 flex-wrap">
              <ColouredRevenueCard
                title={"Next Payout"}
                amount={"2,312.23"}
                orderCount={"23"}
                date={"Today, 4:00PM"}
              />
              <SimpleRevenueCard
                title={"Amount Pending"}
                amount={"92,312.20"}
                orderCount={"13"}
              />
              <SimpleRevenueCard
                title={"Amount Processed"}
                amount={"23,92,312.19"}
              />
            </div>
            <Transaction />
          </div>
          <footer className="flex justify-center items-center h-24">
            Made by
            <a
              href="https://github.com/shreyashkatkar07/Dukaan-twitter-challenge_Practice"
              target="_blank"
            >
              <p className="mx-2 font-bold underline text-[#4D4D4D]">
                Shreyash Katkar
              </p>
            </a>
          </footer>
        </div>
      </RecoilRoot>
    </div>
  );
}
