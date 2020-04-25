import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer NndXZqB73rB2GDXyEhk3uovyB_ycLWssbTvw32Ovz_01wi5Olq5lhjFzL4xF15rwpp9au_SfR6A2-HRCaf5_meqXnJQWEv0MrOwK2yAX42M7gn7lH32K5jfKyGKkXnYx"
    }
});