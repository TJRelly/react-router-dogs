import { useParams } from "react-router-dom";

const Dog = () => {
    const params = useParams();
    return <>Hi, I'm {params.name}</>;
};

export default Dog;
