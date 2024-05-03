import React, { useState, useEffect, useRef } from "react";
import { propertyService } from "@/_services";
import Card from "@/components/public/Card";
import cover from "../../images/Image_source_1.png";

const Home = () => {
  const [properties, setProperties] = useState();
  const flag = useRef(false);
  const [isLoad, setload] = useState(false);

  useEffect(() => {
    if (flag.current === false) {
      propertyService
        .getAllProperties()
        .then((res) => {
          setProperties(res.data);
          setload(true);
        })
        .catch((err) => console.log(err));
    }

    return () => (flag.current = true);
  }, []);

  if (!isLoad) {
    return <div>loading...</div>;
  }

  return (
    <div className="home-page">
      <div className="home_cover">
        <img src={cover} alt="home_cover_image" />
        <p>Chez vous, partout et ailleurs</p>
      </div>
      <div className="cards">
        {properties.map((prt, id) => (
          <Card key={id} property={prt} image={prt.cover} />
        ))}
      </div>
    </div>
  );
};

export default Home;
