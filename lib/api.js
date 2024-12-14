// lib/api.js
import axios from 'axios';

const API_URL = 'https://strapi.prod-strapi-fra-01.surmatik.ch';

export const fetchBlogPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/lino-blogposts?populate=*`);
    return response.data.data;
  } catch (error) {
    console.error("Fehler beim Abrufen der Blog-Beiträge:", error);
    return [];
  }
};

export const fetchBlogPostBySlug = async (slug) => {
  try {
    const response = await axios.get(`${API_URL}/api/lino-blogposts?filters[slug][$eq]=${slug}&populate=*`);
    return response.data.data[0];
  } catch (error) {
    console.error(`Fehler beim Abrufen des Blog-Beitrags mit dem Slug ${slug}:`, error);
    return null;
  }
};
