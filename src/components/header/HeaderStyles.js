import {makeStyles} from "@material-ui/core";

export default makeStyles(() => ({
    header: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "5rem",
        backgroundColor: "#8a2b06",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 10%",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
        zIndex: "10",
    },

    mainImage: {
        width: "100%",
        height: "25rem",
        zIndex: "0",
        overflow: "hidden",
    },

// mainImage img {
//     width: 110%;
//     height: 100%;
//     object-fit: cover;
//     transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);
// }
}))