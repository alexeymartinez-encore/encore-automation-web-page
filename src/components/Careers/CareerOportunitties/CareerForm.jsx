import { useState } from "react";
import CareerInput from "./CareerInput";

export default function CareerForm() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);

  const fileSelectedHandler = (event) => {
    // Convert FileList to array
    const files = Array.from(event.target.files);
    setSelectedFiles(files);

    // Preview the images
    const fileReaders = [];
    const urls = [];
    files.forEach((file, index) => {
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
    <form className="flex flex-col gap-3 items-center  p-10 bg-gray-100 rounded-md">
      <div className="flex gap-3">
        <CareerInput placeholder="First Name*" required />
        <CareerInput placeholder="Last Name*" required />
      </div>
      <div className="flex gap-3 items-center">
        <CareerInput placeholder="Email*" required />
        <select
          name="options"
          id="options"
          className=" h-[3rem] w-[15rem] shadow-sm bg-white text-gray-400 rounded-sm text-center"
        >
          <option value="position">Position</option>
          <option value="me">Mechanical Engineer</option>
          <option value="ece">Electrical Controls Engineer</option>
          <option value="cse"> Controls/Software Engineer</option>
          <option value="pe">Process Engineer</option>
          <option value="prope">Proposals Engineer</option>
          <option value="se">Service Engineer</option>
          <option value="ice">Installation & Commissioning Engineer</option>
          <option value="pm">Project Manager</option>
          <option value="ps">Purchasing Specialist</option>
          <option value="pde"> Product Development Engineer</option>
          <option value="prode">Process Development Engineer</option>
        </select>
      </div>
      <div className="flex gap-3">
        <CareerInput placeholder="Phone Number*" required />
        <CareerInput placeholder="Address*" type="address" required />
      </div>

      <div className="flex gap-3">
        <CareerInput placeholder="City*" required />
        <CareerInput placeholder="ZIP*" required />
      </div>

      <div className="flex gap-3 items-center">
        <CareerInput placeholder="State*" required />
        <input
          type="file"
          accept="*"
          multiple
          onChange={fileSelectedHandler}
          className=" w-[15rem] h-[3rem] py-2 rounded-sm text-center my-1 text-gray-400  "
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-20 py-3 rounded-sm hover:bg-blue-400 duration-500"
      >
        Submit
      </button>
    </form>
  );
}
