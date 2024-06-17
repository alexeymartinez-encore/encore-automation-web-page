import BenefitCard from "./BenefitCard";
import {
  faClock,
  faDollarSign,
  faGlasses,
  faGraduationCap,
  faHandshake,
  faHeart,
  faHeartCirclePlus,
  faMoneyCheckDollar,
  faTooth,
} from "@fortawesome/free-solid-svg-icons";

export default function CareerBenefits() {
  return (
    <div className="flex flex-col justify-center items-center m-20">
      <h1 className="text-4xl">Benefits Our Employees Love</h1>
      <p className="text-center py-1 px-40 font-thin">
        At Encore Automation, we believe that our employees are our greatest
        asset. We are committed to providing a comprehensive benefits package
        that supports the well-being and professional growth of our team
        members. Our benefits include:
      </p>
      <div className="flex gap-5 my-5">
        <div className="flex flex-col gap-5 ">
          <BenefitCard icon={faHeart} text="Health" />
          <BenefitCard icon={faGlasses} text="Vision" />
          <BenefitCard icon={faTooth} text="Dental" />
        </div>
        <div className="flex flex-col gap-5 ">
          <BenefitCard icon={faDollarSign} text="Competitive Base Salary" />
          <BenefitCard icon={faClock} text="Paid Time Off (PTO)" />
          <BenefitCard icon={faMoneyCheckDollar} text="Profit Sharing" />
        </div>{" "}
        <div className="flex flex-col gap-5 ">
          <BenefitCard icon={faHeartCirclePlus} text="Good Work life Balance" />
          <BenefitCard icon={faHandshake} text="401K Match" />
          <BenefitCard icon={faGraduationCap} text="Tuition Reimbursement" />
        </div>
        {/* <p>Competitive Base Salary</p>
        <p>
          Full Benefits: Health, Vision, and Dental Insurance, short term and
          long term disability insurance.
        </p>
        <p>401k Match</p>
        <p>Good Work life Balance</p>
        <p>Paid Time Off (PTO)</p>
        <p>Profit Sharing</p> */}
      </div>
    </div>
  );
}
