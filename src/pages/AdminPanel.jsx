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
    <Layout style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <Sider collapsible collapsed={collapsed} onCollapse={toggleCollapsed}>
        <div className="logo" style={{ height: '32px', margin: '16px', background: 'rgba(255, 255, 255, 0.2)' }} />
        <Menu theme="dark" defaultSelectedKeys={['dashboard']} mode="inline">
          <Menu.Item key="dashboard" icon={<HomeOutlined />} onClick={() => setActivePage('dashboard')}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="attorneys" icon={<UserOutlined />} onClick={() => setActivePage('attorneys')}>
            Manage Attorneys
          </Menu.Item>
          <Menu.Item key="practice-areas" icon={<BookOutlined />} onClick={() => setActivePage('practice-areas')}>
            Manage Practice Areas
          </Menu.Item>
          <Menu.Item key="news" icon={<FileTextOutlined />} onClick={() => setActivePage('news')}>
            Manage News
          </Menu.Item>
          <Menu.Item key="contact-info" icon={<SettingOutlined />} onClick={() => setActivePage('contact-info')}>
            Manage Contact Info
          </Menu.Item>
          <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={() => alert('Logged Out!')}>
            Logout
          </Menu.Item>
        </Menu>
      </Sider>

      {/* Main Content */}
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
            <Breadcrumb.Item>{activePage.charAt(0).toUpperCase() + activePage.slice(1)}</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {renderContent()}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Paragon Law Associates ©2023</Footer>
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

  return (
    <div>
      <h2>Manage Attorneys</h2>
      <Form form={form} onFinish={handleAddAttorney} layout="vertical">
        <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter the attorney name!' }]}>
          <Input placeholder="Enter name" />
        </Form.Item>
        <Form.Item label="Role" name="role" rules={[{ required: true, message: 'Please enter the role!' }]}>
          <Input placeholder="Enter role" />
        </Form.Item>
        <Form.Item label="Specialties" name="specialties" rules={[{ required: true, message: 'Please select specialties!' }]}>
          <Select mode="multiple" placeholder="Select specialties">
            <Option value="Corporate Law">Corporate Law</Option>
            <Option value="Family Law">Family Law</Option>
            <Option value="Criminal Defense">Criminal Defense</Option>
            <Option value="Real Estate">Real Estate</Option>
            <Option value="Intellectual Property">Intellectual Property</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Education" name="education" rules={[{ required: true, message: 'Please enter education details!' }]}>
          <Input placeholder="Enter education" />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter the email!' }]}>
          <Input placeholder="Enter email" />
        </Form.Item>
        <Form.Item label="Phone" name="phone" rules={[{ required: true, message: 'Please enter the phone number!' }]}>
          <Input placeholder="Enter phone number" />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Add Attorney
        </Button>
      </Form>
      <Table dataSource={attorneys} columns={columns} rowKey="key" style={{ marginTop: 20 }} />
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