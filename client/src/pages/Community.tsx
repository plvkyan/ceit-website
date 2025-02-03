// Imports

// Component imports
// Button component import
import { Button } from "@/components/ui/button"

// Utiility imports
// React Router imports
// Link import
import { Link } from "react-router-dom";

// Page
const Community = () => {

    return (
        <div>
            <h1> This is the Community page! </h1>
            <p> We don't have content for the Community page yet, not even a mockup. This is just for route testing.
            </p>
            <Link to="/home"> <Button> Back to Home? </Button> </Link>
        </div>
    )
}

export default Community;