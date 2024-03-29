import React from "react";
import Hero from "../component/hero";
import Banner from "../component/banner";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Hero>
      <Banner title="404" subtitle="Page Not Found">
        <Link to="/" className="btn-primary">
          RETURN HOME
        </Link>
      </Banner>
    </Hero>
  );
};

export default Error;
