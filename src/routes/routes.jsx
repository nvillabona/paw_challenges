import Challenge_11 from "../challenges/challenge_11/Challenge_11";
import Challenge_12 from "../challenges/challenge_12/Challenge_12";
import Challenge_13 from "../challenges/challenge_13/Challenge_13";

const appRoutes = {
    home:{
        route: '/',
        component: <Challenge_11/>,
        name: 'Challenge 11'
    },
    challenge_12:{
        route: '/challenge12/',
        component: <Challenge_12/>,
        name: 'Challenge 12'
    },
    challenge_13:{
        route: '/challenge13/',
        component: <Challenge_13/>,
        name: 'Challenge 13'
    }
}

export default appRoutes;