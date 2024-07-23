import imgOne from "../../assets/automotive/5in1.jpeg";
import imgTwo from "../../assets/automotive/auto_industry.png";
import imgThree from "../../assets/automotive/bloOff.jpeg";
import imgFour from "../../assets/automotive/featherDuster.jpg";
import imgFive from "../../assets/automotive/7RollSystem.png";

import imgSix from "../../assets/automotive/swordbrush.png";

import imgEleven from "../../assets/automotive/SHSander.jpg";

import imgSixteen from "../../assets/automotive/waterBlasting.png";

import imgTwentyOne from "../../assets/automotive/liquidPainting.jpg";

import imgTwentySix from "../../assets/automotive/powderPainting.jpeg";
import imgThirtyOne from "../../assets/automotive/skiving.png";
import imgThirtySix from "../../assets/automotive/tesaTapeCobot.jpeg";

export const automotive_systems = [
  {
    id: "feather-duster-and-blow-offs",
    title: "Feather Duster & Blow Offs",
    text: "Encore offers a wide variety of custom blow off systems, engineered and designed to meet the diverse needs of various vehicle and product sizes. These systems utilize air, often electrostatically charged, to remove dirt and foreign particles from surfaces prior to painting. Available options for blow off systems include stationary (fixed) or machine/robotic configurations, various sizes and complexities in machine setups, high/low volume and high/low velocity air options, and compressed or fan-driven air systems. They also feature PC-based or PLC-based visualization systems, PLC-based with PC or Panel view Graphical User Interfaces, clean wall or in-booth design, and vacuum or booth collection of dirt. Key features of Encore’s standard product solutions include sealed-for-life bearings, multi-axis servo motors with intelligent drives, integrated resolvers for accurate position feedback, and monitoring of the de-static bar. Additionally, they offer PLC-based systems with PC or Panel view Graphical User Interfaces, adjustable roller rotation speed (20-80 RPM), overhead beams with collision avoidance photo eyes, and systems that do not require compressed air. Encore’s products can also be combined with blow off systems for more effective cleaning, integrating both feather dusters and blow off sections.",
    subText:
      "In addition to blow off systems, Encore offers custom feather duster systems for a wide range of vehicle and product sizes. These systems range from full robotic feather dusters with optional integrated hoods to floor-mounted hood assemblies. Encore's standard fixed machines can be provided in clean wall or in-booth design with servo-controlled articulating axes or manually adjusted fixed machines. The combination of robotic and fixed machine feather dusting systems provides flexible solutions for complex requirements. Encore manufactures all Ostrich feather rolls in-house for their systems, as well as replacement feather rolls for existing feather duster systems.",
    imgs: [
      { id: "img-1", img: imgOne },
      { id: "img-2", img: imgTwo },
      { id: "img-3", img: imgThree },
      { id: "img-4", img: imgFour },
      { id: "img-5", img: imgFive },
    ],
    benefitsTitle: "Benefits of Using Encore Feather Duster Systems",
    benefitsCards: [
      {
        benefitId: "benefit-1",
        benefitTitle: "Versatility and Customization",
        benefitDescription:
          "Encore offers systems from full robotic feather dusters to floor-mounted hood assemblies, catering to diverse vehicle and product sizes. The combination of robotic and fixed machine feather dusting systems allows for flexible designs to meet complex requirements.",
      },
      {
        benefitId: "benefit-2",
        benefitTitle: "High-Quality Manufacturing",
        benefitDescription:
          "Encore manufactures all Ostrich feather rolls in-house, ensuring quality control and availability of replacement parts for existing systems.",
      },
      {
        benefitId: "benefit-3",
        benefitTitle: "Advanced Technology and Features",
        benefitDescription:
          "Sealed bearings reduce maintenance and increase durability. Multi-axis servo motors with intelligent drives enhance precision and control. Integrated resolvers provide accurate position feedback. De-static bar monitoring helps maintain the effectiveness of the dusting process.",
      },
      {
        benefitId: "benefit-4",
        benefitTitle: "User-Friendly Interfaces",
        benefitDescription:
          "PLC-based systems with PC or Panel view Graphical User Interfaces make operation and monitoring easy.",
      },
      {
        benefitId: "benefit-5",
        benefitTitle: "Operational Efficiency",
        benefitDescription:
          "Adjustable roller speed (20-80 RPM) allows customization. Collision avoidance photo eyes enhance safety during operation. No compressed air requirements reduce operational costs. Integration with blow-off systems provides more effective cleaning.",
      },
      {
        benefitId: "benefit-6",
        benefitTitle: "Reliability and Maintenance",
        benefitDescription:
          "Features like sealed bearings and intelligent drives reduce maintenance needs. High-quality components ensure long-term reliability.",
      },
    ],
  },
  {
    id: "sword-brush",
    title: "Sword Brush",
    text: "Encore has partnered with Wandres Brush Hitec GmbH to offer high-end linear brush systems designed for continuous industrial applications. The linear brush, part of the Sword Brush assembly, operates around the outer contours of its sword-like shape, effectively wiping crosswise over the subject surface to remove particles and dust. These brushes, manufactured by Wandres in the southern Black Forest, boast a long industrial life and are suitable for 24/7 use.",
    subText:
      "The contact area of the linear brush is flexibly mounted on a pneumatically regulated pressure buffer, allowing it to compensate for uneven surfaces and material thickness variations of up to +/- 2 mm. During continuous operations, a self-cleaning unit regenerates the brushes, using a rotating rack and compressed air nozzles to detach particles both mechanically and pneumatically. These loose particles are then immediately disposed of by a suction system, ensuring efficient and uninterrupted production.",
    imgs: [
      { id: "img-1", img: imgSix },
      { id: "img-2", img: imgSix },
      { id: "img-3", img: imgSix },
      { id: "img-4", img: imgSix },
      { id: "img-5", img: imgSix },
    ],
    benefitsTitle: "Benefits of Using Sword Brush",
    benefitsCards: [
      {
        benefitId: "benefit-1",
        benefitTitle: "Effective Particle and Dust Removal",
        benefitDescription:
          "The linear brush operates around the outer contours of its sword-like shape, effectively wiping crosswise over the subject surface to remove particles and dust, ensuring a cleaner and more precise finish.",
      },
      {
        benefitId: "benefit-2",
        benefitTitle: "Durability and Continuous Operation",
        benefitDescription:
          "Manufactured by Wandres in the southern Black Forest, these brushes are designed for a long industrial life and are suitable for 24/7 continuous use, providing reliable performance and reducing downtime.",
      },
      {
        benefitId: "benefit-3",
        benefitTitle: "Adaptability to Uneven Surfaces",
        benefitDescription:
          "The contact area of the linear brush is flexibly mounted on a pneumatically regulated pressure buffer, allowing it to compensate for uneven surfaces and material thickness variations of up to +/- 2 mm, ensuring consistent cleaning across different surface profiles.",
      },
      {
        benefitId: "benefit-4",
        benefitTitle: "Self-Cleaning Mechanism",
        benefitDescription:
          "During continuous operations, a self-cleaning unit regenerates the brushes using a rotating rack and compressed air nozzles to detach particles both mechanically and pneumatically, maintaining the brush's effectiveness and extending its lifespan.",
      },
      {
        benefitId: "benefit-5",
        benefitTitle: "Efficient Particle Disposal",
        benefitDescription:
          "Loose particles are immediately disposed of by a suction system, ensuring efficient and uninterrupted production by preventing the accumulation of dust and debris on the brush and the work surface.",
      },
      {
        benefitId: "benefit-6",
        benefitTitle: "High-End Industrial Application",
        benefitDescription:
          "The high-end linear brush systems are designed for continuous industrial applications, providing superior cleaning performance and enhancing the overall quality and precision of the manufacturing process.",
      },
    ],
  },
  {
    id: "sanding-and-buffing",
    title: "Sanding/Buffing",
    text: "Encore robotic sanding and buffing systems utilize the Encore multi-headed sander as well as off-the-shelf sanding equipment to provide robotic sanding and buffing to the full exterior surface of vehicles as well as vehicle components and parts. These systems integrate automatic paper changers that can remove, replace, and validate paper changes. Dust removal systems can also be integrated to eliminate residual material left behind by the sanding process. Encore systems offer automatic tool change capabilities, providing additional flexibility for the sanding process.",
    subText:
      "These advanced features ensure that Encore's sanding and buffing systems deliver consistent, high-quality results while maintaining efficiency. The combination of multi-headed sanders, automatic paper changers, dust removal systems, and automatic tool change capabilities makes Encore's solutions versatile and adaptable to various sanding requirements, enhancing productivity and reducing manual intervention.",
    imgs: [
      { id: "img-1", img: imgEleven },
      { id: "img-2", img: imgEleven },
      { id: "img-3", img: imgEleven },
      { id: "img-4", img: imgEleven },
      { id: "img-5", img: imgEleven },
    ],
    benefitsTitle: "Benefits of Using Encore's Sanding/Buffing Systems.",
    benefitsCards: [
      {
        benefitId: "benefit-1",
        benefitTitle: "Comprehensive Surface Coverage",
        benefitDescription:
          "The Encore systems utilize multi-headed sanders and off-the-shelf sanding equipment to cover the full exterior surface of vehicles as well as components and parts, ensuring comprehensive and uniform treatment.",
      },
      {
        benefitId: "benefit-2",
        benefitTitle: "Automatic Paper Changers",
        benefitDescription:
          "The integration of automatic paper changers that can remove, replace, and validate paper changes enhances efficiency and consistency in the sanding process, reducing downtime and manual intervention.",
      },
      {
        benefitId: "benefit-3",
        benefitTitle: "Integrated Dust Removal Systems",
        benefitDescription:
          "Dust removal systems can be integrated to eliminate residual material left behind by the sanding process, ensuring a cleaner working environment and preventing defects caused by dust particles.",
      },
      {
        benefitId: "benefit-4",
        benefitTitle: "Automatic Tool Change Capabilities",
        benefitDescription:
          "Automatic tool change capabilities provide additional flexibility for the sanding process, allowing the system to adapt to various sanding requirements and enhancing overall productivity.",
      },
      {
        benefitId: "benefit-5",
        benefitTitle: "High-Quality and Consistent Results",
        benefitDescription:
          "The advanced features of Encore's sanding and buffing systems, including multi-headed sanders and automatic paper changers, ensure consistent, high-quality results with minimal variation, meeting high industry standards.",
      },
      {
        benefitId: "benefit-6",
        benefitTitle: "Increased Productivity",
        benefitDescription:
          "By combining advanced features such as automatic paper changers, dust removal systems, and automatic tool change capabilities, Encore's solutions enhance productivity and efficiency, significantly reducing the need for manual intervention and speeding up the sanding process.",
      },
    ],
  },
  {
    id: "water-blasting",
    title: "Water Blasting",
    text: "Encore water blasting systems utilize off-the-shelf proven technology for water blasting cleaning of carriers and components across a wide variety of configurations and water blasting requirements. These systems employ high-pressure water jets to effectively remove contaminants, debris, and coatings from surfaces, ensuring a thorough and efficient cleaning process. The water blasting process is highly versatile, capable of handling different materials and shapes, and is suitable for both delicate and robust components.",
    subText:
      "Encore's water blasting systems are designed to offer precision and control, allowing operators to adjust pressure and flow rates to meet specific cleaning needs. The integration of automated controls and monitoring systems ensures consistent performance and reduces the need for manual intervention. Additionally, these systems can be equipped with advanced filtration and recycling units to manage water usage efficiently, making the process more environmentally friendly and cost-effective. With a focus on safety and reliability, Encore water blasting systems provide a comprehensive solution for maintaining the cleanliness and integrity of industrial components and carriers.",
    imgs: [
      { id: "img-1", img: imgSixteen },
      { id: "img-2", img: imgSixteen },
      { id: "img-3", img: imgSixteen },
      { id: "img-4", img: imgSixteen },
      { id: "img-5", img: imgSixteen },
    ],
    benefitsTitle: "Benefits of Using Encore's Water Blasting Systems.",
    benefitsCards: [
      {
        benefitId: "benefit-1",
        benefitTitle: "Effective Contaminant Removal",
        benefitDescription:
          "The high-pressure water jets used in Encore's systems effectively remove contaminants, debris, and coatings from surfaces, ensuring thorough and efficient cleaning.",
      },
      {
        benefitId: "benefit-2",
        benefitTitle: "Versatility in Application",
        benefitDescription:
          "The water blasting process is highly versatile, capable of handling different materials and shapes, making it suitable for both delicate and robust components.",
      },
      {
        benefitId: "benefit-3",
        benefitTitle: "Precision and Control",
        benefitDescription:
          "Encore's systems offer precision and control, allowing operators to adjust pressure and flow rates to meet specific cleaning needs, ensuring optimal results for various applications.",
      },
      {
        benefitId: "benefit-4",
        benefitTitle: "Automated Controls and Monitoring",
        benefitDescription:
          "The integration of automated controls and monitoring systems ensures consistent performance, reduces the need for manual intervention, and enhances overall efficiency.",
      },
      {
        benefitId: "benefit-5",
        benefitTitle: "Environmentally Friendly and Cost-Effective",
        benefitDescription:
          "Equipped with advanced filtration and recycling units, these systems manage water usage efficiently, making the process more environmentally friendly and cost-effective.",
      },
      {
        benefitId: "benefit-6",
        benefitTitle: "Safety and Reliability",
        benefitDescription:
          "Designed with a focus on safety and reliability, Encore water blasting systems provide a comprehensive solution for maintaining the cleanliness and integrity of industrial components and carriers, reducing the risk of damage during the cleaning process.",
      },
    ],
  },
  {
    id: "liquid-painting",
    title: "Liquid Painting",
    text: "Encore Automation's extensive knowledge and experience in painting systems provide a solid foundation for tackling various projects and services. Their expertise spans a wide range of paint application materials, including solventborne and waterborne primers, basecoats, and clearcoats, as well as multiple component paints. They are proficient in various paint application approaches, such as electrostatic guns or electrostatic rotary atomizers, direct charge waterborne applicators, and air atomized guns.",
    subText:
      "Encore works with all major brands of paint application equipment suppliers and paint robot or paint machine suppliers, offering turnkey automated paint booths. Their comprehensive system knowledge and experience enable them to optimally specify, configure, layout, simulate, engineer and design, assemble and test, install, commission, process tune, provide training, and service systems for the aforementioned applications and materials using a variety of equipment options. This holistic approach ensures high-quality and efficient painting solutions tailored to specific project requirements.",
    imgs: [
      { id: "img-1", img: imgTwentyOne },
      { id: "img-2", img: imgTwentyOne },
      { id: "img-3", img: imgTwentyOne },
      { id: "img-4", img: imgTwentyOne },
      { id: "img-5", img: imgTwentyOne },
    ],
    benefitsTitle: "Benefits of Using Encore's Liquid Painting Systems.",
    benefitsCards: [
      {
        benefitId: "benefit-1",
        benefitTitle: "Extensive Knowledge and Experience",
        benefitDescription:
          "Encore Automation’s extensive knowledge and experience in painting systems provide a solid foundation for successfully tackling various projects and services, ensuring reliable and high-quality outcomes.",
      },
      {
        benefitId: "benefit-2",
        benefitTitle: "Versatility in Paint Application Materials",
        benefitDescription:
          "Expertise spans solventborne and waterborne primers, basecoats, and clearcoats, as well as multiple component paints, making their systems versatile and adaptable to different project needs.",
      },
      {
        benefitId: "benefit-3",
        benefitTitle: "Proficiency in Various Application Approaches",
        benefitDescription:
          "Proficient in various paint application approaches, including electrostatic guns, electrostatic rotary atomizers, direct charge waterborne applicators, and air atomized guns, ensuring optimal application techniques for different materials.",
      },
      {
        benefitId: "benefit-4",
        benefitTitle: "Partnerships with Major Brands",
        benefitDescription:
          "Works with all major brands of paint application equipment suppliers and paint robot or paint machine suppliers, offering flexibility and access to the best tools for the job.",
      },
      {
        benefitId: "benefit-5",
        benefitTitle: "Turnkey Automated Paint Booths",
        benefitDescription:
          "Offers turnkey automated paint booths, providing comprehensive solutions from specification and configuration to installation and commissioning, ensuring seamless integration and operation.",
      },
      {
        benefitId: "benefit-6",
        benefitTitle: "Holistic System Approach",
        benefitDescription:
          "Their holistic approach includes system specification, configuration, layout, simulation, engineering, design, assembly, testing, installation, commissioning, process tuning, training, and service, ensuring high-quality and efficient painting solutions tailored to specific project requirements.",
      },
    ],
  },
  {
    id: "powder-painting",
    title: "Powder Painting",
    text: "Encore is a leader in automotive powder systems, offering high-volume powder coating solutions for automotive quality applications, utilizing dilute or dense phase for single or multicolor paints. Their expertise includes powder distribution systems with sieving, mixing, and transport capabilities; powder application systems, either robotic or machine type; and powder collection/reclaim systems, which can be integrated back into distribution and application processes.",
    subText:
      "Encore's dense phase technology equipment, from application pumps to transfer pumps, has eliminated most defect-generating elements found in typical dilute phase powder systems. The Encore Dense Phase Equipment and Multi-Powder Integrator provide easy and quick color change capability for multi-powder systems. Encore has extensive experience integrating and retrofitting systems with machines and/or robots, using a variety of types and brands of powder, ensuring efficient and high-quality powder coating processes tailored to specific needs.",
    imgs: [
      { id: "img-1", img: imgTwentySix },
      { id: "img-2", img: imgTwentySix },
      { id: "img-3", img: imgTwentySix },
      { id: "img-4", img: imgTwentySix },
      { id: "img-5", img: imgTwentySix },
    ],
    benefitsTitle: "Benefits of Using Encore's Powder Painting Systems.",
    benefitsCards: [
      {
        benefitId: "benefit-1",
        benefitTitle: "High-Volume Powder Coating Solutions",
        benefitDescription:
          "Encore offers high-volume powder coating solutions specifically designed for automotive quality applications, ensuring superior finishes and durability.",
      },
      {
        benefitId: "benefit-2",
        benefitTitle: "Versatile Paint Application",
        benefitDescription:
          "Utilizes dilute or dense phase for single or multicolor paints, providing versatility to meet diverse project requirements.",
      },
      {
        benefitId: "benefit-3",
        benefitTitle: "Comprehensive Powder Distribution Systems",
        benefitDescription:
          "Expertise includes powder distribution systems with sieving, mixing, and transport capabilities, ensuring consistent and efficient powder handling.",
      },
      {
        benefitId: "benefit-4",
        benefitTitle: "Advanced Powder Application Systems",
        benefitDescription:
          "Offers both robotic and machine type powder application systems, providing precise and efficient application tailored to specific needs.",
      },
      {
        benefitId: "benefit-5",
        benefitTitle: "Efficient Powder Collection and Reclaim Systems",
        benefitDescription:
          "Powder collection/reclaim systems can be integrated back into distribution and application processes, enhancing efficiency and reducing waste.",
      },
      {
        benefitId: "benefit-6",
        benefitTitle: "Innovative Dense Phase Technology",
        benefitDescription:
          "Encore's dense phase technology equipment, including application and transfer pumps, eliminates most defect-generating elements found in typical dilute phase powder systems, ensuring high-quality results. Additionally, the Dense Phase Equipment and Multi-Powder Integrator provide easy and quick color change capability for multi-powder systems, increasing productivity and flexibility.",
      },
      {
        benefitId: "benefit-7",
        benefitTitle: "Extensive Integration and Retrofitting Experience",
        benefitDescription:
          "Extensive experience integrating and retrofitting systems with machines and/or robots using various types and brands of powder, ensuring efficient and high-quality powder coating processes tailored to specific needs.",
      },
    ],
  },
  {
    id: "skiving",
    title: "Skiving",
    text: "Encore Automation has developed its own Skiving Tool to help reduce manpower and increase repeatability. The skive, which can be attached to a smart gun and is retractable, is particularly useful for reaching hard-to-access areas. Additionally, Encore Automation employs a skive cleaning mechanism between jobs to ensure the skive is clean for each vehicle. This tool is especially effective for windshield flanges and tail lamps, enhancing the efficiency and precision of the skiving process.",
    subText:
      "This advanced tool also comes with an air-knife cleaning device, which further ensures cleanliness and performance. Moreover, it can be equipped with a robotic vision add-on that checks the correct positioning of the tool, thereby enhancing accuracy and reducing errors. These features make the Encore Automation Skiving Tool a comprehensive solution for skiving needs in automotive applications.",
    imgs: [
      { id: "img-1", img: imgThirtyOne },
      { id: "img-2", img: imgThirtyOne },
      { id: "img-3", img: imgThirtyOne },
      { id: "img-4", img: imgThirtyOne },
      { id: "img-5", img: imgThirtyOne },
    ],
    benefitsTitle: "Benefits of Using Encore's Automated Skiving System.",
    benefitsCards: [
      {
        benefitId: "benefit-1",
        benefitTitle: "Reduction in Manpower",
        benefitDescription:
          "The skive, which can be attached to a smart gun and is retractable, automates the skiving process, reducing the need for manual labor and increasing operational efficiency.",
      },
      {
        benefitId: "benefit-2",
        benefitTitle: "Increased Repeatability and Precision",
        benefitDescription:
          "The tool enhances the efficiency and precision of the skiving process, ensuring consistent quality, especially in hard-to-access areas such as windshield flanges and tail lamps.",
      },
      {
        benefitId: "benefit-3",
        benefitTitle: "Enhanced Accessibility",
        benefitDescription:
          "Its retractable design allows it to effectively reach and operate in hard-to-access areas, providing comprehensive skiving coverage.",
      },
      {
        benefitId: "benefit-4",
        benefitTitle: "Improved Cleanliness",
        benefitDescription:
          "The skive cleaning mechanism employed between jobs ensures the tool is clean for each vehicle, maintaining high performance and preventing contamination.",
      },
      {
        benefitId: "benefit-5",
        benefitTitle: "Air-Knife Cleaning Device",
        benefitDescription:
          "The integrated air-knife cleaning device further ensures cleanliness and optimal performance of the skiving tool.",
      },
      {
        benefitId: "benefit-6",
        benefitTitle: "Robotic Vision Add-On",
        benefitDescription:
          "The optional robotic vision add-on checks the correct positioning of the tool, enhancing accuracy and reducing the likelihood of errors during the skiving process.",
      },
    ],
  },
  {
    id: "tesa-tape",
    title: "tesa Tape",
    text: "Encore Automation has developed an automated process using an Encore patented tool for the dispensing, application, and vision verification of a tesa tape application process. This system utilizes a robot to gather and place tape coverings for PT/ED drain holes in vehicle bodies, enhancing paint shop efficiency by reducing cycle time and alleviating poor ergonomic working conditions for operators. The vision verification feature ensures proper placement of tape, reducing warranty claims by minimizing the likelihood of improperly placed hole covers on customer vehicles. This innovative system can also be used to replace any plugs or grommets being used, with applicators equipped with up to six heads, making them highly versatile and efficient for various applications.",
    subText:
      "This automated solution significantly reduces manpower and enhances the quality and ergonomics of the process compared to manual operations. By automating the tesa tape application, Encore's system provides a substantial improvement in efficiency and consistency, ensuring proper placement and adherence of tape coverings. This leads to a more streamlined production process and a reduction in ergonomic strain on operators, ultimately improving overall productivity and quality.",
    imgs: [
      { id: "img-1", img: imgThirtySix },
      { id: "img-2", img: imgThirtySix },
      { id: "img-3", img: imgThirtySix },
      { id: "img-4", img: imgThirtySix },
      { id: "img-5", img: imgThirtySix },
    ],
    benefitsTitle: "Benefits of Using Encore's tesa Tape System.",
    benefitsCards: [
      {
        benefitId: "benefit-1",
        benefitTitle: "Enhanced Efficiency",
        benefitDescription:
          "The use of a robot to gather and place tape coverings for PT/ED drain holes in vehicle bodies significantly reduces cycle time, enhancing overall paint shop efficiency.",
      },
      {
        benefitId: "benefit-2",
        benefitTitle: "Improved Ergonomics",
        benefitDescription:
          "By automating the tape application process, the system alleviates poor ergonomic working conditions for operators, reducing physical strain and improving workplace safety.",
      },
      {
        benefitId: "benefit-3",
        benefitTitle: "Consistent Quality and Accuracy",
        benefitDescription:
          "The vision verification feature ensures proper placement of tape, reducing the likelihood of improperly placed hole covers and minimizing warranty claims.",
      },
      {
        benefitId: "benefit-4",
        benefitTitle: "Versatility and Adaptability",
        benefitDescription:
          "The system can replace any plugs or grommets being used, with applicators equipped with up to six heads, making it highly versatile and efficient for various applications.",
      },
      {
        benefitId: "benefit-5",
        benefitTitle: "Reduced Manpower",
        benefitDescription:
          "The automated process significantly reduces the need for manual labor, freeing up operators for other tasks and reducing labor costs.",
      },
      {
        benefitId: "benefit-6",
        benefitTitle: "Streamlined Production Process",
        benefitDescription:
          "Automating the tesa tape application ensures proper placement and adherence of tape coverings, leading to a more streamlined and reliable production process.",
      },
      {
        benefitId: "benefit-7",
        benefitTitle: "Reduced Warranty Claims",
        benefitDescription:
          "The vision verification and precise application reduce the likelihood of errors, leading to fewer warranty claims and improved customer satisfaction.",
      },
      {
        benefitId: "benefit-8",
        benefitTitle: "Enhanced Productivity and Quality",
        benefitDescription:
          "The combination of reduced cycle time, improved ergonomics, consistent quality, and versatility leads to an overall enhancement in productivity and quality in the paint shop process.",
      },
    ],
  },
];