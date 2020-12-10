import * as React from "react";
import { Link } from "react-router-dom";

const Top: React.FC = () => {
  return (
    <div>
      <p>top</p>
      <Link to="/sign_up">新規登録</Link>
      <Link to="/sign_in">ログイン</Link>
      <Link to="/counter">カウンター</Link>
    </div>
  );
};

export default Top;
