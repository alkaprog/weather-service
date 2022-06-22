export const locationModule = {
    state: () => ({
        locationName: "Ростов-на-Дону",
        locationLat: 47.2214,
        locationLon: 39.7114,
    }),
    getters: {
        getLocationName(state) {
            return state.locationName;
        },
    },
    mutations: {
        setLocationName(state, locationName) {
            state.locationName = locationName;
        },
    },
    actions: {},
};
