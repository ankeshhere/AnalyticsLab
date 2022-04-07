import classes from './Card.module.css';
import 'materialize-css/dist/css/materialize.min.css';

const Card = (props) => {
return (
    <div className="row">
        <div className="col m4 s12">
<section className={classes.card}>
  {/* {props.children}   */}
  Box 1
</section>
</div>
<div className="col m4 s12">
<section className={classes.card}>
  {/* {props.children}   */}
  Box 2
</section>
</div>
<div className="col m4 s12">
<section className={classes.card}>
  {/* {props.children}   */}
  Box 3
</section>
</div>
</div>
);
};
export default Card;