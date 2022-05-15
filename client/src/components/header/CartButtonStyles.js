import {makeStyles} from "@material-ui/core";

export default makeStyles(() => ({
    button: {
        cursor: "pointer",
        font: "inherit",
        border: "none",
        backgroundColor: "#4d1601",
        color: "white",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "25px",
        fontWeight: "bold",
        width: "15%"
    },
    buttonCounter: {
        backgroundColor: "darkred",
        borderRadius: "5px",
        width: "40px",
        height: "25px",
        verticalAlign: "center",
    }
}))