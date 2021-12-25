import { Link, useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  /* navigate('/navigate', {replace: true});
  alternative use -1,-2 or 1,2 to push back for forward */
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="products/p1">A Book</Link>
        </li>
        <li>
          <Link to="products/p2">A carpent</Link>
        </li>
        <li>
          <Link to="products/p3">Online Course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
