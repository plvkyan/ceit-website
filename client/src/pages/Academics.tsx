// Imports

// Component imports
// Button component import
import { Button } from "@/components/ui/button"

// Utiility imports
// React Router imports
// Link import
import { Link } from "react-router-dom";

// Page
const Academics = () => {

    return (
        <div>
            <h1> This is the Academics page! </h1>
            <p> We don't have content for the Academics page yet, not even a mockup. This is just for route testing.
            </p>
            <Link to="/home"> <Button> Back to Home? </Button> </Link>
        </div>
    )
}

export default Academics;