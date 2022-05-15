import {makeStyles} from "@material-ui/core";
import {hover} from "@testing-library/user-event/dist/hover";

export default makeStyles(() => ({
    cartModal: {
        marginLeft: "39%",
        marginTop: "3.8%",
        minWidth: "40%",
        minHeight: "20%",
        maxHeight: "60%",
        backgroundColor: "white",
        padding: "1rem",
        borderRadius: "14px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
        border: "5px solid black",
        zIndex: "30",
        overflowY: "auto",
        position: "absolute"
    },

    orderButton: {
        borderRadius: "20px",
        backgroundColor: "darkred",
        color: "white",
        margin: "10px",
        '&:hover': {
            background: "#571616"
        },
    },

    cancelButton: {
        borderRadius: "20px",
        border: "1px solid darkred",
        margin: "10px"
    }
}))