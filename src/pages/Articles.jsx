import React from "react";
import { useSelector } from "react-redux";
import Cards from "../components/Cards";
import Navigation from "../components/Navigation";

const Articles = () => {
  // UseSelector permet d'aller chercher le STORE de l'application
  const data = useSelector((state) => state.images.data);
  return (
    <div className="article">
      <Navigation />
      <h1>Articles</h1>
      {/* On va chercher les données */}
      {/* {data.map((img) => {
        return ( */}
          {/* // Retourner les images avec leur identifiant unique */}
          <Cards data={data}/>
        {/* );
      })} */}
    </div>
  );
};

export default Articles;
