import {makeStyles} from "@material-ui/core";

export default makeStyles(() => ({
    cartModal: {
        marginLeft : "39%",
        marginTop:"3.8%",
        minWidth: "20%",
        minHeight: "20%",
        maxHeight: "60%",
        backgroundColor: "white",
        padding: "1rem",
        borderRadius: "14px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
        border: "5px solid black",
        zIndex: "30",
        overflowY:"auto",
        position:"absolute"
    }
}))