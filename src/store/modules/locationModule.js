export const locationModule = {
    state: () => ({
        locationName: "Rostov-on-Don",
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
