import { useState } from "react";
import CareerInput from "./CareerInput";

export default function CareerForm() {
  const [resumeFiles, setResumeFiles] = useState([]);
  const [coverLetterFiles, setCoverLetterFiles] = useState([]);
  const [resumePreviewUrls, setResumePreviewUrls] = useState([]);
  const [coverLetterPreviewUrls, setCoverLetterPreviewUrls] = useState([]);

  const fileSelectedHandler = (event, setFiles, setPreviewUrls) => {
    const files = Array.from(event.target.files);
    setFiles(files);

    const fileReaders = [];
    const urls = [];
    files.forEach((file) => {
      const fileReader = new FileReader();
      fileReaders.push(fileReader);

      fileReader.onload = () => {
        urls.push(fileReader.result);
        if (urls.length === files.length) {
          setPreviewUrls(urls);
        }
      };

      fileReader.readAsDataURL(file);
    });
  };

  return (
    <div className="flex flex-col gap-3 py-10 rounded-md ">
      <div>
        <h1 className="text-3xl text-gray-600 font-normal">
          Apply for this job
        </h1>
        <p className="text-sm font-thin">
          <span className="text-red-500 px-1 font-medium">*</span>Indicates a
          required field
        </p>
      </div>
      <div className="flex gap-2">
        <CareerInput placeholder="First Name" required />
        <CareerInput placeholder="Last Name" required />
      </div>
      <div className="flex gap-2">
        <CareerInput placeholder="Email" required />
        <CareerInput placeholder="Phone Number" required />
      </div>

      <div className="flex gap-2">
        <div className="flex flex-col items-start">
          <p className="font-semibold text-sm text-gray-600 mb-2">Resume/CV</p>
          <label
            className="flex items-center justify-center w-[20rem] h-[3rem] 
                          rounded-md bg-transparent text-black border border-blue-500 cursor-pointer
                         hover:bg-blue-500 hover:text-white transition-all duration-300 text-center"
          >
            <input
              type="file"
              accept="*"
              multiple
              onChange={(e) =>
                fileSelectedHandler(e, setResumeFiles, setResumePreviewUrls)
              }
              className="hidden"
            />
            Attach Resume
          </label>
          {resumeFiles.length > 0 && (
            <div className="w-full mt-4">
              <ul className="text-gray-800">
                {resumeFiles.map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Cover Letter File Input */}
        <div className="flex flex-col items-start">
          <p className="font-semibold text-sm text-gray-600 mb-2">
            Cover Letter
          </p>

          <label
            className="flex items-center justify-center w-[20rem] h-[3rem] 
                          rounded-md bg-transparent text-black border border-blue-500 cursor-pointer
                         hover:bg-blue-500 hover:text-white transition-all duration-300 text-center"
          >
            <input
              type="file"
              accept="*"
              multiple
              onChange={(e) =>
                fileSelectedHandler(
                  e,
                  setCoverLetterFiles,
                  setCoverLetterPreviewUrls
                )
              }
              className="hidden"
            />
            Attach Cover Letter
          </label>
          {coverLetterFiles.length > 0 && (
            <div className="w-full mt-4">
              <ul className="text-gray-800 ">
                {coverLetterFiles.map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <span className="text-gray-400 text-sm font-light">
        Enter manually Accepted file types: pdf, doc, docx, txt, rtf
      </span>
      <div className="border-b py-10">
        <div className="w-[40rem] border p-2 rounded-md my-2">
          <p className="font-semibold text-sm text-gray-500 mb-2">
            Are you legally authorized to work in the United States?
            <span className="text-red-500 px-1">*</span>
          </p>
          <select className="w-[30rem] appearance-none rounded-md p-2">
            <option>Select...</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="w-[40rem] border p-2 rounded-md my-2">
          <p className="font-semibold text-sm text-gray-500 mb-2">
            Will you now, or in the future, require sponsorship for employment
            visa status (e.g. H-1B visa status)?
            <span className="text-red-500 px-1">*</span>
          </p>
          <select className="w-[30rem] appearance-none rounded-md p-2">
            <option>Select...</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="w-[40rem] border p-2 rounded-md my-2">
          <p className="font-semibold text-sm text-gray-500 mb-2">
            Where are you currently based?
            <span className="text-red-500 px-1">*</span>
          </p>
          <input className="w-[30rem]" />
        </div>
        <div className="w-[40rem] border p-2 rounded-md my-2">
          <p className="font-semibold text-sm text-gray-500 mb-2">
            When can you begin full-time work?
            <span className="text-red-500 px-1">*</span>
          </p>
          <input className="w-[30rem]" />
        </div>
        <div className="w-[40rem] border p-2 rounded-md my-2">
          <p className="font-semibold text-sm text-gray-500 mb-2">
            LinkedIn Profile<span className="text-red-500 px-1">*</span>
          </p>
          <input className="w-[30rem]" />
        </div>
        <div className="w-[40rem] border p-2 rounded-md my-2">
          <p className="font-semibold text-sm text-gray-500 mb-2">Website</p>
          <input className="w-[30rem]" />
        </div>
      </div>
      {/* ========================================================================================== */}
      {/* <div className="py-10 flex flex-col gap-2 border-b">
        <h1 className="text-3xl text-gray-600 font-normal">
          Voluntary Self-Identification
        </h1>
        <div className="flex flex-col gap-5">
          <p>
            For government reporting purposes, we ask candidates to respond to
            the below self-identification survey. Completion of the form is
            entirely voluntary. Whatever your decision, it will not be
            considered in the hiring process or thereafter. Any information that
            you do provide will be recorded and maintained in a confidential
            file.
          </p>
          <p>
            As set forth in Aperia Technologies, Inc’s Equal Employment
            Opportunity policy, we do not discriminate on the basis of any
            protected group status under any applicable law.
          </p>
        </div>
        <div className="w-[40rem] border p-2 rounded-md ">
          <p className="font-semibold text-sm px-2 text-gray-500 mb-2">
            Gender
          </p>
          <select className="w-[30rem] appearance-none rounded-md p-2">
            <option>Select...</option>
            <option>Male</option>
            <option>Female</option>
            <option>Decline to Self-Identify</option>
          </select>
        </div>
        <div className="w-[40rem] border p-2 rounded-md">
          <p className="font-semibold px-2 text-sm text-gray-500 mb-2">
            Ethnicity
          </p>
          <select className="w-[30rem] appearance-none rounded-md p-2">
            <option>Select...</option>
            <option>Hispanic or Latino</option>
            <option>White (Not Hispanic or Latino)</option>
            <option>Black or African American (Not Hispanic or Latino)</option>
            <option>
              Native Hawaiian or Other Pacific Islander (Not Hispanic or Latino)
            </option>
            <option>Asian (Not Hispanic or Latino)</option>
            <option>
              American Indian or Alaska Native (Not Hispanic or Latino)
            </option>
            <option>Two or More Races (Not Hispanic or Latino)</option>
            <option>Decline to Self-Identify</option>
          </select>
        </div>
        <div className="flex flex-col gap-5">
          <p>
            If you believe you belong to any of the categories of protected
            veterans listed below, please indicate by making the appropriate
            selection. As a government contractor subject to the Vietnam Era
            Veterans Readjustment Assistance Act (VEVRAA), we request this
            information in order to measure the effectiveness of the outreach
            and positive recruitment efforts we undertake pursuant to VEVRAA.
            Classification of protected categories is as follows:
          </p>
          <p>
            A "disabled veteran" is one of the following: a veteran of the U.S.
            military, ground, naval or air service who is entitled to
            compensation (or who but for the receipt of military retired pay
            would be entitled to compensation) under laws administered by the
            Secretary of Veterans Affairs; or a person who was discharged or
            released from active duty because of a service-connected disability.
          </p>
          <p>
            A "recently separated veteran" means any veteran during the
            three-year period beginning on the date of such veteran's discharge
            or release from active duty in the U.S. military, ground, naval, or
            air service.
          </p>
          <p>
            An "active duty wartime or campaign badge veteran" means a veteran
            who served on active duty in the U.S. military, ground, naval or air
            service during a war, or in a campaign or expedition for which a
            campaign badge has been authorized under the laws administered by
            the Department of Defense.
          </p>
          <p>
            An "Armed forces service medal veteran" means a veteran who, while
            serving on active duty in the U.S. military, ground, naval or air
            service, participated in a United States military operation for
            which an Armed Forces service medal was awarded pursuant to
            Executive Order 12985.
          </p>
          <div className="w-[40rem] border p-2 rounded-md my-2">
            <p className="font-semibold text-sm px-2 text-gray-500 mb-2">
              Veteran Status
            </p>
            <select className="w-[30rem] appearance-none rounded-md p-2">
              <option>Select...</option>
              <option>I am not a protected veteran</option>
              <option>
                I Identify as one or more of the classifications of a protected
                veteran
              </option>
              <option>I do not wish to answer</option>
            </select>
          </div>
        </div>
      </div> */}

      <button
        type="submit"
        className="bg-blue-500 self-start text-white px-40 py-3 rounded-sm hover:bg-blue-400 duration-500 mt-5"
      >
        Submit
      </button>
    </div>
  );
}
