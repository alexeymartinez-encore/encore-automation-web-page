import timelineHorizontal from "../../assets/about/horizontal.png";
import timelineVertical from "../../assets/about/vertical.png";
export default function AboutHistory() {
  return (
    <div className="py-10">
      <h1 className="text-center text-5xl text-blue-500">Our History</h1>
      <img className="px-20 py-20 hidden md:flex " src={timelineHorizontal} />
      <img className="px-10 py-20 flex md:hidden " src={timelineVertical} />
    </div>
  );
}
