import { useState } from "react";

const Avatar = ({ image, firstName, lastName }) => {
  const [donutsCount, setDonutsCount] = useState(0);

  const eatDonut = () => {
    setDonutsCount(donutsCount + 1);
  };

  return (
    <section className="container-avatar">
      <img src={image} alt="avatar" />
      <p>
        {firstName} {lastName.toUpperCase()}
      </p>
      <button type="button" onClick={eatDonut}>
        🍩 {donutsCount}
      </button>
    </section>
  );
};

export default Avatar;
