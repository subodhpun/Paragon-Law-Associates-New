// src/services/api.js
import axios from 'axios';

const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
  }
});

export const teamService = {
  getAll: async () => {
    console.log('Fetching all team members...');
    const response = await api.get('/api/team');
    console.log('Fetched team members:', response.data);
    return response.data;
  },

  create: async (data) => {
    console.log('Creating team member with data:', data);
    const response = await api.post('/api/team', data);
    console.log('Created team member:', response.data);
    return response.data;
  },

  update: async (id, data) => {
    console.log(`Updating team member ${id} with data:`, data);
    const response = await api.put(`/api/team/${id}`, data);
    console.log('Updated team member:', response.data);
    return response.data;
  },

  delete: async (id) => {
    console.log(`Deleting team member ${id}`);
    await api.delete(`/api/team/${id}`);
    console.log('Deleted team member successfully');
  }
};