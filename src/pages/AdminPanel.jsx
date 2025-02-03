import React, { useState, useEffect } from 'react';
import { teamService } from '../services/Api.jsx';

// Types
class TeamMember {
  constructor(id, name, position, specializations, education, bar_admissions, languages, image_url, order_index) {
    this.id = id;
    this.name = name;
    this.position = position;
    this.specializations = specializations;
    this.education = education;
    this.bar_admissions = bar_admissions;
    this.languages = languages;
    this.image_url = image_url;
    this.order_index = order_index;
  }
}

class NewsArticle {
  constructor(id, title, date, content, category) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.content = content;
    this.category = category;
  }
}

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('team');
  const [selectedTeamMember, setSelectedTeamMember] = useState(null);
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [news, setNews] = useState([
    new NewsArticle(
      '1',
      'New Corporate Law Regulations: What You Need to Know',
      '2024-03-15',
      'Explore the latest changes in corporate law and their implications for businesses in Nepal.',
      'Corporate Law'
    )
  ]);

  // Fetch team members on component mount
  useEffect(() => {
    console.log('Component mounted, fetching team members...');
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    setLoading(true);
    setError(null);
    try {
      console.log('Fetching team members from API...');
      const data = await teamService.getAll();
      console.log('Successfully fetched team members:', data);
      setTeamMembers(data);
    } catch (err) {
      console.error('Error fetching team members:', err);
      setError('Failed to fetch team members');
    } finally {
      setLoading(false);
    }
  };

  const handleAddTeamMember = async (memberData) => {
    setLoading(true);
    setError(null);
    try {
      console.log('Adding new team member with data:', memberData);
      await teamService.create(memberData);
      console.log('Successfully added team member');
      await fetchTeamMembers();
      setSelectedTeamMember(null);
    } catch (err) {
      console.error('Error adding team member:', err);
      setError('Failed to add team member');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateTeamMember = async (memberData) => {
    setLoading(true);
    setError(null);
    try {
      console.log('Updating team member with data:', memberData);
      await teamService.update(memberData.id, memberData);
      console.log('Successfully updated team member');
      await fetchTeamMembers();
      setSelectedTeamMember(null);
    } catch (err) {
      console.error('Error updating team member:', err);
      setError('Failed to update team member');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteTeamMember = async (id) => {
    if (window.confirm('Are you sure you want to delete this team member?')) {
      setLoading(true);
      setError(null);
      try {
        console.log('Deleting team member with id:', id);
        await teamService.delete(id);
        console.log('Successfully deleted team member');
        await fetchTeamMembers();
      } catch (err) {
        console.error('Error deleting team member:', err);
        setError('Failed to delete team member');
      } finally {
        setLoading(false);
      }
    }
  };

  // Handle news operations (keeping existing implementation)
  const handleAddNews = (article) => {
    const newArticle = new NewsArticle(
      Date.now().toString(),
      article.title,
      article.date,
      article.content,
      article.category
    );
    setNews([...news, newArticle]);
    setSelectedArticle(null);
  };

  const handleUpdateNews = (article) => {
    setNews(news.map((n) => (n.id === article.id ? article : n)));
    setSelectedArticle(null);
  };

  const handleDeleteNews = (id) => {
    setNews(news.filter((article) => article.id !== id));
  };

  // Team Members Section
  const TeamMembersSection = () => (
    <div className="space-y-4">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          {error}
          <button
            className="absolute top-0 right-0 px-4 py-3"
            onClick={() => setError(null)}
          >
            ×
          </button>
        </div>
      )}

      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">Team Members</h3>
        <button
          onClick={() => {
            console.log('Opening new team member form');
            setSelectedTeamMember(new TeamMember());
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add New Member
        </button>
      </div>

      {loading ? (
        <div className="text-center py-4">Loading...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Position</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {teamMembers.map((member) => (
                <tr key={member.id}>
                  <td className="px-6 py-4 text-sm text-gray-900">{member.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{member.position}</td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => {
                          console.log('Opening edit form for member:', member);
                          setSelectedTeamMember(member);
                        }}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteTeamMember(member.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedTeamMember && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-2xl">
            <h4 className="text-lg font-bold mb-4">
              {selectedTeamMember.id ? 'Edit Team Member' : 'Add New Team Member'}
            </h4>
            <form className="space-y-4" onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);

              const memberData = new TeamMember(
                selectedTeamMember.id,
                formData.get('name'),
                formData.get('position'),
                formData.get('specializations')?.toString().split(',').map((s) => s.trim()) || [],
                formData.get('education'),
                formData.get('bar_admissions')?.toString().split(',').map((s) => s.trim()) || [],
                formData.get('languages')?.toString().split(',').map((s) => s.trim()) || [],
                formData.get('image_url'),
                formData.get('order_index') ? Number(formData.get('order_index')) : undefined
              );

              console.log('Form submitted with data:', memberData);

              if (selectedTeamMember.id) {
                await handleUpdateTeamMember(memberData);
              } else {
                await handleAddTeamMember(memberData);
              }
            }}>
              <div>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  defaultValue={selectedTeamMember.name}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div>
                <input
                  name="position"
                  type="text"
                  placeholder="Position"
                  defaultValue={selectedTeamMember.position}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div>
                <textarea
                  name="specializations"
                  placeholder="Specializations (comma-separated)"
                  defaultValue={selectedTeamMember.specializations?.join(', ')}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div>
                <input
                  name="education"
                  type="text"
                  placeholder="Education"
                  defaultValue={selectedTeamMember.education}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div>
                <textarea
                  name="bar_admissions"
                  placeholder="Bar Admissions (comma-separated)"
                  defaultValue={selectedTeamMember.bar_admissions?.join(', ')}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div>
                <input
                  name="languages"
                  type="text"
                  placeholder="Languages (comma-separated)"
                  defaultValue={selectedTeamMember.languages?.join(', ')}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div>
                <input
                  name="image_url"
                  type="text"
                  placeholder="Image URL"
                  defaultValue={selectedTeamMember.image_url}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <input
                  name="order_index"
                  type="number"
                  placeholder="Order Index"
                  defaultValue={selectedTeamMember.order_index}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="flex space-x-2">
                <button
                  type="submit"
                  disabled={loading}
                  className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${
                    loading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {loading ? 'Saving...' : 'Save Changes'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    console.log('Closing team member form');
                    setSelectedTeamMember(null);
                  }}
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );

  // News Section (keeping your existing implementation)
  // ... continuing from previous code ...

  // News Section
  const NewsSection = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">News & Insights</h3>
        <button
          onClick={() => setSelectedArticle(null)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add New Article
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Title</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Date</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Category</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {news.map((article) => (
              <tr key={article.id}>
                <td className="px-6 py-4 text-sm text-gray-900">{article.title}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{article.date}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{article.category}</td>
                <td className="px-6 py-4 text-sm">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setSelectedArticle(article)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteNews(article.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedArticle !== null && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-2xl">
            <h4 className="text-lg font-bold mb-4">
              {selectedArticle.id ? 'Edit Article' : 'Add New Article'}
            </h4>
            <form className="space-y-4">
              <div>
                <input
                  name="title"
                  type="text"
                  placeholder="Title"
                  defaultValue={selectedArticle.title}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <input
                  name="date"
                  type="date"
                  defaultValue={selectedArticle.date}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <input
                  name="category"
                  type="text"
                  placeholder="Category"
                  defaultValue={selectedArticle.category}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <textarea
                  name="content"
                  placeholder="Content"
                  defaultValue={selectedArticle.content}
                  rows={6}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="flex space-x-2">
                <button
                  type="button"
                  onClick={(e) => {
                    if (e.target instanceof HTMLElement) {
                      const form = e.target.closest('form');
                      if (form) {
                        const formData = new FormData(form);
                        const articleData = new NewsArticle(
                          selectedArticle.id,
                          formData.get('title'),
                          formData.get('date'),
                          formData.get('content'),
                          formData.get('category')
                        );

                        if (selectedArticle.id) {
                          handleUpdateNews(articleData);
                        } else {
                          handleAddNews(articleData);
                        }
                      }
                    }
                  }}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );

  // Practice Areas Section (Placeholder)
  const PracticeAreasSection = () => (
    <div className="text-center py-8">
      <h3 className="text-xl font-bold mb-4">Practice Areas</h3>
      <p className="text-gray-500">Practice Areas management coming soon...</p>
    </div>
  );

  // Testimonials Section (Placeholder)
  const TestimonialsSection = () => (
    <div className="text-center py-8">
      <h3 className="text-xl font-bold mb-4">Testimonials</h3>
      <p className="text-gray-500">Testimonials management coming soon...</p>
    </div>
  );

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>

      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'team'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('team')}
            >
              Team Members
            </button>
            <button
              className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'news'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('news')}
            >
              News & Insights
            </button>
            <button
              className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'practice'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('practice')}
            >
              Practice Areas
            </button>
            <button
              className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'testimonials'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('testimonials')}
            >
              Testimonials
            </button>
          </nav>
        </div>
      </div>

      <div className="mt-6">
        {activeTab === 'team' && <TeamMembersSection />}
        {activeTab === 'news' && <NewsSection />}
        {activeTab === 'practice' && <PracticeAreasSection />}
        {activeTab === 'testimonials' && <TestimonialsSection />}
      </div>
    </div>
  );
};

export default AdminPanel;