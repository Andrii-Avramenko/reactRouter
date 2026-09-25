import { Link, Outlet, useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation()
  console.log(location)
  return (
    <>
      <h2>About Page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        debitis excepturi ut. Ipsa pariatur maxime magni doloremque nisi animi,
        numquam corrupti dolorum vel saepe ad, incidunt quis quibusdam in vitae.
      </p>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          padding: 0,
          columnGap: "20px",
          placeContent: "center",
        }}
      >
        <li>
          <Link to="mission">Our mission</Link>
        </li>
        <li>
          <Link to="team">Our team</Link>
        </li>
        <li>
          <Link to="reviews">Our Reviews of our clients</Link>
        </li>
        <li>
          <Link to="">Our Products</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
export default About;
