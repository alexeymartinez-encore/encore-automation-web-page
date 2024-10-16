export default function PositionDescription({ item }) {
  return (
    <div>
      <h1 className="text-4xl text-blue-500 py-5">
        {item.position} - {item.location}
      </h1>
      <p className="py-2">
        As a turn-key robotic automation system supplier Encore integrates
        robotic systems in the Automotive, Aerospace and general industry
        markets. A few examples of products include robotic end effectors,
        auxiliary axis robot movers, material handling equipment etc. The
        position is for a mechanical engineer that will work with business
        development to identify customer needs, conceive and propose creative
        and cost effective solutions, and engineer and direct the design of the
        solution to bring it to reality. The job will include product testing
        and working with field operations to support installation and start up
        when necessary. The position will be a direct report to the Product
        Development Manager.
      </p>
      <div className="py-5">
        <p className="text-xl font-semibold">Your Role:</p>
        <p className="py-2">{item.role}</p>
      </div>
      <div className="py-5">
        <p className="text-xl font-semibold">Basic Qualifications:</p>
        <div className="py-2">
          {item.qualifications.map((qualification) => (
            <li key={qualification}>{qualification}</li>
          ))}
        </div>
      </div>
      <div className="py-5">
        <p className="text-xl font-semibold">Preferred Qualifications:</p>
        <div className="py-2">
          {item.preferred_qualifications.map((preferred_qualification) => (
            <li key={preferred_qualification}>{preferred_qualification}</li>
          ))}
        </div>
      </div>
      <div className="py-5 border-b">
        <p className="text-xl font-semibold">Benefits Include:</p>
        <div className="py-2">
          {item.benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </div>
      </div>
    </div>
  );
}
