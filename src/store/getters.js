const getters = {
    user: state => state.user,
    userPicture: (state, getters) => {
        const user = getters.user
        if (user) {
            const photos = user.profile.photos
            if (photos.length !== 0) {
                return photos[0].value
            }
        }
    }
}

export default getters