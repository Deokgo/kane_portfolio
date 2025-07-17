import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  TrendingUp,
  Visibility,
  People,
  DateRange,
  Download,
  Refresh,
  Delete,
  BarChart,
  Timeline
} from '@mui/icons-material';
import { AnalyticsUtils } from './utils/analytics';
import { useThemeMode } from './ThemeContext';

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`analytics-tabpanel-${index}`}
      aria-labelledby={`analytics-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function Analytics() {
  const theme = useTheme();
  const { mode } = useThemeMode();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [tabValue, setTabValue] = useState(0);
  const [analyticsData, setAnalyticsData] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const loadAnalyticsData = () => {
    const data = AnalyticsUtils.getAnalyticsData();
    setAnalyticsData(data);
  };

  useEffect(() => {
    loadAnalyticsData();
    // Track analytics page view
    AnalyticsUtils.trackPageView('analytics');
  }, []);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleClearData = () => {
    AnalyticsUtils.clearAnalyticsData();
    loadAnalyticsData();
    setDeleteDialogOpen(false);
  };

  const handleExportData = () => {
    AnalyticsUtils.exportAnalyticsData();
  };

  if (!analyticsData) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography>Loading analytics data...</Typography>
      </Box>
    );
  }

  const dailyData = AnalyticsUtils.getViewsByDateRange(
    new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    new Date().toISOString().split('T')[0]
  );

  const weeklyData = AnalyticsUtils.getWeeklyData(8);
  const monthlyData = AnalyticsUtils.getMonthlyData(6);
  const topPages = AnalyticsUtils.getTopPages(30);

  const totalViewsLast30Days = dailyData.reduce((sum, day) => sum + day.total, 0);
  const totalViewsLast7Days = dailyData.slice(-7).reduce((sum, day) => sum + day.total, 0);
  const avgViewsPerDay = totalViewsLast30Days / 30;

  const StatsCard = ({ title, value, icon: Icon, subtitle }) => (
    <Card 
      sx={{ 
        height: '100%',
        backgroundColor: mode === 'light' 
          ? 'rgba(255, 255, 255, 0.8)' 
          : 'rgba(255, 255, 255, 0.03)',
        border: `1px solid ${mode === 'light' ? '#E0E0E0' : '#424242'}`,
        borderRadius: 2,
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: mode === 'light' 
            ? 'rgba(231, 105, 75, 0.05)' 
            : 'rgba(255, 255, 255, 0.08)',
          borderColor: '#E7694B',
          transform: 'translateY(-2px)',
          boxShadow: mode === 'light' 
            ? '0 4px 12px rgba(231, 105, 75, 0.2)' 
            : '0 4px 12px rgba(255, 255, 255, 0.1)'
        }
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Icon sx={{ mr: 1, color: theme.palette.primary.main }} />
          <Typography variant="h6" component="div">
            {title}
          </Typography>
        </Box>
        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
          {value}
        </Typography>
        {subtitle && (
          <Typography variant="body2" color="text.secondary">
            {subtitle}
          </Typography>
        )}
      </CardContent>
    </Card>
  );

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        minHeight: { xs: '100vh', md: 'unset' },
        position: 'relative',
        mt: { xs: 10, md: 13 },
        pb: 5,
        gap: { xs: 2, sm: 3 },
      }}
    >
      <Container maxWidth='auto'>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" component="h1" sx={{ fontFamily: 'Kalnia, serif', color: theme.palette.text.primary }}>
            Portfolio Analytics
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton onClick={loadAnalyticsData} title="Refresh">
              <Refresh />
            </IconButton>
            <IconButton onClick={handleExportData} title="Export Data">
              <Download />
            </IconButton>
            <IconButton 
              onClick={() => setDeleteDialogOpen(true)} 
              title="Clear Data"
              sx={{ color: '#E7694B' }} // Use a custom color for the delete icon
            >
              <Delete />
            </IconButton>
          </Box>
        </Box>

        {/* Overview Stats */}
        <Grid container spacing={3} sx={{ mb: 4, justifyContent: 'center' }}>
          <Grid item xs={12} sm={6} md={3}>
            <StatsCard
              title="Total Views"
              value={analyticsData.totalVisits.toLocaleString()}
              icon={Visibility}
              subtitle="All time"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatsCard
              title="Last 7 Days"
              value={totalViewsLast7Days}
              icon={TrendingUp}
              subtitle="Recent activity"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatsCard
              title="Last 30 Days"
              value={totalViewsLast30Days}
              icon={DateRange}
              subtitle="Monthly views"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatsCard
              title="Avg/Day"
              value={avgViewsPerDay.toFixed(1)}
              icon={BarChart}
              subtitle="30-day average"
            />
          </Grid>
        </Grid>

        {/* Tabs */}
        <Paper 
          sx={{ 
            width: '100%', 
            mb: 3,
            backgroundColor: mode === 'light' 
              ? 'rgba(255, 255, 255, 0.8)' 
              : 'rgba(255, 255, 255, 0.03)',
            border: `1px solid ${mode === 'light' ? '#E0E0E0' : '#424242'}`,
            borderRadius: 2,
          }}
        >
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant={isMobile ? "scrollable" : "standard"}
          scrollButtons="auto"
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab label="Daily Views" />
          <Tab label="Weekly Summary" />
          <Tab label="Monthly Summary" />
          <Tab label="Top Pages" />
        </Tabs>

        <TabPanel value={tabValue} index={0}>
          <Typography variant="h6" gutterBottom>
            Daily Views (Last 30 Days)
          </Typography>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Date</TableCell>
                  <TableCell align="center">Total Views</TableCell>
                  <TableCell align="center">Sessions</TableCell>
                  <TableCell align="center">Top Pages</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dailyData.slice(-15).reverse().map((day) => (
                  <TableRow key={day.date}>
                    <TableCell>
                      {new Date(day.date).toLocaleDateString()}
                    </TableCell>
                    <TableCell align="center">
                      <Chip 
                        label={day.total} 
                        size="small" 
                        color={day.total > avgViewsPerDay ? "primary" : "default"}
                      />
                    </TableCell>
                    <TableCell align="center">{day.sessions}</TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap', justifyContent: 'center' }}>
                        {Object.entries(day.pages)
                          .sort(([,a], [,b]) => b - a)
                          .slice(0, 3)
                          .map(([page, views]) => (
                            <Chip 
                              key={page} 
                              label={`${page} (${views})`} 
                              size="small" 
                              variant="outlined"
                            />
                          ))}
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Typography variant="h6" gutterBottom>
            Weekly Summary
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center">Week</TableCell>
                  <TableCell align="center">Total Views</TableCell>
                  <TableCell align="center">Top Pages</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {weeklyData.map((week, index) => (
                  <TableRow key={index}>
                    <TableCell>{week.week}</TableCell>
                    <TableCell align="center">
                      <Chip label={week.total} color="primary" />
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap', justifyContent: 'center' }}>
                        {Object.entries(week.pages)
                          .sort(([,a], [,b]) => b - a)
                          .slice(0, 3)
                          .map(([page, views]) => (
                            <Chip 
                              key={page} 
                              label={`${page} (${views})`} 
                              size="small" 
                              variant="outlined"
                            />
                          ))}
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <Typography variant="h6" gutterBottom>
            Monthly Summary
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center">Month</TableCell>
                  <TableCell align="center">Total Views</TableCell>
                  <TableCell align="center">Top Pages</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {monthlyData.map((month, index) => (
                  <TableRow key={index}>
                    <TableCell>{month.month}</TableCell>
                    <TableCell align="center">
                      <Chip label={month.total} color="primary" />
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap', justifyContent: 'center' }}>
                        {Object.entries(month.pages)
                          .sort(([,a], [,b]) => b - a)
                          .slice(0, 3)
                          .map(([page, views]) => (
                            <Chip 
                              key={page} 
                              label={`${page} (${views})`} 
                              size="small" 
                              variant="outlined"
                            />
                          ))}
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>

        <TabPanel value={tabValue} index={3}>
          <Typography variant="h6" gutterBottom>
            Top Pages (Last 30 Days)
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Page</TableCell>
                  <TableCell align="center">Views</TableCell>
                  <TableCell align="center">Percentage</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {topPages.map((pageData, index) => (
                  <TableRow key={pageData.page}>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                          #{index + 1} {pageData.page}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="center">
                      <Chip label={pageData.views} color="primary" />
                    </TableCell>
                    <TableCell align="center">
                      {((pageData.views / totalViewsLast30Days) * 100).toFixed(1)}%
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
      </Paper>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Clear Analytics Data</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to clear all analytics data? This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleClearData} color="error" variant="contained">
            Clear Data
          </Button>
        </DialogActions>
      </Dialog>
      </Container>
    </Box>
  );
}
