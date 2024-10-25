import { useParams, Link } from "react-router-dom";
import { portfolioItems } from "./portfolioItems";

const PortfolioDetails = () => {
  const { id } = useParams();
  const item = portfolioItems.find((item) => item.id === parseInt(id));

  if (!item) {
    return <div>Portfolio item not found!</div>;
  }

  return (
    <div className="w-5/6 mx-auto my-20">
      <h1 className="text-5xl text-[#c4cfde] mb-10 font-extrabold">
        {item.title}
      </h1>

      {/* Links above the image */}
      <div className="mb-5">
        <a
          href={item.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mr-5 text-[#ff014f]"
        >
          Live Demo
        </a>
        <a
          href={item.clientLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mr-5 text-[#ff014f]"
        >
          Client Code
        </a>
        <a
          href={item.serverLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#ff014f]"
        >
          Server Code
        </a>
      </div>

      <img src={item.image} alt={item.title} className="" />
      <p className="text-white mt-3">{item.description}</p>
      <h2 className="text-3xl text-[#ff014f] mt-5">Features</h2>
      <ul className="text-gray-400 list-disc list-inside mt-2">
        {item.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <p className="text-white mt-5">
        <strong>Technologies Used:</strong> {item.technology}
      </p>

      <Link to="/portfolio">
        <button className="mt-5 text-[#ff014f]">Back to Portfolio</button>
      </Link>
    </div>
  );
};

export default PortfolioDetails;
