import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";



export default function CategoryBar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://be-games-project-tm.herokuapp.com/api/categories")
      .then(({ data }) => {
        setCategories(data.categories);
      });
  }, []);
  
  return (
    <nav className="catbar">
      <div>
        <h3>Game categories</h3>
        {categories.map((category) => {
          return <Link key={category.slug} to={`/reviews/category/${category.slug}`} className="catlinks">{category.slug}</Link>
        })}
        </div>
    </nav>
)
};
