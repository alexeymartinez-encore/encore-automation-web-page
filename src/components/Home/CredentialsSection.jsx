import asi from "../../assets/credentials/fanuc2.png";
import iso from "../../assets/credentials/iso.png";
import iso14 from "../../assets/credentials/iso14001.png";
export default function CredentialsSection() {
  return (
    <div
      className="flex flex-col items-center justify-around relative mx-10 my-20 2xl:mx-40"
      id="certifications"
    >
      <div className="flex gap-5 md:gap-40 justify-evenly px-0 ">
        <div>
          <img
            src={asi}
            className=" border-r-0 h-[5rem] border-blue-500 border-opacity-50 mr-0
                        md:h-[15rem]"
          />
        </div>
        <div>
          <img src={iso} className="h-[5rem]  md:h-[15rem]" />
        </div>
        <div>
          <img src={iso14} className="h-[5rem]  md:h-[15rem]" />
        </div>
      </div>
      <div className="mt-5 md:mt-20 text-center ">
        <h1 className="text-4xl text-blue-600">Our Certifications</h1>
        <p className=" font-thin my-5 text-xl 2xl:text-3xl">
          We are an Authorized Fanuc Integrator, and with our Code of Conduct
          and our Environmental Policy, we have committed our statement on
          sustainability and social responsibility within the company.
        </p>
      </div>
    </div>
  );
}
