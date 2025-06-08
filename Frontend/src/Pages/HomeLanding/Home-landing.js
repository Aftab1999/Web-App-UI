import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Paper, 
  TextField, 
  ToggleButtonGroup, 
  ToggleButton, 
  Card, 
  CardContent, 
  CardMedia, 
  Chip, 
  IconButton,
  Divider,
  Avatar,
  Button,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SearchIcon from '@mui/icons-material/Search';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import TimelineIcon from '@mui/icons-material/Timeline';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import BusinessIcon from '@mui/icons-material/Business';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import RecommendIcon from '@mui/icons-material/Recommend';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import FlightClassIcon from '@mui/icons-material/FlightClass';
import BoltIcon from '@mui/icons-material/Bolt';
import './Home-landing.css';
import Header from "../Header/Navbar";

// Mock data for news articles
const newsArticles = [
  {
    id: 1,
    title: 'NextGen unveils cutting-edge 8K displays for corporate and educational sectors',
    description: 'NextGen Technologies has introduced state-of-the-art 8K displays designed specifically for professional and academic settings, incorporating next-generation features that enhance collaboration and user experience.',
    date: 'Feb 15, 2025',
    category: 'Innovation Technology',
    image: 'https://source.unsplash.com/random/400x200/?display'
  },
  {
    id: 2,
    title: 'Sustainable Revolution: Eco-Friendly Vehicles Entering Regional Marketplaces',
    date: 'Feb 12, 2025',
    category: 'Transportation Innovation',
    subcategory: 'Sustainable Vehicles'
  },
  {
    id: 3,
    title: 'Tech Giant Advocates for Worldwide AI Regulatory Standards Through Educational Initiatives',
    date: 'Feb 10, 2025',
    category: 'Digital Intelligence',
    company: 'TECH INNOVATORS'
  },
  {
    id: 4,
    title: 'Cost-Effective and Sustainable Energy Solutions for Tomorrow\'s World',
    date: 'Feb 08, 2025',
    category: 'Green Technology',
    subcategory: 'Renewable Resources'
  }
];

// Example questions
const exampleQuestions = [
  {
    id: 1,
    question: 'What emerging technologies are reshaping the Communications & Digital Media landscape?'
  },
  {
    id: 2,
    question: 'Which sectors present the most promising growth opportunities in Cloud Infrastructure?'
  }
];

// Market trends data
const marketTrends = [
  { id: 1, name: 'AI & Machine Learning', growth: '+28%', color: '#4C51BF' },
  { id: 2, name: 'Renewable Energy', growth: '+22%', color: '#38B2AC' },
  { id: 3, name: 'Digital Healthcare', growth: '+19%', color: '#ED64A6' },
  { id: 4, name: 'Cloud Computing', growth: '+24%', color: '#4299E1' }
];

// Client details data
const clientDetails = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  company: "Acme Innovations Inc.",
  status: "Premium User",
  memberSince: "January 2023",
  lastLogin: "Today, 9:45 AM",
  subscription: "Enterprise Plan",
  dataAccess: "Full Access"
};

// Related Reports data
const relatedReports = [
  {
    id: 1,
    title: 'Aircraft Interior Components Market',
    icon: <FlightClassIcon />,
    marketSizeStart: {
      year: '2023',
      value: '27.5'
    },
    marketSizeEnd: {
      year: '2030',
      value: '42.1'
    },
    growth: '3.9%',
    image: 'https://source.unsplash.com/random/400x200/?aircraft-interior'
  },
  {
    id: 2,
    title: 'Lightweight & Small Aircraft Sector',
    icon: <AirplanemodeActiveIcon />,
    marketSizeStart: {
      year: '2023',
      value: '11.4'
    },
    marketSizeEnd: {
      year: '2030',
      value: '19.3'
    },
    growth: '11.2%',
    recommended: true,
    image: 'https://source.unsplash.com/random/400x200/?light-aircraft'
  },
  {
    id: 3,
    title: 'Aviation Electric Propulsion Systems',
    icon: <BoltIcon />,
    marketSizeStart: {
      year: '2023',
      value: '10.8'
    },
    marketSizeEnd: {
      year: '2030',
      value: '26.4'
    },
    growth: '9.4%',
    image: 'https://source.unsplash.com/random/400x200/?electric-aircraft'
  },
  {
    id: 4,
    title: 'Commercial Aircraft Maintenance Solutions',
    icon: <FlightTakeoffIcon />,
    marketSizeStart: {
      year: '2023',
      value: '15.2'
    },
    marketSizeEnd: {
      year: '2030',
      value: '28.9'
    },
    growth: '8.1%',
    image: 'https://source.unsplash.com/random/400x200/?aircraft-maintenance'
  }
];

