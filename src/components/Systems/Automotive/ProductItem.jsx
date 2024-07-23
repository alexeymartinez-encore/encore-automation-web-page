// import BootstrapSlider from "./BootstrapSlider";
// import SimpleSlider from "./SimpleSlider";

import ImageCarousel from "./ImageCarousel";

export default function ProductItem({ item }) {
  return (
    <div className="px-40 py-5 flex flex-col ">
      <div className="px-0">
        <h1 className="text-4xl py-5 text-blue-900">{item.title}</h1>
        <p className="text-xl font-thin py-5">{item.text}</p>
        <ImageCarousel imgs={item.imgs} />
        <p className="text-xl font-thin py-5">{item.subText}</p>
      </div>
      <div className="py-10">
        <h1 className="text-4xl pb-20 text-blue-900">{item.benefitsTitle}</h1>
        <div className="grid grid-cols-3 gap-10  ">
          {item.benefitsCards.map((benefit) => (
            <div
              className="p-5 bg-white shadow-md rounded-md"
              key={benefit.benefitId}
            >
              <h1 className="text-xl text-blue-500 pb-3 ">
                {benefit.benefitTitle}
              </h1>
              <div className="font-thin">
                <p>{benefit.benefitDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
