import {makeStyles} from "@material-ui/core";

export default makeStyles(() => ({

    cartItem: {
        borderBottom: "2px solid \t#800000",
        padding: "10px",
        borderRadius: "5px",
    },

    cartButtonBox: {
        display: "flex",
        width: "25%",
        justifyContent: "space-between",
        marginTop: "5px"
    },

    cartButton: {
        border: "1px solid \t#800000",
        padding: "2px 15px",
        cursor:"pointer",
        backgroundColor:"white",
        '&:hover':{
            backgroundColor: "#e2e2e2"
        }
    },

    count: {
        border: "1px solid black",
        marginLeft: "10px",
        padding: "0 5px"
    }


}))