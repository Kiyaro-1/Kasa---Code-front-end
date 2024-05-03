import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { propertyService } from "@/_services";
import Error from "@/_utils/Error";
import DropdownMenu from "../../components/public/DropdownMenu.js";
import Slideshow from "../../components/public/Slideshow.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Logement = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    propertyService
      .getProperty(id)
      .then((response) => {
        setProperty(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => setLoading(false));

    //eslint-disable-next-line
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!property) {
    return <Error />;
  }

  const hostName = property.host?.name;
  const hostPicture = property.host?.picture;
  const rating = parseInt(property.rating);

  return (
    <div className="page-logement">
      <Slideshow pictures={property.pictures} />
      <div className="logement-container-global">
        <div className="logement-container1">
          <div className="logement-info">
            {property && <h1>{property.title}</h1>}
            {property && <h2>{property.location}</h2>}
          </div>
          {property.tags && (
            <div className="tags">
              {property.tags.map((tag, index) => (
                <h3 key={index} className="logement-tag">
                  {tag}
                </h3>
              ))}
            </div>
          )}
        </div>
        <div className="logement-container2">
          <div className="rating">
            <FontAwesomeIcon
              icon={faStar}
              className={rating >= 1 ? "fa-star colored" : "fa-star"}
            />
            <FontAwesomeIcon
              icon={faStar}
              className={rating >= 2 ? "fa-star colored" : "fa-star"}
            />
            <FontAwesomeIcon
              icon={faStar}
              className={rating >= 3 ? "fa-star colored" : "fa-star"}
            />
            <FontAwesomeIcon
              icon={faStar}
              className={rating >= 4 ? "fa-star colored" : "fa-star"}
            />
            <FontAwesomeIcon
              icon={faStar}
              className={rating >= 5 ? "fa-star colored" : "fa-star"}
            />
          </div>
          <div className="host-info">
            {hostName && ( // Check if hostName exists before rendering
              <p className="host-name">
                {hostName.split(" ")[0]} <br /> {hostName.split(" ")[1]}
              </p>
            )}
            {hostPicture && ( // Check if hostPicture exists before rendering
              <img src={hostPicture} alt="Host" className="host-image" />
            )}
          </div>
        </div>
      </div>
      <div className="dropdownmenu">
        {property.description && (
          <DropdownMenu
            title="Description"
            content={property.description}
            customClassName="description-menu"
          />
        )}
        {property.equipments && (
          <DropdownMenu
            title="Équipements"
            content={
              <div>
                {property.equipments.map((equipment, index) => (
                  <p key={index} style={{ padding: "0em", marginTop: "0em" }}>
                    {equipment}
                  </p>
                ))}
              </div>
            }
            customClassName="equipments-menu"
          />
        )}
      </div>
    </div>
  );
};

export default Logement;
