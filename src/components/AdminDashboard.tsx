import { Search, Filter, Mail, Clock, CheckCircle, XCircle, Eye, Trash2, Download } from 'lucide-react';
import { useState } from 'react';

export function AdminDashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Mock data for user messages
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@example.com',
      company: 'TechCorp Solutions',
      service: 'Software Development',
      message: 'We need a custom CRM system for our sales team with advanced analytics capabilities.',
      date: '2024-12-10',
      time: '14:30',
      status: 'unread',
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'michael.chen@startup.io',
      company: 'Startup.io',
      service: 'Cloud Solutions',
      message: 'Looking to migrate our infrastructure to AWS. Need consultation and implementation support.',
      date: '2024-12-10',
      time: '11:15',
      status: 'read',
    },
    {
      id: 3,
      name: 'Emma Davis',
      email: 'emma.davis@enterprise.com',
      company: 'Enterprise Inc',
      service: 'Mobile Development',
      message: 'Interested in developing a cross-platform mobile app for our e-commerce business.',
      date: '2024-12-09',
      time: '16:45',
      status: 'responded',
    },
    {
      id: 4,
      name: 'James Wilson',
      email: 'james@logistics.net',
      company: 'LogisticsPro',
      service: 'Logistics',
      message: 'Need a supply chain management system with real-time tracking capabilities.',
      date: '2024-12-09',
      time: '09:20',
      status: 'unread',
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      email: 'lisa.a@construction.com',
      company: 'BuildRight Construction',
      service: 'Construction',
      message: 'Exploring options for project management software for our construction projects.',
      date: '2024-12-08',
      time: '13:00',
      status: 'read',
    },
  ]);

  const [selectedMessage, setSelectedMessage] = useState<typeof messages[0] | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'unread': return 'text-cyan bg-cyan/20 border-cyan/50';
      case 'read': return 'text-tan bg-tan/20 border-tan/50';
      case 'responded': return 'text-green-400 bg-green-400/20 border-green-400/50';
      default: return 'text-tan bg-tan/20 border-tan/50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'unread': return <Mail size={14} />;
      case 'read': return <Eye size={14} />;
      case 'responded': return <CheckCircle size={14} />;
      default: return <Mail size={14} />;
    }
  };

  const filteredMessages = messages.filter(msg => {
    const matchesSearch = 
      msg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      msg.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      msg.company.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || msg.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: messages.length,
    unread: messages.filter(m => m.status === 'unread').length,
    read: messages.filter(m => m.status === 'read').length,
    responded: messages.filter(m => m.status === 'responded').length,
  };

  const handleDeleteMessage = (id: number) => {
    setMessages(messages.filter(m => m.id !== id));
    if (selectedMessage?.id === id) {
      setSelectedMessage(null);
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-beige mb-2">Admin Dashboard</h1>
          <p className="text-tan">Manage incoming user messages and inquiries</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-dark-card border border-tech-green/30 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-tan text-sm">Total Messages</span>
              <Mail className="text-cyan" size={20} />
            </div>
            <div className="text-3xl font-bold text-beige">{stats.total}</div>
          </div>

          <div className="bg-dark-card border border-cyan/30 rounded-2xl p-6 glow-cyan">
            <div className="flex items-center justify-between mb-2">
              <span className="text-tan text-sm">Unread</span>
              <div className="w-8 h-8 bg-cyan/20 rounded-full flex items-center justify-center">
                <Mail className="text-cyan" size={16} />
              </div>
            </div>
            <div className="text-3xl font-bold text-cyan">{stats.unread}</div>
          </div>

          <div className="bg-dark-card border border-tech-green/30 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-tan text-sm">Read</span>
              <Eye className="text-tan" size={20} />
            </div>
            <div className="text-3xl font-bold text-beige">{stats.read}</div>
          </div>

          <div className="bg-dark-card border border-tech-green/30 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-tan text-sm">Responded</span>
              <CheckCircle className="text-green-400" size={20} />
            </div>
            <div className="text-3xl font-bold text-beige">{stats.responded}</div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-dark-card border border-tech-green/30 rounded-2xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan" size={20} />
              <input
                type="text"
                placeholder="Search messages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-tech-green/20 border border-cyan/30 rounded-lg text-beige placeholder-tan/50 focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/20 transition-all"
              />
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-2">
              <Filter className="text-cyan" size={20} />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-3 bg-tech-green/20 border border-cyan/30 rounded-lg text-beige focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/20 transition-all"
              >
                <option value="all">All Status</option>
                <option value="unread">Unread</option>
                <option value="read">Read</option>
                <option value="responded">Responded</option>
              </select>
            </div>

            {/* Export Button */}
            <button className="px-6 py-3 bg-gradient-to-r from-cyan to-tech-green text-dark-bg rounded-lg flex items-center gap-2 hover:scale-105 transition-all duration-300 glow-cyan-hover">
              <Download size={18} />
              Export
            </button>
          </div>
        </div>

        {/* Messages Table */}
        <div className="bg-dark-card border border-tech-green/30 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-tech-green/30 border-b border-tech-green/30">
                <tr>
                  <th className="px-6 py-4 text-left text-cyan text-sm font-semibold">Name</th>
                  <th className="px-6 py-4 text-left text-cyan text-sm font-semibold hidden md:table-cell">Company</th>
                  <th className="px-6 py-4 text-left text-cyan text-sm font-semibold hidden lg:table-cell">Service</th>
                  <th className="px-6 py-4 text-left text-cyan text-sm font-semibold">Date</th>
                  <th className="px-6 py-4 text-left text-cyan text-sm font-semibold">Status</th>
                  <th className="px-6 py-4 text-left text-cyan text-sm font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-tech-green/20">
                {filteredMessages.map((message) => (
                  <tr
                    key={message.id}
                    className="hover:bg-tech-green/10 transition-colors cursor-pointer"
                    onClick={() => setSelectedMessage(message)}
                  >
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-beige font-medium">{message.name}</div>
                        <div className="text-tan text-sm">{message.email}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-tan hidden md:table-cell">{message.company}</td>
                    <td className="px-6 py-4 text-tan hidden lg:table-cell">{message.service}</td>
                    <td className="px-6 py-4">
                      <div className="text-beige text-sm">{message.date}</div>
                      <div className="text-tan text-xs">{message.time}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 border rounded-full text-xs ${getStatusColor(message.status)}`}>
                        {getStatusIcon(message.status)}
                        {message.status.charAt(0).toUpperCase() + message.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteMessage(message.id);
                        }}
                        className="p-2 text-tan hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredMessages.length === 0 && (
            <div className="py-12 text-center">
              <Mail className="mx-auto text-tan mb-4" size={48} />
              <p className="text-tan">No messages found</p>
            </div>
          )}
        </div>

        {/* Message Detail Modal */}
        {selectedMessage && (
          <div
            className="fixed inset-0 bg-dark-bg/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMessage(null)}
          >
            <div
              className="bg-dark-card border border-cyan/30 rounded-3xl max-w-2xl w-full p-8 glow-cyan"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-beige mb-2">{selectedMessage.name}</h3>
                  <p className="text-cyan">{selectedMessage.email}</p>
                </div>
                <button
                  onClick={() => setSelectedMessage(null)}
                  className="p-2 text-tan hover:text-beige hover:bg-tech-green/30 rounded-lg transition-colors"
                >
                  <XCircle size={24} />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-tan text-sm mb-1">Company</div>
                    <div className="text-beige">{selectedMessage.company}</div>
                  </div>
                  <div>
                    <div className="text-tan text-sm mb-1">Service</div>
                    <div className="text-beige">{selectedMessage.service}</div>
                  </div>
                </div>

                <div>
                  <div className="text-tan text-sm mb-1">Date & Time</div>
                  <div className="text-beige flex items-center gap-2">
                    <Clock size={16} />
                    {selectedMessage.date} at {selectedMessage.time}
                  </div>
                </div>

                <div>
                  <div className="text-tan text-sm mb-2">Message</div>
                  <div className="bg-tech-green/20 border border-cyan/20 rounded-xl p-4 text-beige">
                    {selectedMessage.message}
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan to-tech-green text-dark-bg rounded-lg hover:scale-105 transition-all duration-300 glow-cyan-hover">
                  Reply via Email
                </button>
                <button
                  onClick={() => handleDeleteMessage(selectedMessage.id)}
                  className="px-6 py-3 bg-red-500/20 border border-red-500/50 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
