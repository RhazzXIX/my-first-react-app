import { Link } from "react-router-dom";

const Profile = ({match}) => {
  console.log(match)
  return (
    <div>
      <Link to={'/counter'}>
        <h1>Hello! from Profile</h1>
      </Link>
    </div>
  );
};

export default Profile;
