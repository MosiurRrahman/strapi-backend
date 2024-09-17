const { default: axios } = require("axios");

const axiosClient = axios.create({
    baseURL: "http://localhost:1337/api"
});

// Existing API calls
const getHero = () => axiosClient.get("/home?populate[hero][populate]=*");
const getPartnerLogo = () => axiosClient.get("/home?populate[partner_section][populate]=*");
const getAbout = () => axiosClient.get("/home?populate[about][populate]=*");
const getSolutionAccrodion = () => axiosClient.get("/home?populate[solutions][populate][accordion][populate]=*");
const getSolution = () => axiosClient.get("/home?populate[solutions][populate]=*");
const getWorkSection = () => axiosClient.get("/home?populate[work_section][populate]=*");
const getBlog = () => axiosClient.get("/home-page?populate[blog_section][populate][blogs][populate]=*");

// New function to fetch blog by slug
const getBlogBySlug = (slug) => axiosClient.get(`/blogs?filters[slug][$eq]=${slug}&populate=*`);

export default {
    getHero,
    getPartnerLogo,
    getAbout,
    getSolution,
    getSolutionAccrodion,
    getWorkSection,
    getBlog,
    getBlogBySlug // Add the new method here
}
