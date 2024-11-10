import { useParams } from "react-router-dom";
const PlayersList = () => {
    const params = useParams();
    return (
        <div>
            Profile
            {params.id}
        </div>
    );
};

export default PlayersList;
