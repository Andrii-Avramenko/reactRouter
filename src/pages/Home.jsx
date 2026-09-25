import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  console.log(navigate);

  return (
    <>
      <h2>Home page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eaque
        magni id, impedit ex labore rem quae repudiandae commodi animi possimus
        veniam quas alias natus hic, esse dolores officiis quidem?
      </p>
      <button
        type="button"
        onClick={() =>
          navigate("/about", { state: { name: "Andrii", age: 15 } })
        }
      >
        Перейти на about з даними корситувача
      </button>
    </>
  );
};

export default Home;
