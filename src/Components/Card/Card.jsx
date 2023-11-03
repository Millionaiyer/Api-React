import logo from "/src/assets/N.png";
import "./card.css";
import Button from "../Button/Button";

const Card = () => {
  return (
    <>
      <section className="flex">
        <div className="flex gap-2">
          <img src={logo} className="logo" alt="logo for job applicant" />
          <div className="flex flex-col gap-[23px] bg-red">
            <div className="jd">
              <span>UX UI Designer</span>
              <span>Great Vibes - Information Technology</span>
              <span>Chennai, Tamilnadu, India (In-office)</span>
            </div>
            <div className="sal-exp">
              <span>Part-Time (9.00 am - 5.00 pm IST)</span>
              <span>Experience (1 - 2 years)</span>
              <span>INR (₹) 30,000 - 50,000 / Month</span>
              <span>51-200 employees</span>
            </div>
            <div className="btn">
              <Button text="Apply Now" type="quick-apply" />
              <Button text="Apply Now" type="external-apply" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Card;
