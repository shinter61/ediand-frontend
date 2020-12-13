import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { increment, decrement } from "./counterSlice";
import { RootState } from "./reducers";

const mapStateToProps = (state: RootState) => ({
  count: state.counter,
});

const mapDispatchToProps = { increment, decrement };

const Counter: React.FC<any> = ({ count, increment, decrement }) => {
  return (
    <div>
      <p>counter</p>
      <p>{count}</p>
      <button onClick={() => increment({ number: 1 })}>増加</button>
      <button onClick={() => decrement({ number: 1 })}>減少</button>
      <Link to="/">トップへ</Link>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
