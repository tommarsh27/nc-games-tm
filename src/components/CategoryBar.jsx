import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";



export default function CategoryBar() {
  const [categories, setCategories] = useState("");

  useEffect(() => {
    axios
      .get("https://be-games-project-tm.herokuapp.com/api/categories")
      .then(({ data }) => {
        setCategories(data.categories);
      });
  }, []);
  
  return (
    <nav className="catbar">
        {categories.map((category) => {
          return <Link to={`/reviews:${category}`} className="catlinks">{`${category.slug}`}</Link>
        })}
    </nav>
)
};
