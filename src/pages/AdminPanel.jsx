import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Table, Button, Form, Input, Select, Upload, message } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  BookOutlined,
  FileTextOutlined,
  SettingOutlined,
  LogoutOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { Option } = Select;

// Mock Data for Attorneys
const initialAttorneys = [
  {
    key: '1',
    name: 'Sarah Johnson',
    role: 'Managing Partner',
    specialties: ['Corporate Law', 'Mergers & Acquisitions'],
    education: 'LLM in Corporate Law, Harvard Law School',
    email: 'sarah@paragonlaw.com.np',
    phone: '+977-1-4444444',
  },
  {
    key: '2',
    name: 'Michael Chen',
    role: 'Senior Partner',
    specialties: ['Criminal Defense', 'Civil Litigation'],
    education: 'LLB, Tribhuvan University',
    email: 'michael@paragonlaw.com.np',
    phone: '+977-1-4444445',
  },
];

// Admin Panel Component
const AdminPanel = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activePage, setActivePage] = useState('dashboard');
  const [attorneys, setAttorneys] = useState(initialAttorneys);

  // Handle Sidebar Collapse
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  // Render Active Page Content
  const renderContent = () => {
    switch (activePage) {
      case 'attorneys':
        return <ManageAttorneys attorneys={attorneys} setAttorneys={setAttorneys} />;
      case 'practice-areas':
        return <ManagePracticeAreas />;
      case 'news':
        return <ManageNews />;
      case 'contact-info':
        return <ManageContactInfo />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout style={{ minHeight: '100vh', background: '#0F172A' }}>
      <Sider 
        collapsible 
        collapsed={collapsed} 
        onCollapse={toggleCollapsed}
        style={{ 
          background: '#1E293B',
          borderRight: '1px solid rgba(255, 255, 255, 0.1)',
          minHeight: '100vh',
          position: 'absolute',
          left: 0,
          top: 120,
          bottom: 0,
          zIndex: 2
        }}
      >
        {/* Logo Section */}
        <div 
          className="logo" 
          style={{ 
            height: '50px',
            padding: '0 24px',
            background: '#0F172A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: collapsed ? 'center' : 'flex-start',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <h1 style={{ color: '#FBBF24', margin: 0, fontSize: collapsed ? '20px' : '24px' }}>
            {collapsed ? 'PLA' : 'Admin'}
          </h1>
        </div>

        {/* Menu Section */}
        <Menu 
          theme="dark" 
          defaultSelectedKeys={['dashboard']} 
          mode="inline"
          style={{ 
            background: '#1E293B',
            borderRight: 'none',
            padding: '16px 0'
          }}
        >
          {/* Menu Items */}
          <Menu.Item key="dashboard" icon={<HomeOutlined style={{ color: '#FBBF24' }} />} onClick={() => setActivePage('dashboard')}>
            <span style={{ color: '#E5E7EB' }}>Dashboard</span>
          </Menu.Item>
          <Menu.Item key="attorneys" icon={<UserOutlined style={{ color: '#FBBF24' }} />} onClick={() => setActivePage('attorneys')}>
            <span style={{ color: '#E5E7EB' }}>Manage Attorneys</span>
          </Menu.Item>
          <Menu.Item key="practice-areas" icon={<BookOutlined style={{ color: '#FBBF24' }} />} onClick={() => setActivePage('practice-areas')}>
            <span style={{ color: '#E5E7EB' }}>Manage Practice Areas</span>
          </Menu.Item>
          <Menu.Item key="news" icon={<FileTextOutlined style={{ color: '#FBBF24' }} />} onClick={() => setActivePage('news')}>
            <span style={{ color: '#E5E7EB' }}>Manage News</span>
          </Menu.Item>
          <Menu.Item key="contact-info" icon={<SettingOutlined style={{ color: '#FBBF24' }} />} onClick={() => setActivePage('contact-info')}>
            <span style={{ color: '#E5E7EB' }}>Manage Contact Info</span>
          </Menu.Item>
          <Menu.Item key="logout" icon={<LogoutOutlined style={{ color: '#FBBF24' }} />}>
            <span style={{ color: '#E5E7EB' }}>Logout</span>
          </Menu.Item>
        </Menu>
      </Sider>

      {/* Main Content Layout */}
      <Layout style={{ 
        background: '#0F172A',
        marginLeft: collapsed ? 80 : 200,
        transition: 'all 0.2s',
        minHeight: '100vh'
      }}>
        {/* Header */}
        <Header style={{ 
          padding: '0 32px', 
          background: '#1E293B',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          position: 'fixed',
          top: 0,
          right: 0,
          left: collapsed ? 80 : 200,
          zIndex: 1,
          transition: 'all 0.2s',
          display: 'flex',
          alignItems: 'center',
          minHeight: 100
        }}>
          <h2 style={{ color: '#FBBF24', margin: 0, fontSize: '20px' }}>
            {activePage.charAt(0).toUpperCase() + activePage.slice(1)}
          </h2>
        </Header>

        {/* Content Area */}
        <Content style={{ 
          margin: '80px 24px 24px',
          padding: '24px',
          minHeight: 'calc(100vh - 188px)'
        }}>
          <Breadcrumb style={{ marginBottom: '24px' }}>
            <Breadcrumb.Item><span style={{ color: '#E5E7EB' }}>Admin</span></Breadcrumb.Item>
            <Breadcrumb.Item><span style={{ color: '#FBBF24' }}>
              {activePage.charAt(0).toUpperCase() + activePage.slice(1)}
            </span></Breadcrumb.Item>
          </Breadcrumb>

          {/* Content Container */}
          <div style={{ 
            padding: '32px',
            background: '#1E293B',
            borderRadius: '12px',
            minHeight: 570,
            color: '#E5E7EB'
          }}>
            {renderContent()}
          </div>
        </Content>

        {/* Footer */}
        <Footer style={{ 
          textAlign: 'center', 
          background: '#1E293B',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          color: '#E5E7EB',
          padding: '16px',
          marginTop: 'auto'
        }}>
          Khusi Law Group ©2023
        </Footer>
      </Layout>
    </Layout>
  );
};

// Dashboard Component
const Dashboard = () => {
  return (
    <div>
      <h2>Welcome to the Admin Panel</h2>
      <p>Here you can manage attorneys, practice areas, news, and contact information.</p>
    </div>
  );
};

// Manage Attorneys Component
const ManageAttorneys = ({ attorneys, setAttorneys }) => {
  const [form] = Form.useForm();

  const handleAddAttorney = (values) => {
    const newAttorney = { ...values, key: `${attorneys.length + 1}` };
    setAttorneys([...attorneys, newAttorney]);
    form.resetFields();
    message.success('Attorney added successfully!');
  };

  const handleDeleteAttorney = (key) => {
    const updatedAttorneys = attorneys.filter((attorney) => attorney.key !== key);
    setAttorneys(updatedAttorneys);
    message.success('Attorney deleted successfully!');
  };

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Role', dataIndex: 'role', key: 'role' },
    { title: 'Specialties', dataIndex: 'specialties', key: 'specialties', render: (text) => text.join(', ') },
    { title: 'Education', dataIndex: 'education', key: 'education' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Phone', dataIndex: 'phone', key: 'phone' },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button type="link" danger onClick={() => handleDeleteAttorney(record.key)}>
          Delete
        </Button>
      ),
    },
  ];

  // Update form styles
  const formStyles = {
    label: {
      color: '#FBBF24'
    },
    input: {
      background: '#0F172A',
      borderColor: 'rgba(255, 255, 255, 0.1)',
      color: '#E5E7EB'
    },
    button: {
      background: '#FBBF24',
      borderColor: '#FBBF24',
      color: '#0F172A',
      marginTop: '16px'
    }
  };

  return (
    <div>
      <h2 style={{ color: '#FBBF24', marginBottom: '24px' }}>Manage Attorneys</h2>
      <Form form={form} onFinish={handleAddAttorney} layout="vertical">
        <Form.Item 
          label={<span style={formStyles.label}>Name</span>} 
          name="name" 
          rules={[{ required: true, message: 'Please enter the attorney name!' }]}
        >
          <Input style={formStyles.input} placeholder="Enter name" />
        </Form.Item>
        <Form.Item 
          label={<span style={formStyles.label}>Role</span>} 
          name="role" 
          rules={[{ required: true, message: 'Please enter the role!' }]}
        >
          <Input style={formStyles.input} placeholder="Enter role" />
        </Form.Item>
        <Form.Item 
          label={<span style={formStyles.label}>Specialties</span>} 
          name="specialties" 
          rules={[{ required: true, message: 'Please select specialties!' }]}
        >
          <Select mode="multiple" style={formStyles.input} placeholder="Select specialties">
            <Option value="Corporate Law">Corporate Law</Option>
            <Option value="Family Law">Family Law</Option>
            <Option value="Criminal Defense">Criminal Defense</Option>
            <Option value="Real Estate">Real Estate</Option>
            <Option value="Intellectual Property">Intellectual Property</Option>
          </Select>
        </Form.Item>
        <Form.Item 
          label={<span style={formStyles.label}>Education</span>} 
          name="education" 
          rules={[{ required: true, message: 'Please enter education details!' }]}
        >
          <Input style={formStyles.input} placeholder="Enter education" />
        </Form.Item>
        <Form.Item 
          label={<span style={formStyles.label}>Email</span>} 
          name="email" 
          rules={[{ required: true, message: 'Please enter the email!' }]}
        >
          <Input style={formStyles.input} placeholder="Enter email" />
        </Form.Item>
        <Form.Item 
          label={<span style={formStyles.label}>Phone</span>} 
          name="phone" 
          rules={[{ required: true, message: 'Please enter the phone number!' }]}
        >
          <Input style={formStyles.input} placeholder="Enter phone number" />
        </Form.Item>
        <Button type="primary" htmlType="submit" style={formStyles.button}>
          Add Attorney
        </Button>
      </Form>
      <Table 
        dataSource={attorneys} 
        columns={columns} 
        rowKey="key" 
        style={{ 
          marginTop: 20,
          background: '#1E293B',
          borderRadius: '8px'
        }} 
      />
    </div>
  );
};

// Manage Practice Areas Component
const ManagePracticeAreas = () => {
  return (
    <div>
      <h2>Manage Practice Areas</h2>
      <p>Coming Soon...</p>
    </div>
  );
};

// Manage News Component
const ManageNews = () => {
  return (
    <div>
      <h2>Manage News</h2>
      <p>Coming Soon...</p>
    </div>
  );
};

// Manage Contact Info Component
const ManageContactInfo = () => {
  return (
    <div>
      <h2>Manage Contact Information</h2>
      <p>Coming Soon...</p>
    </div>
  );
};

export default AdminPanel;