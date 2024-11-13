import { api } from '../services/api';

export const getPosts = async () => {
    try {
        const { data } = await api.get('/posts');
        return data ? data : [];
    } catch (error) {
        console.error("Erro ao buscar posts:", error);
        return [];
    }
};

export const getPostBySlug = async (id) => {
    try {
        const { data } = await api.get(`/posts/${id}`);
        return data ? data : {};
    } catch (error) {
        console.error(`Erro ao buscar post com id ${id}:`, error);
        return {};
    }
};