const HomeLanding = () => {
  const [viewMode, setViewMode] = useState('insight');
  const [tabValue, setTabValue] = useState(0);

  const handleViewChange = (event, newView) => {
    if (newView !== null) {
      setViewMode(newView);
    }
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <Header />
      
      <div className="dashboard-layout">
        {/* Client Details Sidebar */}
        <div className="sidebar">
          <div className="sidebar-header">
            <Avatar className="user-avatar">JD</Avatar>
            <Typography variant="subtitle1" className="user-name">{clientDetails.name}</Typography>
            <Chip label={clientDetails.status} size="small" className="user-status" />
          </div>
          
          {/* Client Details Card */}
          <div className="client-details-card">
            <Typography variant="subtitle2" className="details-section-title">
              Account Information
            </Typography>
            
            <div className="client-detail-item">
              <EmailIcon className="detail-icon" />
              <div>
                <Typography variant="caption" className="detail-label">Email</Typography>
                <Typography variant="body2" className="detail-value">{clientDetails.email}</Typography>
              </div>
            </div>
            
            <div className="client-detail-item">
              <PhoneIcon className="detail-icon" />
              <div>
                <Typography variant="caption" className="detail-label">Phone</Typography>
                <Typography variant="body2" className="detail-value">{clientDetails.phone}</Typography>
              </div>
            </div>
            
            <div className="client-detail-item">
              <BusinessIcon className="detail-icon" />
              <div>
                <Typography variant="caption" className="detail-label">Company</Typography>
                <Typography variant="body2" className="detail-value">{clientDetails.company}</Typography>
              </div>
            </div>
            
            <Divider className="details-divider" />
            
            <Typography variant="subtitle2" className="details-section-title">
              Subscription Status
            </Typography>
            
            <div className="client-detail-item">
              <VerifiedUserIcon className="detail-icon verified" />
              <div>
                <Typography variant="caption" className="detail-label">Plan</Typography>
                <Typography variant="body2" className="detail-value">{clientDetails.subscription}</Typography>
              </div>
            </div>
            
            <div className="subscription-info">
              <Chip 
                label={clientDetails.dataAccess} 
                size="small" 
                color="primary" 
                className="access-chip"
              />
              <Typography variant="caption" className="member-since">
                Member since {clientDetails.memberSince}
              </Typography>
            </div>
            
            <Typography variant="caption" className="last-login">
              Last login: {clientDetails.lastLogin}
            </Typography>
          </div>
        </div>
        
        {/* Main content */}
        <div className="main-content">
          {/* Top bar */}
          <div className="top-bar">
            <div className="search-container">
              <TextField
                placeholder="Search for market insights..."
                variant="outlined"
                fullWidth
                InputProps={{
                  startAdornment: <SearchIcon className="search-icon" />,
                }}
                className="search-field"
              />
            </div>

            {/* <div className="top-actions">
              <ToggleButtonGroup
                value={viewMode}
                exclusive
                onChange={handleViewChange}
                aria-label="view mode"
                size="small"
                className="view-toggle"
              >
                <ToggleButton value="insight" aria-label="insight view">
                  Insight Explorer
                </ToggleButton>
                <ToggleButton value="classic" aria-label="classic view">
                  Standard View
                </ToggleButton>
              </ToggleButtonGroup>
              <IconButton className="notification-btn">
                <NotificationsIcon />
              </IconButton>
            </div> */}

          </div>
          
          {/* Welcome section */}
          <div className="welcome-section">
            <Typography variant="h4" className="welcome-title">
              Welcome, {clientDetails.name}!
            </Typography>
            <Typography variant="subtitle1" className="welcome-subtitle">
              Discover Intelligence-Driven Market Analysis and Sector Growth Possibilities at Your Fingertips.
            </Typography>
          </div>
          
          {/* Main dashboard grid */}
          <div className="dashboard-grid">
            {/* Left column */}
            <div className="left-column">
              {/* AI query card */}
              <Card className="ai-query-card">
                <CardContent>
                  <Typography variant="h6" className="card-title">
                    Access Intelligence-Powered Market Insights
                  </Typography>
                  
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Specify your business inquiry..."
                    InputProps={{
                      startAdornment: <SearchIcon className="query-icon" />,
                    }}
                    className="query-input"
                  />
                  
                  <Divider className="card-divider" />
                  
                  <Typography variant="subtitle2" className="suggestions-title">
                    Suggested Queries
                  </Typography>
                  
                  <div className="query-suggestions">
                    {exampleQuestions.map((q) => (
                      <Paper 
                        key={q.id} 
                        elevation={0}
                        className="query-suggestion"
                      >
                        <Typography variant="body2">{q.question}</Typography>
                      </Paper>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Market trends card */}
              <Card className="market-trends-card">
                <CardContent>
                  <Typography variant="h6" className="card-title">
                    Top Market Trends
                  </Typography>
                  
                  <div className="trends-list">
                    {marketTrends.map((trend) => (
                      <div key={trend.id} className="trend-item">
                        <div className="trend-info">
                          <div 
                            className="trend-color" 
                            style={{ backgroundColor: trend.color }} 
                          />
                          <Typography variant="body2" className="trend-name">
                            {trend.name}
                          </Typography>
                        </div>
                        <Typography variant="body2" className="trend-growth" style={{ color: trend.color }}>
                          {trend.growth}
                        </Typography>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outlined" className="view-trends-btn">
                    View Detailed Report
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            {/* Right column */}
            <div className="right-column">
              {/* News tabs */}
              <Card className="news-tabs-card">
                <CardContent>
                  <div className="tabs-header">
                    <Typography variant="h6" className="card-title">
                      Breaking Insights
                    </Typography>
                    <Chip label="Feb 15, 2025" size="small" className="date-chip" />
                  </div>
                  
                  <Tabs
                    value={tabValue}
                    onChange={handleTabChange}
                    className="news-tabs"
                  >
                    <Tab label="Featured" />
                    <Tab label="Latest" />
                    <Tab label="Trending" />
                  </Tabs>
                  
                  {/* Featured article */}
                  <div className="featured-article">
                    <div className="article-content">
                      <Typography variant="h5" className="article-title">
                        {newsArticles[0].title}
                      </Typography>
                      <Typography variant="body2" className="article-description">
                        {newsArticles[0].description}
                      </Typography>
                      <Chip 
                        label={newsArticles[0].category} 
                        size="small"
                        className="article-category"
                      />
                    </div>
                    <div className="article-image">
                      <img src={newsArticles[0].image} alt={newsArticles[0].title} />
                    </div>
                  </div>
                  
                  {/* News grid */}
                  <div className="news-grid">
                    {newsArticles.slice(1).map((article) => (
                      <Card key={article.id} className="news-item">
                        <CardContent>
                          <div className="article-meta">
                            <div className="meta-left">
                              <Chip 
                                label="N" 
                                size="small" 
                                className="news-indicator"
                              />
                              <Typography variant="caption">{article.date}</Typography>
                            </div>
                          </div>
                          <Typography variant="subtitle1" className="item-title">
                            {article.title}
                          </Typography>
                          <div className="article-tags">
                            <Chip 
                              label={article.category}
                              size="small"
                              className="article-tag"
                            />
                            {article.subcategory && (
                              <Chip 
                                label={article.subcategory}
                                size="small"
                                className="article-tag"
                              />
                            )}
                            {article.company && (
                              <Chip 
                                label={article.company}
                                size="small"
                                className="article-tag"
                              />
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  {/* News footer */}
                  <div className="news-footer">
                    <Button variant="outlined" className="request-btn">
                      Request In-Depth Evaluation
                    </Button>
                    <div className="pagination">
                      <IconButton size="small" className="page-btn">
                        <ArrowBackIosNewIcon fontSize="small" />
                      </IconButton>
                      <IconButton size="small" className="page-btn">
                        <ArrowForwardIosIcon fontSize="small" />
                      </IconButton>
                      <Button variant="text" className="view-all-btn">
                        Browse Complete Collection
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Related Reports Section */}
          <div className="related-reports-section">
            <div className="reports-header">
              <div className="reports-title-container">
                <Typography variant="h5" className="reports-title">
                  Industry Research Reports
                </Typography>
                <Chip label="235" size="small" className="reports-count" />
              </div>
              <Button 
                variant="text" 
                endIcon={<ArrowForwardIosIcon fontSize="small" />} 
                className="view-all-reports"
              >
                View Complete Research Library
              </Button>
            </div>
            
            <div className="reports-grid">
              {relatedReports.map((report) => (
                <Card key={report.id} className="report-card">
                  <div className="report-card-content">
                    <div className="report-header">
                      <div className="report-icon-container">
                        {report.icon}
                      </div>
                      {report.recommended && (
                        <Chip 
                          icon={<RecommendIcon fontSize="small" />} 
                          label="Recommended" 
                          size="small" 
                          className="recommended-tag" 
                        />
                      )}
                    </div>
                    
                    <Typography variant="h6" className="report-title">
                      {report.title}
                    </Typography>
                    
                    <div className="market-size-container">
                      <div className="market-size-box">
                        <Typography variant="caption" className="market-size-label">
                          Market Value ({report.marketSizeStart.year})
                        </Typography>
                        <div className="market-size-value-container">
                          <Typography variant="h6" className="market-size-value">
                            {report.marketSizeStart.value}
                          </Typography>
                          <Typography variant="caption" className="market-size-unit">
                            Bn
                          </Typography>
                        </div>
                      </div>
                      
                      <div className="market-size-arrow">
                        <TrendingUpOutlinedIcon fontSize="small" />
                      </div>
                      
                      <div className="market-size-box">
                        <Typography variant="caption" className="market-size-label">
                          Forecast ({report.marketSizeEnd.year})
                        </Typography>
                        <div className="market-size-value-container">
                          <Typography variant="h6" className="market-size-value">
                            {report.marketSizeEnd.value}
                          </Typography>
                          <Typography variant="caption" className="market-size-unit">
                            Bn
                          </Typography>
                        </div>
                      </div>
                    </div>
                    
                    <div className="report-footer">
                      <Chip 
                        label={`CAGR ${report.growth}`} 
                        className="growth-chip" 
                        size="small" 
                      />
                      <Button variant="outlined" size="small" className="view-report-btn">
                        Details
                      </Button>
                    </div>
                  </div>
                  
                  <div className="report-image-container">
                    <img 
                      src={report.image} 
                      alt={report.title} 
                      className="report-image" 
                    />
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="reports-navigation">
              <IconButton className="nav-arrow prev">
                <ArrowBackIosNewIcon />
              </IconButton>
              <IconButton className="nav-arrow next">
                <ArrowForwardIosIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeLanding;
