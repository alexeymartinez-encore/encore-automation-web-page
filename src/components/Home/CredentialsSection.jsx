import asi from "../../assets/credentials/fanuc2.png";
import iso from "../../assets/credentials/iso.png";
import iso14 from "../../assets/credentials/iso14001.png";
export default function CredentialsSection() {
  return (
    <div
      className="flex items-center justify-around relative py-0 mx-20 my-20 "
      //   style={{ marginTop: "45rem" }}
      id="certifications"
    >
      <div
        className="flex md:flex-row justify-evenly px-0"
        style={{ width: "35rem" }}
      >
        <div>
          <img
            src={asi}
            style={{ height: "10rem" }}
            className=" border-r-0 border-blue-500 border-opacity-50 mr-0"
          />
        </div>
        <div>
          <img src={iso} style={{ height: "10rem" }} />
        </div>
        <div>
          <img src={iso14} style={{ height: "10rem" }} />
        </div>
      </div>
      <div className="" style={{ width: "25rem" }}>
        <h1 className="text-4xl text-blue-600">Our Certifications</h1>
        <p className=" font-thin my-5 text-xl">
          We are an Authorized Fanuc Integrator, and with our Code of Conduct
          and our Environmental Policy, we have committed our statement on
          sustainability and social responsibility within the company.
        </p>
      </div>
    </div>
  );
}
